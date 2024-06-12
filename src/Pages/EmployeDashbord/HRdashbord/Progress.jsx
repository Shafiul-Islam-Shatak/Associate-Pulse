import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { ClimbingBoxLoader } from "react-spinners";
import SectionTitle from "../../../Shared Components/SectionTitle";

const Progress = () => {

    const axiosSecure = useAxiosSecure();
    const { data: progress = [], isLoading } = useQuery({
        queryKey: ['progress'],
        queryFn: async () => {
            const res = await axiosSecure.get('/progress');
            return res.data;

        }
    })
    return (
        <div>
            <div>
                <Helmet>
                    <title>Progress</title>
                </Helmet>
            </div>
            <div>
                <SectionTitle
                    title={'Company Progress'}
                    description={'Your Emplyee completed task'}
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
                        <th>Employe name</th>
                        <th>Task</th>
                        <th>Date</th>
                        <th>Hours</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        progress.map((progres, index) =>
                            <tr key={progres._id} >
                                <td>
                                    {index + 1}
                                </td>
                                <td>{progres.name}</td>
                                <td>{progres.task}</td>
                                <td>{progres.date}</td>
                                <td>{progres.hours} hrs</td>
                                <td>{progres.email}</td>
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

export default Progress;