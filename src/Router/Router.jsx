import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Secrete from "../Shared Components/Secrete";
import WorkSheet from "../Pages/Dashbord/Worksheet/WorkSheet";
import PaymentHistory from "../Pages/Dashbord/Payment/PaymentHistory";
import AllEmployee from "../Pages/EmployeDashbord/AdminDashbord/AllEmployee";
import AdminRoute from "./AdminRoute";
import HrRoute from "./HrRoute";
import MyEmployees from "../Pages/EmployeDashbord/HRdashbord/MyEmployees";
import EmployeeWorkDetails from "../Pages/EmployeDashbord/HRdashbord/EmployeeWorkDetails";
import Progress from "../Pages/EmployeDashbord/HRdashbord/Progress";
import ContactForm from "../Pages/ContactUs/ContactForm";
import ContactList from "../Pages/EmployeDashbord/AdminDashbord/ContactList";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
          path: '/',
          element : <Home></Home>
        },
        {
          path :'/secrete',
          element : <PrivateRoute><Secrete></Secrete></PrivateRoute>
        },
        {
          path :'/contact',
          element : <ContactForm></ContactForm>
        }
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/sign-up',
      element:<SignUp></SignUp>
    },
    {
      path: "dashbord",
      element: <Dashboard></Dashboard>,
      children : [
        {
          path: 'worksheet',
          element : <WorkSheet></WorkSheet>
        },
        {
          path :'payment-history',
          element : <PaymentHistory></PaymentHistory>
        },
        {
          path :'all-employse-list',
          element : <AdminRoute><AllEmployee></AllEmployee></AdminRoute>
        },
        {
          path :'contact-list',
          element : <AdminRoute><ContactList></ContactList></AdminRoute>
        },
        {
          path :'employee-list',
          element : <HrRoute><MyEmployees></MyEmployees></HrRoute>
        },
        {
          path :'employee-list/details/:id',
          element : <HrRoute><EmployeeWorkDetails></EmployeeWorkDetails></HrRoute>,
          // loader :({params})=>fetch(`details/${params.id}`)
        },
        {
          path :'progress',
          element : <HrRoute><Progress></Progress></HrRoute>
        },
      ]
    }
  ]);


export default router;