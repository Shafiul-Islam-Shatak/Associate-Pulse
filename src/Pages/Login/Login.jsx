import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../CustomHook/useAxiosPublic";




const Login = () => {
    const axiosPublic = useAxiosPublic()
    const { login, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = async (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        try {
            await login(email, password);
            toast.success('Login success');
            navigate(location?.state || '/');
        } catch (error) {
            toast.error(error.message);
            console.log(error)
        }
    }
    const handleGoogleLogin = async () => {
        googleLogin()
            .then(async (result) => {
                const employeInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    role: 'Employee',
                    designation: "Sales-Assistant",
                    salary: 10000,
                    bank_account: '42414245215',
                    employeImg: result.user?.photoURL,
                    status : 'Not verified'
                }
                // console.log(employeInfo);
                try {
                    await axiosPublic.post('/employesData', employeInfo);
                    toast.success('Login success')
                } catch (error) {
                    toast.error("Error posting employee data:", error);
                    toast.error('Failed to create user');
                }
                navigate(location?.state ? location.state : '/');
            })

    }

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/3"
                    style={{
                        backgroundImage: 'url(https://i.ibb.co/pbSfx62/login.png)',
                    }}
                >
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div className="bg-black p-10 bg-opacity-65 rounded-xl">
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">Welcome Back</h2>
                            <p className="max-w-xl mt-3 text-gray-300">
                                We are thrilled to have you here! At Associate Pulse, our goal is to empower you with the insights and tools you need to thrive. Login now to access your personalized dashboard, stay updated with the latest trends, and connect with our vibrant community. Lets pulse forward together!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img className=" " src="https://i.ibb.co/hs3dnWn/associate-pule-new-logo.png" alt="Logo" />
                            </div>
                            <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="example@example.com"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                    </div>

                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Your Password"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                </div>
                            </form>
                            <hr className="my-5" />
                            <button onClick={handleGoogleLogin} className="w-full">
                                <div className="flex items-center gap-5 justify-center border border-dashed border-gray-500 rounded-xl py-2">
                                    <FcGoogle className="h-8 w-8"></FcGoogle>
                                    <h2 className="font-semibold">Continue with Google</h2>
                                </div>
                            </button>

                            <p className="mt-6 text-sm text-center text-gray-400">
                                Dont have an account yet? <Link to='/sign-up' className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;