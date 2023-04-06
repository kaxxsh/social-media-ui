import "./login.css";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={signIn}>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Connect</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Connect.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <h1>Login</h1>
              <input
                placeholder="Email"
                className="loginInput"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                className="loginInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="loginButton">
                Log In
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
