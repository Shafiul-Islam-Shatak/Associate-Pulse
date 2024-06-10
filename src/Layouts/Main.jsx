import { Outlet } from "react-router-dom";
import Navbar from "../Shared Components/Navbar";
import Footer from "../Shared Components/Footer";



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;