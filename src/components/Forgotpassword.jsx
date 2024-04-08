import React from "react";
import "./Forgotpassword.css";
import logo from "../assets/logo.png";
import mail from "../assets/mail.png";
import { NavLink } from 'react-router-dom'

function Forgotpassword() {
  return (
    <div className="mainbox">
      <img src={logo} className="img1" alt="" />

      <div className="form">
        <div className="title">
          <strong>FORGOT PASSWORD</strong>
        </div>

        <div className="logo-input">
          <img src={mail} className="mailimg" alt="" />
          <input
            type="email"
            className="fill"
            placeholder=" Enter email-ID"
          ></input>
        </div>

        <div className="registerreturn">
          <button className="register"> SUBMIT</button>
          <NavLink to="/"><button className="loginbu"> LOGIN AREA</button></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
