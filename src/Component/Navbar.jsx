import React, { useContext } from "react";
import { NavLink, Link } from "react-router";
import { MdBookmarkAdd } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../Provider/Context";


const Navbar = () => {

    const {cart} = useContext(CartContext)

  return (
    <div className="navbar bg-base-100 shadow-sm max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           <li>
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600': ''} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600': ''} to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600': ''} to='/cart'><BsFillCartFill size={20} /></NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600': ''} to='/favorite'><MdBookmarkAdd size={20}/></NavLink>
          </li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">FlagshipFaceoff</Link>
      </div>

      <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600': ''} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600': ''} to='/about'>About</NavLink>
          </li>
          <li className="relative">
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600': ''} to='/cart'><BsFillCartFill size={20} />
            <p className="absolute -right-0 ">{cart.length}</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600': ''} to='/favorite'><MdBookmarkAdd size={20}/></NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
