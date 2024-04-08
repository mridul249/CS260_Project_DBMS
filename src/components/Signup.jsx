import React from "react";
import "./Signup.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="mainbox1">
      <img src={logo} className="img1" alt="" />

      <div className="form1">
        <div className="title1">
          <strong>CREATE YOUR PROFILE</strong>
        </div>

        <div className="bar1">
          <input
            type="text"
            className="fill1"
            placeholder=" First Name"
          ></input>
          <input type="text" className="fill1" placeholder=" Last Name"></input>
        </div>
        <div className="bar1">
          <input
            type="text"
            className="fill1"
            placeholder=" Your Email"
          ></input>
          <select id="options">
            <option value="Select Category"> Select Category</option>
            <option value="UR">UR</option>
            <option value="OBC-NCL">OBC-NCL</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="PWD">PWD</option>
            <option value="EWS">EWS</option>
          </select>
        </div>

        <div className="bar1">
          <input
            type="password"
            className="fill1"
            placeholder=" New Password"
          ></input>
          <input
            type="password"
            className="fill1"
            placeholder=" Retype-New Password"
          ></input>
        </div>

        <div className="bar1">
          <div className="capcha, fill"></div>
          <input type="text" className="fill1" placeholder=" Last Name"></input>
        </div>

        <div className="intructions1">
          <font color="red">Note:</font>
          {/* <br /> */}
          <div>
            1. Applicant should kindly check their email for activation link to
            access the portal.
          </div>
          {/* <br /> */}
          <div>
            2. Please check SPAM folder also, in case activation link is not
            received in INBOX.
          </div>
          {/* <br /> */}
          <div>
            3. Applicant applying for more than one position/ department should
            use <font color="red">different email id</font> for each
            application.
          </div>
          {/* <br /> */}
        </div>
        <div className="registerreturn1">
          {/* <div className="register1"> */}
          <button className="register1"> REGISTER</button>
          {/* </div> */}
          <div className="loginreg1">
            <font color="green">If registered</font>
            <Link to="/"  className="loginbu1" style={{ textDecoration: 'none' }}>
             LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
