import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { ClimbingBoxLoader } from "react-spinners";
import SectionTitle from "../../../Shared Components/SectionTitle";
import { useState } from "react";

const Progress = () => {
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');

    const axiosSecure = useAxiosSecure();
    const { data: progress = [], isLoading } = useQuery({
        queryKey: ['progress',selectedEmployee,  selectedMonth],
        queryFn: async () =>{
            const params = {};
            if (selectedEmployee) {
                params.employeeName = selectedEmployee;
            }
            if (selectedMonth) {
                params.month = selectedMonth.toLowerCase(); // Convert month name to lowercase for consistency
            }
    
            const res = await axiosSecure.get('/progress', { params });
            return res.data;
        }
    })

    const handleclear =()=>{
        setSelectedEmployee('')
        setSelectedMonth('')
    }
    return (
        <div className="">
            <div>
                <Helmet>
                    <title>Progress</title>
                </Helmet>
            </div>
            <div>
                <SectionTitle
                    title={'Company Progress'}
                    description={'Your Emplyee completed task'}
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

                <div className="flex items-center my-10">
                    <h1 className="text-2xl">Apply a filter from here : </h1>
                    {/* Dropdown for selecting employee */}
                    <select
                        value={selectedEmployee}
                        onChange={(e) => setSelectedEmployee(e.target.value)}
                        className="mx-2 input input-bordered "
                    >
                        <option value="">Select Employee</option>
                        {/* Populate dropdown with employee names */}
                        {progress.map((progres, index) => (
                            <option key={index} value={progres.name}>
                                {progres.name}
                            </option>
                        ))}
                    </select>

                    {/* Dropdown for selecting month */}
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="mx-2 input input-bordered  "
                    >
                        <option value="">Select Month</option>
                        {/* Populate dropdown with months (you can customize this based on your data structure) */}
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                        {/* Add more months as needed */}
                    </select>

                    <button onClick={handleclear} className="btn btn-active btn-neutral ">Clear filter</button>
                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                SL
                            </th>
                            <th>Employe name</th>
                            <th>Task</th>
                            <th>Date</th>
                            <th>Hours</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            progress.map((progres, index) =>
                                <tr key={progres._id} >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>{progres.name}</td>
                                    <td>{progres.task}</td>
                                    <td>{progres.date}</td>
                                    <td>{progres.hours} hrs</td>
                                    <td>{progres.email}</td>
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

export default Progress;