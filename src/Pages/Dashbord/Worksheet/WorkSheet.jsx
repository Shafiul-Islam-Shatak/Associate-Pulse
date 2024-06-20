import { useState } from "react";
import SectionTitle from "../../../Shared Components/SectionTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../CustomHook/useAxiosSecure";
import useAuth from "../../../CustomHook/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { ClimbingBoxLoader } from "react-spinners";

const WorkSheet = () => {
    const user = useAuth()
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure()

    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-task/${user?.email}`);
            return res.data;
        }
    })
    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const task = form.task.value;
        const hours = form.hours.value;
        const date = form.date.value;
        const name = user?.displayName
        const email = user?.email
        const workData = { task, hours, date, name, email }
        const res = await axiosSecure.post('/task', workData)
        if (res.data.insertedId) {
            toast.success('Your work has been uploaded')
            form.reset()
            refetch()
        }
        else {
            toast.error('Failed to upload task')
        }
    }
    return (
        <div>
            <Helmet>
                <title>Work Sheet</title>
            </Helmet>
            <SectionTitle
                title='Submit Your Task'
                description='Just give a overview of your completed task'
            ></SectionTitle>
            <div>
                <section className="max-w-4xl p-6 mx-auto  rounded-md mt-10">
                    <h1 className="text-center font-bold text-2xl my-5">Upload your recent completed Task</h1>
                    <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-4">
                        <div className="flex flex-col">
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="task">Task</label>
                            <select
                                name="task"
                                className="select select-bordered w-full ">
                                <option disabled selected>Selecet Task</option>
                                <option value='Sales'>Sales</option>
                                <option value='Support'>Support</option>
                                <option value='Content'>Content</option>
                                <option value='Paper-work'>Paper-work</option>
                                <option value='Web-devlopment'>Web Devlopment</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="hours">Hours Worked (hr)</label>
                            <input name="hours" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 dark:text-gray-200" >Select Date</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat='dd/MM/yyyy'
                                name="date" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="flex justify-end mt-6">
                            <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                        </div>
                    </form>

                </section>


                <div>
                    {isLoading &&
                        <div className="flex justify-center items-center h-screen">
                            <div className="w-16 h-16">
                                <ClimbingBoxLoader color="#36d7b7" />
                            </div>
                        </div>
                    }
                    <div className="overflow-x-auto">
                        <table className="table">
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
                                    tasks.map((task, index) =>
                                        <tr key={task._id} >
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>{task.name}</td>
                                            <td>{task.task}</td>
                                            <td>{task.date}</td>
                                            <td>{task.hours} hrs</td>
                                            <td>{task.email}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSheet;