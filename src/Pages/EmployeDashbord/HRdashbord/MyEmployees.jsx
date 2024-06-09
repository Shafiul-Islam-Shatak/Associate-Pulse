import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared Components/SectionTitle";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import Swal from 'sweetalert2'
import { ImCross } from "react-icons/im";
import { MdVerified } from "react-icons/md";
import { Tooltip } from 'react-tooltip'
import { useState } from "react";



const MyEmployees = () => {
    const [selectedEmploye, setSelectedEmploye] = useState(null);
    const axiosSecure = useAxiosSecure();
    const { data: employees = [], refetch } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosSecure.get('/myEmployess');
            console.log(res);
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
    // const handlePayment = (employe) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "Make HR ?",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosSecure.patch(`/myEmploye/hr/${employe._id}`)
    //                 .then(res => {
    //                     if (res.data.modifiedCount > 0) {
    //                         refetch()
    //                         Swal.fire({
    //                             position: "top-end",
    //                             icon: "success",
    //                             title: `${employe.name} is now HR`,
    //                             showConfirmButton: false,
    //                             timer: 1500
    //                         });
    //                     }
    //                 })
    //         }
    //     });

    // }


    const handlePayNowClick = (employe) => {
        console.log(employe);
        setSelectedEmploye(employe);
        document.getElementById('my_modal_3').showModal();
        console.log(selectedEmploye.name);
    };




    return (
        <div>
            <div>
                <Tooltip id="not-verified" />
                <Tooltip id="verified" />
                <SectionTitle
                    title="Associate Pulse"
                    description={`Total Employees ${employees.length}`}
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
                                        disabled={employe.status !== 'Verified'} type="button" className={`px-5 py-2 font-semibold rounded-full ${employe.status === 'Verified' ? '' : 'bg-gray-200'} text-white bg-gray-600 `}>Pay Now</button>
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
                                </tr>
                            )
                        }
                        {/* row 1 */}
                    </tbody>
                </table>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">You are paying {selectedEmploye?.name}</h3>
                        <h2 className="mt-3">Bank Account : {selectedEmploye?.bank_account}</h2>
                        <h2 className="mt-1">Ammount : {selectedEmploye?.salary}</h2>
                        <div>
                            <label className="block mb-2 ">You paying for selected month</label>
                            <select 
                                name="role"
                                className="select select-bordered w-full max-w-xs">
                                <option disabled defaultValue={''} selected>Selecet Your Role</option>
                                

                            </select>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default MyEmployees;