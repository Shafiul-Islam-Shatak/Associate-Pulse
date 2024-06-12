import { GoPeople } from "react-icons/go";
import { NavLink } from "react-router-dom";


const HRNavbar = () => {
    return (
        <div>
            <ul className="space-y-2">
               
                <li>
                    <NavLink to='/dashbord/employee-list'>
                        <div className="flex items-center gap-3">
                            <div><GoPeople></GoPeople></div>
                            <div><h2>My Employees</h2></div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashbord/details'>
                        <div className="flex items-center gap-3">
                            <div><GoPeople></GoPeople></div>
                            <div><h2>Employe Work Details</h2></div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashbord/progress'>
                        <div className="flex items-center gap-3">
                            <div><GoPeople></GoPeople></div>
                            <div><h2>Progress</h2></div>
                        </div>
                    </NavLink>
                </li>

            </ul>

        </div>
    );
};

export default HRNavbar;