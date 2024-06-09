import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import useAdmin from "../CustomHook/useAdmin";
import AdminNavbar from "../Pages/EmployeDashbord/AdminDashbord/AdminNavbar";
import EmployeeNavbar from "../Pages/EmployeDashbord/Employee/EmployeeNavbar";
import useHR from "../CustomHook/useHR";
import HRNavbar from "../Pages/EmployeDashbord/HRdashbord/HRNavbar";




const Dashboard = () => {
    // TODO : get admin value from db
    const [isAdmin] = useAdmin();
    const [isHR] = useHR();
    return (
        <div className="flex">
            {/* dashbord navbar */}
            <div className=" min-h-screen ">
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
                            {/* Sidebar content here */}
                            {
                                isAdmin ? <AdminNavbar></AdminNavbar>
                                    : isHR ? <HRNavbar></HRNavbar>
                                        : <EmployeeNavbar></EmployeeNavbar>
                            }
                        </ul>

                    </div>
                </div>
            </div>

            {/* dashbord content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Dashboard;




