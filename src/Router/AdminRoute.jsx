import { useContext } from "react";
import useAdmin from "../CustomHook/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";


const AdminRoute = ({children}  ) => {
    const [isAdmin, isAdminLoading] = useAdmin()

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading || isAdminLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16">
                    <ClimbingBoxLoader color="#36d7b7" />
                </div>
            </div>
        )
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default AdminRoute;