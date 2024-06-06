import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared Components/SectionTitle";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import Swal from 'sweetalert2'


const AllEmployee = () => {
    const axiosSecure = useAxiosSecure();
    const { data: employees = [] , refetch} = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosSecure.get('/employesData');
            return res.data;

        }
    })
    const handleDeleteEmploye = (employe) => {
        Swal.fire({
            title: "Are you sure?",
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
            },
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/employe/${employe._id}`)
                .then(res=>{
                    if(res.data.deletedCount>0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                            hideClass: {
                                popup: `
                                  animate__animated
                                  animate__fadeOutDown
                                  animate__faster
                                `
                              }
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
                                        <span>{employe.salary}</span>
                                    </td>
                                    <td>{employe.role === 'HR' ?
                                        <></> : <button type="button" className="px-5 py-2 font-semibold rounded-full text-white bg-gray-600 ">Make HR</button>
                                    }</td>
                                    <td>
                                        <button onClick={() => handleDeleteEmploye(employe)}
                                            type="button" className="px-5 py-2 font-semibold rounded-full text-white bg-red-500 ">Fire</button>
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