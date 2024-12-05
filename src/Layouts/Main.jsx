import { Outlet } from "react-router-dom";
import Navbar from "../Shared Components/Navbar";
import Footer from "../Shared Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Main = () => {
    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;