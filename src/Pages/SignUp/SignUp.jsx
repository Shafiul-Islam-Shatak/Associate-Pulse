import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">
                    <div
                        className="hidden bg-cover lg:block lg:w-2/5"
                        style={{ backgroundImage: "url('https://img.freepik.com/free-vector/man-concept-illustration_114360-22216.jpg?t=st=1717417993~exp=1717421593~hmac=ead09c660806b5e0b0499f0c199e1fa77d0443352afc0a9596606c7023a64feb&w=740')" }}
                    ></div>

                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <div className="mx-auto">
                                <img src="https://i.ibb.co/hs3dnWn/associate-pule-new-logo.png" alt="" />
                            </div>
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Aww, I can see your excitement to be our member!
                            </h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        type="text"
                                        placeholder="John doe"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    {errors.name && <span className="text-red-500">This field is required</span>}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Role</label>
                                    <select defaultValue='Employee'
                                        {...register("role", { required: true })}
                                        className="select select-bordered w-full max-w-xs">
                                        <option disabled value='Employee' selected>Selecet Your Role</option>
                                        <option value='Employee'>Employee</option>
                                        <option value='HR'>HR</option>
                                    </select>
                                    {errors.role && <span className="text-red-500">This field is required</span>}

                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Bank Account No</label>
                                    <input
                                        type="text"
                                        {...register("bank_account", { required: true })}
                                        placeholder="XXX-XX-XXXX-XXX"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    {errors.bank_account && <span className="text-red-500">This field is required</span>}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Salary</label>
                                    <input
                                        type="number"
                                        {...register("salary", { required: true })}
                                        placeholder="10,000"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    {errors.salary && <span className="text-red-500">This field is required</span>}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        placeholder="johnsnow@example.com"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    {errors.email && <span className="text-red-500">This field is required</span>}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input
                                        type="password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern : /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/
                                        })}
                                        placeholder="Enter your password"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 charecter</span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-red-500">Password not more than 20 charecter</span>}
                                    {errors.password?.type === 'pattern' && <span className="text-red-500">Password must have one uppercase, one lowercase & one special charecter</span>}
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Designation</label>
                                    <select defaultValue='N/A'
                                        {...register("designation", { required: true })}
                                        className="select select-bordered w-full max-w-xs">
                                        <option disabled value='N/A' selected>Selecet Your Designation</option>
                                        <option value='Sales-Assistant'>Sales Assistant</option>
                                        <option value='Social-Media-executive'>Social Media Executive</option>
                                        <option value='Digital-marketer'>Digital Marketer</option>
                                        <option value='Web-Devloper'>Web Devloper</option>
                                    </select>
                                    {errors.designation && <span className="text-red-500">This field is required</span>}

                                </div>
                                <div>
                                    <fieldset className="w-full space-y-1 dark:text-gray-800">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Photo</label>
                                        <div className="flex">
                                            <input type="file" name="files" id="files" className="px-3 py-2 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100" />
                                        </div>
                                    </fieldset>

                                </div>
                                <p className="mt-6 text-sm text-center text-gray-400">
                                    Already have an account ? <Link to='/login' className="text-blue-500 focus:outline-none focus:underline hover:underline">Login</Link>.
                                </p>

                                <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span>Sign Up</span>

                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default SignUp;