import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import useAuth from "../../CustomHook/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../CustomHook/useAxiosPublic";


const ContactForm = () => {
    const axiosPublic =useAxiosPublic()
    const user = useAuth()
    const hanldeContactSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const message = form.message.value;
        const data = { email, name, message }
        const res = await axiosPublic.post('/contact', data);
        console.log(res.data);
        if (res.data.insertedId) {
            toast.success('Your message deliverd to the admin')
            form.reset()
        }
        else {
            toast.error('Message send Failed')
        }
    }
    return (
        <div className="my-10 lg:my-20">
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl shadow-gray-500 dark:bg-gray-800 lg:max-w-4xl">
                <div
                    className="hidden bg-cover lg:block lg:w-1/2"
                    style={{ backgroundImage: "url('https://img.freepik.com/free-photo/funny-3d-illustration-american-referee_183364-80287.jpg?t=st=1718080908~exp=1718084508~hmac=5bb3422e906e377d5b1f48852f2b463668be8cb11eaa4f33aedabd841c453b69&w=740')" }}
                ></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-14" src="https://i.ibb.co/hs3dnWn/associate-pule-new-logo.png" alt="Logo" />
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Have any query?<br></br> Feel free to ask</p>

                    <form onSubmit={hanldeContactSubmit}>

                        <div className="mt-4">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                            >
                                Name
                            </label>
                            <input
                                name="name"
                                defaultValue={user?.displayName}
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                            />
                        </div>
                        <div className="mt-4">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                            >
                                Email Address
                            </label>
                            <input
                                name="email"
                                defaultValue={user?.email}
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type="email"
                            />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                    htmlFor="loggingPassword"
                                >
                                    Message
                                </label>

                            </div>
                            <textarea name="message" placeholder="Please type your query or message" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 textarea textarea-bordered textarea-lg " ></textarea>
                        </div>

                        <div className="mt-6 text-center">
                            <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                <div className="flex items-center justify-center">
                                    <h2>Submit</h2>
                                    <div>
                                        <MdOutlineKeyboardDoubleArrowRight className="h-6 w-6"></MdOutlineKeyboardDoubleArrowRight>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default ContactForm;
