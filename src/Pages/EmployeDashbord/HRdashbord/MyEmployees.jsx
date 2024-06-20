import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared Components/SectionTitle";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import Swal from 'sweetalert2'
import { ImCross } from "react-icons/im";
import { MdVerified } from "react-icons/md";
import { Tooltip } from 'react-tooltip'
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";


const MyEmployees = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedEmploye, setSelectedEmploye] = useState(null);
    const modalRef = useRef(null);
    const axiosSecure = useAxiosSecure();
    const { data: employees = [], refetch, isLoading } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosSecure.get('/myEmployess');
            return res.data;
        }
    })


    const handleVerifiy = (employe) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Verify this Employe ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Verify!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/myEmploye/hr/${employe._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${employe.name} has been Verified`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });

    }

    const handleCloseModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const handleConfirmPayment = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const salary = form.salary.value;
        const bank_account = form.bank_account.value;
        const month = form.month.value;
        const paymentInfo = { name, email, salary, bank_account, month }
        handleCloseModal()

        Swal.fire({
            title: "Are you sure?",
            text: `Are you sure to pay ${salary} BDT to ${name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post(`/employes/peyment`, paymentInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `Payment Success`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        else {
                            toast.error(res.data.message)
                        }
                    })
            }
        });

    }


    const handlePayNowClick = (employe) => {
        setSelectedEmploye(employe);
        document.getElementById('my_modal_3').showModal();
        // console.log(selectedEmploye.name);
    };


    return (
        <div>
            <div>
            <Helmet>
                <title>My Employees</title>
            </Helmet>
                <Tooltip id="not-verified" />
                <Tooltip id="verified" />
                <SectionTitle
                    title="Associate Pulse"
                    description={`Total Employees ${employees.length}`}
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
                            <th>Employe</th>
                            <th>Bank Details</th>
                            <th>Role</th>
                            <th>Salary</th>
                            <th>Make HR</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employe, index) =>
                                // console.log(employe.email)
                                <tr key={employe._id} >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={employe.employeImg} alt={employe.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{employe.name}</div>
                                                <div className="text-sm opacity-50">{employe.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>{employe.bank_account}</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{employe.role}</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                {employe.salary}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{<button
                                        onClick={() => handlePayNowClick(employe)}
                                        disabled={employe.status !== 'Verified'} type="button" className={`px-5 py-2 font-semibold rounded-full ${employe.status === 'Verified' ? 'bg-gray-600' : 'bg-gray-200'} text-white  `}>Pay Now</button>
                                    }</td>
                                    <td>
                                        {
                                            employe.status !== 'Verified' ?
                                                <button onClick={() => handleVerifiy(employe)}><ImCross
                                                    className="text-blue-500 text-xl"
                                                    data-tooltip-id="not-verified" data-tooltip-content={`Click to verify ${employe.name}`}
                                                    data-tooltip-place="bottom"
                                                ></ImCross></button> :
                                                <MdVerified
                                                    className="text-blue-500 text-xl"
                                                    data-tooltip-id="verified" data-tooltip-content={`Already Verified`}
                                                    data-tooltip-place="bottom"
                                                ></MdVerified>
                                        }
                                    </td>
                                    <td>
                                        <Link to={`../details/${employe.email}`}>
                                            <button className="px-5 py-2 font-semibold rounded-full bg-gray-600 text-white">View Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                        {/* row 1 */}
                    </tbody>
                </table>
                <dialog id="my_modal_3" className="modal" ref={modalRef}>
                    <div className="modal-box">

                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Make Payment</h3>

                        <form onSubmit={handleConfirmPayment} >
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Employee Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={selectedEmploye?.name}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div>
                                <label className=" mb-2 text-sm text-gray-600 dark:text-gray-200 hidden">Employee email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={selectedEmploye?.email}
                                    className="hidden  w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm text-gray-600 dark:text-gray-200">Bank Account</label>

                                </div>
                                <input
                                    type="text"
                                    name="bank_account"
                                    value={selectedEmploye?.bank_account}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm text-gray-600 dark:text-gray-200">Salary</label>

                                </div>
                                <input
                                    type="text"
                                    name="salary"
                                    value={selectedEmploye?.salary}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-700 dark:text-gray-200">Select Month</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="MM/yyyy"
                                    showMonthYearPicker
                                    name="month"
                                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full px-4 py-2 bg-gray-600 text-white">
                                    Confirm Payment
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div >
        </div >
    );
};

export default MyEmployees;