import "./register.css";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={signUp}>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Conncet</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Conncet.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <h1>Register</h1>
              <br />
              <input placeholder="Username" className="loginInput" />
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="loginInput"
              />
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="loginInput"
              />
              {/* <input placeholder="Password Again" className="loginInput" /> */}
              <button className="loginButton">Sign Up</button>
              <a href="/login">
                <button className="loginRegisterButton">
                  Log into Account
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
