import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../CustomHook/useAuth";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import SectionTitle from "../../../Shared Components/SectionTitle";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const user = useAuth()
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
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
                    title={`Payment History of ${user?.displayName}`}
                    description={`Total trasnsaction ${payments.length}`}
                ></SectionTitle>
            </div>

            <div className="overflow-x-auto">
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