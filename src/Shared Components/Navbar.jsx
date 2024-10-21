import { Link, useNavigate } from "react-router-dom";
import useAuth from "../CustomHook/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const user = useAuth()
  const { logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const navlinks =
    <>
      <li><Link>Home</Link></li>
      <li><Link to='/contact'>Contact Us</Link></li>
    </>

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Log Out succesfull !");
        navigate('/login')
      })
      .catch()
  }

  return (
    <div>
      <div className="navbar bg-base-100 dark:bg-gray-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <div className="w-48">
            <Link to='/'><img src="https://i.ibb.co/hs3dnWn/associate-pule-new-logo.png" alt="" /></Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end ">

          {
            user &&
            <div className="dropdown ">
              <div tabIndex={0} role="button" className=" ">
                <img className="rounded-full max-w-10 tooltip tooltip-left" data-tooltip-id='profile' data-tooltip-content={user.displayName} src={user ? user.photoURL : ''} alt="" />
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52 absolute -translate-x-40 ">
                <li><Link to='/dashbord'>My Dashbord</Link></li>
                <li><h1 onClick={handleLogout} className="font-bold">Log Out</h1></li>
              </ul>
            </div>


          }
          {
            user ? '' :
              <Link to='/login'>
                <h1 className="btn font-bold">Log in</h1>
              </Link>
          }

        </div>

      </div>
    </div>


  );
};

export default Navbar;