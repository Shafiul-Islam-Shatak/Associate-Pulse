import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../CustomHook/useAuth";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import SectionTitle from "../../../Shared Components/SectionTitle";
import { ClimbingBoxLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const user = useAuth();

    // Define state variables
    const [iteamPerPage, setIteamPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);

    const { data, isLoading } = useQuery({
        queryKey: ['payments', iteamPerPage, currentPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-payment-history/${user.email}?page=${currentPage}&size=${iteamPerPage}`);
            return res.data;
        }
    });

    const payments = data?.payments || [];
    console.log(payments);
    const totalCount = data?.totalCount || 0;
    console.log(totalCount);

    const numberOfPages = Math.ceil(totalCount / iteamPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const handleIteamPerPage = (e) => {
        const iteamCount = parseInt(e.target.value);
        setIteamPerPage(iteamCount);
        setCurrentPage(0);
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="dark:text-black">
            <Helmet>
                <title>Payment History</title>
            </Helmet>
            <SectionTitle
                title={`Payment History of ${user?.displayName}`}
                description={`Total transaction ${totalCount}`}
            />
            <div className="overflow-x-auto">
                {isLoading ? (
                    <div className="flex justify-center items-center h-screen">
                        <ClimbingBoxLoader color="#36d7b7" />
                    </div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Month</th>
                                <th>Amount</th>
                                <th>Transaction Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr key={payment._id}>
                                    <td>{index + 1}</td>
                                    <td>{payment.month}</td>
                                    <td>{payment.salary}</td>
                                    <td>{payment._id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="justify-center flex mt-8">
                    <button onClick={handlePrevPage} className="bg-slate-200 btn mr-2">Previous</button>
                    {pages.map((page) => (
                        <button
                            className={`btn ${currentPage === page ? 'mx-1 bg-orange-400 text-2xl' : 'mx-1 bg-gray-200'}`}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >
                            {page + 1}
                        </button>
                    ))}
                    <button onClick={handleNextPage} className="bg-slate-200 btn ml-2">Next</button>
                    <select className="dark:bg-white" value={iteamPerPage} onChange={handleIteamPerPage}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
