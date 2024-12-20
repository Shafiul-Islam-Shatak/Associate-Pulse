import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('req stopped by interceptor', token);
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })

    // 401 and 403
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async function (error) {
        const status = error?.response?.status;
        // console.log('error by interceptor', status);
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error);
    })

    return axiosSecure
};

export default useAxiosSecure;