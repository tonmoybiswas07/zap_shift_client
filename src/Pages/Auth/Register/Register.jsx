import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            


    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-1">Create an Account</h1>
        <p className="text-gray-500 mb-6">Register with ZapShift</p>

        {/* Avatar Upload */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
              <HiOutlineUserAdd className="text-2xl text-gray-500" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-lime-400 rounded-full flex items-center justify-center text-xs font-bold">
              +
            </span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </div>

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
          </div>

          {/* Register Button */}
          <button className="btn w-full bg-lime-400 hover:bg-lime-500 text-black border-none">
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center mt-4">
          Already have an account?
          <Link to="/login" className="text-lime-600 font-medium ml-1">
            Login
          </Link>
        </p>

        {/* Divider */}
        <div className="divider my-5">Or</div>

        {/* Google Register */}
        <button className="btn btn-outline w-full flex items-center gap-2">
          <FcGoogle className="text-xl" />
          Register with google
        </button>
      </div>
    </div>


        </div>
    );
};

export default Register;