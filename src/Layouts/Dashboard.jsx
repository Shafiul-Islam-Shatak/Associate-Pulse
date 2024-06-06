import { Outlet } from "react-router-dom";
import DashbordNavigation from "../Shared Components/DashbordNavigation";

const Dashboard = () => {
    return (
        <div className="flex ">
            <div className="grow">
                <DashbordNavigation></DashbordNavigation>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;