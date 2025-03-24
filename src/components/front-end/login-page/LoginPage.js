import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="mt-4">
          <input
            type="text"
            placeholder="Email or Username"
            className="w-full p-2 border rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between mt-3">
          <Link to="/forgot-password" className="text-sm text-blue-600">
            Forgot Password?
          </Link>
          <Link to="/signup" className="text-sm text-blue-600">
            Sign Up
          </Link>
        </div>
        <div className="mt-4 text-center">or</div>
        <button className="w-full bg-red-500 text-white p-2 rounded mt-2">
          Login with Google
        </button>
        <button className="w-full bg-blue-600 text-white p-2 rounded mt-2">
          Login with Facebook
        </button>
      </div>
    </div>
  );
};
export default LoginPage;

