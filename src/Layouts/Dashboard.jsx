import { Link,  Outlet, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import useAdmin from "../CustomHook/useAdmin";
import AdminNavbar from "../Pages/EmployeDashbord/AdminDashbord/AdminNavbar";
import EmployeeNavbar from "../Pages/EmployeDashbord/Employee/EmployeeNavbar";
import useHR from "../CustomHook/useHR";
import HRNavbar from "../Pages/EmployeDashbord/HRdashbord/HRNavbar";
import useAuth from "../CustomHook/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../Shared Components/SectionTitle";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";



const Dashboard = () => {

    // useEffect(() => {
    //     AOS.init({
    //         duration: 500
    //     });
    // }, [])

    const [isAdmin] = useAdmin();
    const [isHR] = useHR();
    const user = useAuth()
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    // console.log(user);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Log Out succesfull !");
                navigate('/login')
            })
            .catch()
    }


    return (
        <div className="flex">
             <Helmet>
                <title>Dashboard</title>
            </Helmet>
            {/* dashbord navbar */}
            <div className=" min-h-screen z-50 ">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content absolute  flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden"><GiHamburgerMenu></GiHamburgerMenu></label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-64 bg-slate-700 text-white h-fit rounded-r-xl lg:rounded-none lg:min-h-full">

                            <div className="w-40 mb-5 mt-2 lg:mb-10 lg:mt-5">
                                <Link to='/'><img src="https://i.ibb.co/d754Kxj/whitw-Blue-and-Black-Modern-Digital-Technology-Logo.png" alt="" /></Link>
                            </div>
                            <div>
                                <div className="avatar online">
                                    <div className="w-24 rounded-full ml-8 drop-shadow shadow-lg shadow-slate-400">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <div className="my-10">
                                    <h2 className="font-semibold text-lg">Hii , {user?.displayName} Welcome back to the work again</h2>
                                </div>
                            </div>
                            {/* Sidebar content here */}
                            {
                                isAdmin ? <AdminNavbar></AdminNavbar>
                                    : isHR ? <HRNavbar></HRNavbar>
                                        : <EmployeeNavbar></EmployeeNavbar>
                            }

                            
                            <div className="mt-10">
                                <li><h1 onClick={handleLogout} className="font-bold">Log Out                                    <FaArrowRightToBracket className="ml-2"></FaArrowRightToBracket>
                                </h1></li>
                            </div>
                        </ul>                       

                    </div>
                </div>
            </div>

            {/* dashbord content */}
            <div className="flex-1">
             
                <Outlet>
                </Outlet>
            </div>


        </div>
    );
};

export default Dashboard;




