import React from 'react';
import { Link } from 'react-router';

const ForgotCode = () => {
    return (
        <div>
         
    <div className=" flex items-center justify-center">
      <div className="w-full max-w-sm bg-base-100 p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Enter Code</h2>

        <p className="text-sm text-gray-500 mb-6">
          Enter 6 digit code that we sent in your email address
        </p>

        {/* OTP Boxes */}
        <div className="flex justify-center gap-2 mb-6">
          <input className="input input-bordered w-12 h-12 text-center text-lg font-semibold" />
          <input className="input input-bordered w-12 h-12 text-center text-lg font-semibold" />
          <input className="input input-bordered w-12 h-12 text-center text-lg font-semibold" />
          <input className="input input-bordered w-12 h-12 text-center text-lg font-semibold" />
          <input className="input input-bordered w-12 h-12 text-center text-lg font-semibold" />
          <input className="input input-bordered w-12 h-12 text-center text-lg font-semibold" />
        </div>

        {/* Button */}
       <Link to="/">
        <button className="btn btn-success w-full text-white">
          Verify Code
        </button></Link>
      </div>
    </div>

        </div>
    );
};

export default ForgotCode;