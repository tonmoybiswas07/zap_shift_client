import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className=" flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-1">Welcome Back</h1>
          <p className="text-gray-500 mb-6">Login with ZapShift</p>

          {/* Form */}
          <form className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
              <label className="label">
                <Link to="/forgot-password" className="label-text-alt link link-hover">
                  Forget Password?
                </Link>
              </label>
            </div>

            {/* Login Button */}
            <button className="btn w-full bg-lime-400 hover:bg-lime-500 text-black border-none">
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-sm text-center mt-4">
            Don’t have any account?
            <Link to="/register" className="text-lime-600 font-medium ml-1">
              Register
            </Link>
          </p>

          {/* Divider */}
          <div className="divider my-5">OR</div>

          {/* Google Login */}
          <button className="btn btn-outline w-full flex items-center gap-2">
            <FcGoogle className="text-xl" />
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
