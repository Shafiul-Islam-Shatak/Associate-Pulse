import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared Components/SectionTitle";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import Swal from 'sweetalert2'
import { CiEdit } from "react-icons/ci";
import { ClimbingBoxLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import toast from "react-hot-toast";


const AllEmployee = () => {
    const [isGridView, setIsGridView] = useState(false);
    const [selectedEmploye, setSelectedEmploye] = useState(null);
    console.log(selectedEmploye);
    const modalRef = useRef(null);


    const axiosSecure = useAxiosSecure();
    const { data: employees = [], refetch, isLoading } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosSecure.get('/employesData');
            return res.data;

        }
    })
    const handleUpdateSalary = event => {
        event.preventDefault()
        const form = event.target;
        const newSalary = form.new_salary.value;
        console.log(newSalary);
        handleCloseModal()
        if(newSalary > selectedEmploye.salary){

            Swal.fire({
                title: "Are you sure?",
                text: `Are you sure to update`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Confirm"
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log(selectedEmploye._id);
                    axiosSecure.patch(`/employe/update-salary/${selectedEmploye._id}`, { salary: newSalary })
                        .then(res => {
                            console.log(res.data);
                            if (res.data.modifiedCount > 0) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: `Update Success`,
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                refetch()
                            }
                            else {
                                toast.error(res.data.message)
                            }
                        })
                }
            });
        }
        else{
            toast.error("You Can't decrease salary")
        }


    }
    const handleCloseModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };
    const handleEditSalary = (employe) => {
        setSelectedEmploye(employe);
        document.getElementById('my_modal_3').showModal();
        // console.log(selectedEmploye.salary);
    };
    const handleFireEmployee = (employe) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Fire this Employe ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Fire!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/employe/${employe._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${employe.name} has been fired`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });

    }
    const handleMakeHr = (employe) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Make HR ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/employe/hr/${employe._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${employe.name} is now HR`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });

    }





    return (
        <div className="">
            <div>
                <Helmet>
                    <title>All Employee</title>
                </Helmet>
                <SectionTitle
                    title="Associate Pulse"
                    description={`Total Employees ${employees.length}`}
                ></SectionTitle>
                <div className="flex mb-4">
                    <label className="flex cursor-pointer gap-2">
                        <span>Grid View</span>
                        <input
                            type="checkbox"
                            className="toggle theme-controller"
                            checked={isGridView}
                            onChange={() => setIsGridView(!isGridView)}
                        />
                        <span>List View</span>
                    </label>
                </div>
            </div>
            {isLoading &&
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16">
                        <ClimbingBoxLoader color="#36d7b7" />
                    </div>
                </div>
            }
            {
                isGridView ?
                    <div>
                        <div className="">

                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            SL
                                        </th>
                                        <th>Employe</th>
                                        <th>Designation</th>
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
                                                    <div className="flex items-center gap-3 ">
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
                                                    <span>{employe.designation}</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-ghost badge-sm">{employe.role}</span>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <div>
                                                            {employe.salary}
                                                        </div>
                                                        <div>
                                                            <CiEdit onClick={() => handleEditSalary(employe)}></CiEdit>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {
                                                        employe.role === 'HR' || employe.role === 'Admin' || employe.status === 'fired' ?
                                                            <></> : <button onClick={() => handleMakeHr(employe)} type="button" className="px-5 py-2 font-semibold rounded-full text-white bg-gray-600 ">Make HR</button>
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        employe.status === 'fired' ?
                                                            <span>Fired</span> : <button onClick={() => handleFireEmployee(employe)}
                                                                type="button" className="px-5 py-2 font-semibold rounded-full text-white bg-red-500 ">Fire</button>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }
                                    {/* row 1 */}

                                </tbody>

                            </table>
                        </div>
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
                        {
                            employees.map((employe) =>
                                <div key={employe._id} >

                                    <div className="card w-80 bg-base-100 shadow-xl ">
                                        <div className="card-body">
                                            <div className="avatar">
                                                <div className="w-24 rounded-xl">
                                                    <img src={employe.employeImg} />
                                                </div>
                                            </div>
                                            <h2 className="font-semibold text-lg">Name : {employe.name}</h2>
                                            <p>Designation : {employe.designation}</p>
                                            <p>Email : {employe.email}</p>
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    Salary : {employe.salary}
                                                </div>
                                                <div>
                                                    <CiEdit onClick={() => handleEditSalary(employe)}></CiEdit>
                                                </div>
                                            </div>
                                            <p>Role : {employe.role}</p>
                                            <div className="card-actions justify-end">
                                                {
                                                    employe.role === 'HR' || employe.role === 'Admin' || employe.status === 'fired' ?
                                                        <></> : <button onClick={() => handleMakeHr(employe)} type="button" className="px-5 py-2 font-semibold rounded-full text-white bg-gray-600 ">Make HR</button>
                                                }
                                                {
                                                    employe.status === 'fired' ?
                                                        <span>Fired</span> : <button onClick={() => handleFireEmployee(employe)}
                                                            type="button" className="px-5 py-2 font-semibold rounded-full text-white bg-red-500 ">Fire</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
            }
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
                    <div className="modal-box">

                        <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Make Payment</h3>

                        <form onSubmit={handleUpdateSalary} >
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 ">Update Salary</label>
                                <input
                                    type="number"
                                    name="new_salary"
                                    defaultValue={selectedEmploye?.salary}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full px-4 py-2 bg-gray-600 text-white">
                                    Confirm Update
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
        </div>
    );
};

export default AllEmployee;