import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../CustomHook/useAuth";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import { useParams } from "react-router-dom";

const EmployeeWorkDetails = async () => {
    const { email } = useParams();

    const user = useAuth()
    const axiosSecure = useAxiosSecure();
    const { data: employe = [], refetch } = useQuery({
        queryKey: ['employe'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/details/${email}`);
            return res.data;

        }
    })
 


    return (
        <div>
            <h2>name {employe.name}</h2>
        </div>
    );
};

export default EmployeeWorkDetails;