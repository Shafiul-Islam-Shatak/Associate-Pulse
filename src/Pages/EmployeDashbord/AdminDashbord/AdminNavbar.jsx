import { GoPeople } from "react-icons/go";
import { NavLink } from "react-router-dom";


const AdminNavbar = () => {
    return (
        <div >

            <ul className="space-y-2">
               

                <li>
                    <NavLink to='/dashbord/all-employse-list'>
                        <div className="flex items-center gap-3">
                            <div><GoPeople></GoPeople></div>
                            <div><h2>All Employees</h2></div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashbord/contact-list'>
                        <div className="flex items-center gap-3">
                            <div><GoPeople></GoPeople></div>
                            <div><h2>From Contacts</h2></div>
                        </div>
                    </NavLink>
                </li>

            </ul>
        </div>
    );
};

export default AdminNavbar;