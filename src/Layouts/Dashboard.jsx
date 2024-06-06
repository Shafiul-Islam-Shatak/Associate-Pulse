import { Link, NavLink, Outlet } from "react-router-dom";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";



const Dashboard = () => {
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
                            <li>
                                <NavLink to='/dashbord/worksheet'>
                                    <div className="flex items-center gap-3">
                                        <div><BiSolidSpreadsheet></BiSolidSpreadsheet></div>
                                        <div><h2>Work Sheet</h2></div>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashbord/payment-history'>
                                    <div className="flex items-center gap-3">
                                        <div><MdPayment></MdPayment></div>
                                        <div><h2>My Payment</h2></div>
                                    </div>
                                </NavLink>
                            </li>
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




