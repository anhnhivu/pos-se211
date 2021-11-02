import React, { useState } from "react";
import { useHistory } from "react-router";
import "./login.css";
import { Link } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="LoginContainer">
      <h1 className="header">Sign in to save points and receive discount!</h1>
      <div className="FormContainer">
        <h2>Sign In</h2>
        <form className="FormContain">
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signinbutton" type="submit">
            Sign In
          </button>
        </form>
        <div className="Signup"></div>
      </div>
    </div>
  );
}

export default Login;
