import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../CustomHook/useAuth";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import SectionTitle from "../../../Shared Components/SectionTitle";
import { ClimbingBoxLoader } from "react-spinners";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const user = useAuth()
    const { data: payments = [] , isLoading} = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-payment-history/${user.email}`);
            return res.data;

        }
    })
    // console.log(user);
    return (
        <div>
            <div>
                <SectionTitle
                    title={`Payment History of ${user?.displayName}`}
                    description={`Total trasnsaction ${payments.length}`}
                ></SectionTitle>
            </div>

            <div className="overflow-x-auto">
            {isLoading &&
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16">
                        <ClimbingBoxLoader color="#36d7b7" />
                    </div>
                </div>
            }
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                SL
                            </th>
                            <th>Month</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment , index) =>
                                <tr key={payment._id} >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>{payment.month}</td>
                                    <td>{payment.salary}</td>
                                    <td>{payment._id}</td>
                                </tr>
                            )
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;