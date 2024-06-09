import { BiSolidSpreadsheet } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom";

const EmployeeNavbar = () => {
    return (
        <div>
            <ul>

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
    );
};

export default EmployeeNavbar;