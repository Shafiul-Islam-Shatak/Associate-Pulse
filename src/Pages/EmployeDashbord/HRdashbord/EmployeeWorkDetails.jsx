import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import { useParams } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';



const EmployeeWorkDetails = () => {
    const { email } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: employeData = {}, isLoading } = useQuery({
        queryKey: ['employe', email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/details/${email}`);
            // console.log(res.data);
            return res.data;
        },

    });

    const { employe, payment } = employeData;
    console.log(payment);

    return (
        <div className="dark:text-black">

            {
                isLoading &&
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16">
                        <ClimbingBoxLoader color="#36d7b7" />
                    </div>
                </div>
            }

            <div>
                <div>
                    <div className="w-fit p-7  mt-10 mx-auto">
                        <div className="avatar">
                            <div className="w-40 rounded-xl">
                                <img src={employe?.employeImg} />
                            </div>
                        </div>
                        <h1 className="font-semibold text-xl mt-5">Name : {employe?.name}</h1>
                        <h1 className="font-semibold text-xl">Designation : {employe?.designation}</h1>
                    </div>
                </div>

                <div className="mx-auto w-fit">
                    {payment?.length > 0 ?
                        <div>
                            <h1 className="my-5 font-bold text-2xl">Payment summary of {employe?.name}</h1>

                            <BarChart width={600} height={300} data={payment}>
                                <XAxis dataKey={'month'} stroke="#8884d8" />
                                <YAxis />
                                <Tooltip />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Bar dataKey={'salary'} fill="#8884d8" barSize={30} />
                            </BarChart>

                        </div>


                        :
                        <h1 className="my-5 font-bold text-2xl">{employe?.name} has no payment history.</h1>
                    }


                </div>

            </div>


        </div>
    );
};

export default EmployeeWorkDetails;
