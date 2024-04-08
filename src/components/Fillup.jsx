import React from "react";
import "./Fillup.css";
import mail from "../assets/mail.png";
import lock from "../assets/lock.png";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Fillup = () => {
  return (
    <div className="mainbox">
      <img src={logo} className="img1" alt="" />

      <div className="form">
        <div className="logo-input">
          <img src={mail} className="mailimg" alt="" />
          <input
            type="email"
            className="fill"
            placeholder=" Enter email-ID"
          ></input>
        </div>

        <div className="logo-input">
          <img src={lock} className="lockimg" alt="" />
          <input
            type="password"
            className="fill"
            placeholder=" Password"
          ></input>
        </div>

        <div className="login-reset">
          <NavLink
            to="/form1"
            className="loginbutt"
            style={{ textDecoration: "none" }}
          >
            LOGIN
          </NavLink>
          <NavLink to="/resetpassword" className="resetpass" style={{ textDecoration: "none" }}>
            RESET PASSWORD
          </NavLink>
        </div>
        <div className="not-registered">
          <strong className="not">NOT REGISTERED?</strong>
          <NavLink to="/Signup">
            <button className="signup">SIGN UP</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Fillup;
