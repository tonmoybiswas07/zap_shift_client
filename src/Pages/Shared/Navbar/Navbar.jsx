import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../../Components/Logo/Logo';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
    const link = <>
    <NavLink className='text-[#606060]'>Services</NavLink>
    <NavLink className='text-[#606060]'>Coverage</NavLink>
    <NavLink className='text-[#606060]'>About Us</NavLink>
    <NavLink className='text-[#606060]'>Pricing</NavLink>
    <NavLink className='text-[#606060]'>Be a Rider</NavLink>
    </>
    return (
       <div className="navbar px-6 bg-base-100 rounded-2xl py-3 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <Link className=" text-3xl flex justify-center items-center font-extrabold"><Logo></Logo><h2 className='mt-5'>ZapShift</h2></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-7 px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end gap-4 relative">
    <Link className="btn bg-white rounded-xl">Sign In</Link>
    <Link className='btn bg-[#CAEB66] rounded-xl'>Sign Up</Link>
    <div className=''>
<FaArrowRight className="bg-black text-[#CAEB66] text-2xl w-10 h-10 relative right-5 -rotate-45 p-3 rounded-full flex items-center justify-center" />

    </div>
    

  </div>
</div>
    );
};

export default Navbar;