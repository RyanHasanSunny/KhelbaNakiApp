import React, { useState } from "react";
// import { Link } from "react-router-dom";
import './LoginPage.css';



const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-section">
      <div className="login-background-panel">
        <h2 className="title">Login</h2>
        <div className="container">
        <form className="form">
          <div className="formcontent">
            <label>
              Username
            </label>

            <input
              type="text"
              placeholder="Email or Username"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className="formcontent">
            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="button"
            className="button"
          >
            Login
          </button>

        </form>
        <div className="formcontent">
          <a href="/forgot-password" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <div className="loginwith">
          <button type="button" className="button">
            Login with Facebook
          </button>
        </div>
        <a href="/signup" className="sign-up">
          You don't have an account? Sign up
        </a>
      </div>
      </div>
    </div>
  );
};


export default LoginPage;

