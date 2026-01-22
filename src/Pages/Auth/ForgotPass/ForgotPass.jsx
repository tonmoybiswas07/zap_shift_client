import React, { useState } from "react";
import { Link } from "react-router";

const ForgotPass = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">Forgot Password</h1>
        <p className="text-gray-500 mb-6">
          Enter your email address and we’ll send you a reset link.
        </p>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Send Button */}
          <Link to={email ? "/forgot-code" : "#"}>
            <button
              type="button"
              disabled={!email}
              className={`btn w-full border-none 
                ${
                  email
                    ? "bg-lime-400 hover:bg-lime-500 text-black"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Send
            </button>
          </Link>
        </form>

        {/* Back to Login */}
        <p className="text-sm text-center mt-4 text-gray-500">
          Remember your password?
          <Link to="/login" className="text-lime-600 font-medium ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPass;
