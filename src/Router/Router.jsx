import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
          path: '/',
          element : <Home></Home>
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
  ]);


export default router;