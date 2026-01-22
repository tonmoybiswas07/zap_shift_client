import React from "react";
import { Outlet } from "react-router";
import authImg from "../../assets/authimage.png";
import Logo from "../../Components/Logo/Logo";

const AuthLayout = () => {
  return (
    <div className=" max-w-7xl mx-auto bg-[#FAFDF0] min-h-screen pt-10">
        <div className="flex justify-start pl-10 mb-10">
            <Logo></Logo>
            <h2 className="-ml-3 text-4xl font-bold mt-5">ZapShift</h2>
        </div>
      <div className="flex justify-center items-center gap-20"> 
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 ">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
