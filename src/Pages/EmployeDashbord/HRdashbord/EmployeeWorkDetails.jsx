import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../CustomHook/useAuth";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";

const EmployeeWorkDetails = async () => {

    const user = useAuth()
    const axiosSecure = useAxiosSecure();
    const { data: employe = [], } = useQuery({
        queryKey: ['employe'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/details/${user.email}`);
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