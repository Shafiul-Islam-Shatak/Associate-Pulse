import { Outlet } from "react-router-dom";
import Navbar from "../Shared Components/Navbar";



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;