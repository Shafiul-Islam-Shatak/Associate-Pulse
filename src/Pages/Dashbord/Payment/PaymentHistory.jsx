import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../CustomHook/useAuth";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import SectionTitle from "../../../Shared Components/SectionTitle";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const user = useAuth()
    const { data: payment = []} = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-payment-history/${user.email}`);
            return res.data;

        }
    })
    console.log(user);
    return (
        <div>
            <div>
                <SectionTitle
                title={`Payment History of ${user?.displayName}` }
                description={`Total trasnsaction ${payment.length}`}
                ></SectionTitle>
            </div>
        </div>
    );
};

export default PaymentHistory;