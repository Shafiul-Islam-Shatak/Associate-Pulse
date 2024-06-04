import { Outlet } from "react-router-dom";
import Navbar from "../Shared Components/Navbar";
import { Toaster } from 'react-hot-toast';



const Main = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;