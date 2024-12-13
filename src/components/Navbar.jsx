import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md pb-10">
      <div className="navbar bg-base-100 py-4 z-50 sticky">
      <div className="navbar-start">
        <div className="dropdown relative">
          <div onClick={toggleMenu} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          {
            isOpen && <ul
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
              <NavLink to="/myVisaApplication">My Visa applications</NavLink>
            </li>
          </ul>
          }
        </div>
        <a className="btn btn-ghost text-xl">NEXT STEP VISA</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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
