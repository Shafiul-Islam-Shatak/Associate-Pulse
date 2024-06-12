import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import useHR from "../CustomHook/useHR";


const HrRoute = ({children}  ) => {
    const [isHR, isHRLoading] = useHR()

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading || isHRLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16">
                    <ClimbingBoxLoader color="#36d7b7" />
                </div>
            </div>
        )
    }
    if (user && isHR) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default HrRoute;