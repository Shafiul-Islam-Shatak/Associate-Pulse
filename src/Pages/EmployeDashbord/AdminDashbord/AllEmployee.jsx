import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared Components/SectionTitle";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import Swal from 'sweetalert2'
import { CiEdit } from "react-icons/ci";


const AllEmployee = () => {
    const axiosSecure = useAxiosSecure();
    const { data: employees = [], refetch } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosSecure.get('/employesData');
            return res.data;

        }
    })
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
        <div>
            <div>
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
                                                <CiEdit></CiEdit>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{employe.role === 'HR' || employe.role ==='Admin' || employe.status === 'fired' ?
                                        <></> : <button onClick={() => handleMakeHr(employe)} type="button" className="px-5 py-2 font-semibold rounded-full text-white bg-gray-600 ">Make HR</button>
                                    }</td>
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
    );
};

export default AllEmployee;