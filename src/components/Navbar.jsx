import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md pb-10">
      <div className="navbar bg-base-100 py-4 z-50 sticky">
        <div className="navbar-start">
          <div className="dropdown relative">
            <div
              onClick={toggleMenu}
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
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
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow absolute"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/allVisas">All Visas</NavLink>
                </li>
                <li>
                  <NavLink to="/addVisa">Add Visa</NavLink>
                </li>
                <li>
                  <NavLink to="/myAddedVisas">My added visas</NavLink>
                </li>
                <li>
                  <NavLink to="/myVisaApplication">
                    My Visa applications
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
         <div>
         <a className="btn btn-ghost text-2xl mb-3 font-bold">
          <Typewriter
                    
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={70}
                    loop={0}
                    typeSpeed={80}
                    words={["NEXT STEP VISA"]}
                  />
          </a>
          <label className="flex lg:hidden cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="dark"
                  className="toggle theme-controller"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allVisas">All Visas</NavLink>
            </li>
            <li>
              <NavLink to="/addVisa">Add Visa</NavLink>
            </li>
            <li>
              <NavLink to="/myAddedVisas">My added visas</NavLink>
            </li>
            <li>
              <NavLink to="/myVisaApplication">My Visa applications</NavLink>
            </li>
            <li>
              <label className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="dark"
                  className="toggle theme-controller"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <img
                  className="w-12 h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <button onClick={logOutUser} className="btn">
                Log out
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
