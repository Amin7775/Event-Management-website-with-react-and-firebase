import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut, photo } = useContext(AuthContext);
  const navigate = useNavigate()

  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(photo);
  }, [photo]);

  const handleSignOut = () => {
    logOut()
    .then(()=>{
      toast('Log Out Successful')
      setTimeout(()=>{
        navigate('/')
      },2000)
    })
  };
 
  const navLinks = (
    <>
      <li className="hover:text-black hover:bg-orange-400 rounded-md mx-1">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="hover:text-black hover:bg-orange-400 rounded-md mx-1">
        <NavLink to={"/aboutUs"}>About Us</NavLink>
      </li>
      <li className="hover:text-black hover:bg-orange-400 rounded-md mx-1">
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li className="hover:text-black hover:bg-orange-400 rounded-md mx-1">
        <NavLink to={"/register"}>Register</NavLink>
      </li>
      {user && (
        <>
          <li className="hover:text-black hover:bg-orange-400 rounded-md mx-1">
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li className="hover:text-black hover:bg-orange-400 rounded-md mx-1">
            <NavLink to={"/cart"}>Cart</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar  bg-[#1d263f] text-white px-3 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-lg font-medium bg-black text-white"
            id="sidebar"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl font-bold">
          <span className="text-orange-400">
            Foot<span className="text-white">events</span>
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-horizontal px-1 font-medium text-white hover:text-white"
          id="sidebar"
        >
          {navLinks}
        </ul>
      </div>
      {/* user section */}
      <div className="navbar-end mr-2">
        {user ? (
          <div className="flex items-center gap-3">
            <p className="hidden md:block">{user.displayName}</p>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-20 rounded-full mt-2">
                  {image ? <img src={image} /> : <img src={user.photoURL} />}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black rounded-box w-52 "
              >
                <li className="hover:text-black hover:bg-orange-400 rounded-md">
                  <a>{user.displayName}</a>
                </li>
                <li className="hover:text-black hover:bg-orange-400 rounded-md">
                  <a>{user.email}</a>
                </li>
                <li className="hover:text-black hover:bg-orange-400 rounded-md">
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
              <button onClick={handleSignOut} className="btn bg-orange-600 border-0 text-white py-2 px-8 font-semibold hover:bg-orange-400 hidden md:block">
            Logout
          </button>
          </div>
        ) : (
          <>
            <p className="mr-2 hidden md:block">Guest Mode</p>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-20 rounded-full">
                  <img src="https://i.ibb.co/RjNr5mp/speaker2.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black rounded-box w-52"
              >
                <li className="hover:text-black hover:bg-orange-400 rounded-md">
                  <a>Not Logged In</a>
                </li>
                <li className="hover:text-black hover:bg-orange-400 rounded-md">
                  <Link to={'/login'}><button>Login</button></Link>
                </li>
                
              </ul>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
