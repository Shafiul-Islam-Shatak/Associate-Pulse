import { useContext } from "react";
import useAdmin from "../CustomHook/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ( children ) => {
    const [isAdmin, isAdminLoading] = useAdmin()

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div>
            <div className="w-16 m-auto h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default AdminRoute;