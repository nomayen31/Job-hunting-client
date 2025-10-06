import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext); 
  const handleSignOut = () =>{
    logout()
    .then(()=>{
      console.log('signOut');
    })
    .catch(error =>{
      console.log(error);  
    });
    
  }
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          Find Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/employers"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          Employers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full top-0 left-0 z-20 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="CareerCore Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            CareerCore
          </span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:p-0 p-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:border-0 dark:bg-gray-800 md:dark:bg-transparent">
            {links}

            {/* 🔹 Conditional Buttons */}
            <div className="flex items-center space-x-3 md:ml-6 mt-4 md:mt-0">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
