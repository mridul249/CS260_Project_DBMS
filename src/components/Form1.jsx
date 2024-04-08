import React from "react";
import "./Form1.css";
import { NavLink } from "react-router-dom";
function Form1() {
  return (
    <div className="mainboxform">
      <div className="head">
        <div className="regnumber">
          <strong>NAME</strong>
        </div>
        <div className="buttons">
          <NavLink
            to="/resetpassword"
            className="Forgotpassword"
            style={{ textDecoration: "none" }}
          >
            Change Password
          </NavLink>
          <NavLink to="/" className="fillup" style={{ textDecoration: "none" }}>
            LOGOUT
          </NavLink>
        </div>
      </div>

      <div className="registration card">
        <div className="row">
          <div className="col">
            <div className="text">Advertisement Number*</div>
            <div className="fillad"></div>
          </div>
          <div className="col">
            <div className="text">Date of Application </div>
            <div className="fillad"></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text">Application Number</div>
            <div className="fillad"></div>
          </div>
          <div className="col">
            <div className="text">Post Applied for * </div>
            <select className="fillad">
              <option value=" Select"> Select</option>
              <option value="Professsor">Professsor</option>
              <option value="Associate Professor">Associate Professor</option>
              <option value="Associate Professor Grade I">
                Associate Professor Grade I
              </option>
              <option value="Associate Professor Grade II">
                Associate Professor Grade II
              </option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text">Department/School *</div>
            {/* <div className="fillad"></div> */}
            <select className="fillad" id="optionsfillad">
              <option value="Select"> Select</option>
              <option value="Indian">CSE</option>
              <option value="OCI">AI/DS</option>
            </select>
          </div>
          <div className="col">
            <div className="text"></div>
          </div>
        </div>
      </div>

      <div className="Personaldetails card">
        <div className="heading">
          <div className="pp">1. Personal Details</div>
          <div className="pp">Upload/Update Photo*</div>
        </div>
        <div className="box1">
          <div className="enterdetails">
            <div className="boxrow">
              <div className="boxcol">
                <div className="boxtext">First Name*</div>
                <input
                  type="text"
                  className="boxfillad"
                  placeholder=" First Name"
                ></input>
              </div>
              <div className="boxcol">
                <div className="boxtext">Middle Name </div>
                <input
                  type="text"
                  className="boxfillad"
                  placeholder=" Middle Name"
                ></input>
              </div>
            </div>
            <div className="boxrow">
              <div className="boxcol">
                <div className="boxtext">Last Name*</div>
                <input
                  type="text"
                  className="boxfillad"
                  placeholder=" Last Name"
                ></input>
              </div>
              <div className="boxcol">
                <div className="boxtext">Nationality*</div>
                <select className="Nationality" id="options">
                  <option value="Select"> Select</option>
                  <option value="Indian">Indian</option>
                  <option value="OCI">OCI</option>
                </select>
              </div>
            </div>
            <div className="boxrow">
              <div className="boxcol">
                <div className="boxtext">Date of Birth*</div>
                <input
                  type="text"
                  className="boxfillad"
                  placeholder="DD/MM/YYYY"
                ></input>
              </div>
              <div className="boxcol">
                <div className="boxtext">Gender*</div>
                <select className="Gender" id="options">
                  <option value="Select"> Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="boxrow">
              <div className="boxcol">
                <div className="boxtext">Marital Status*</div>
                <select className="Marital Status" id="options">
                  <option value="Select"> Select</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="boxcol">
                <div className="boxtext">Category</div>
                <div className="boxfillad">Category</div>
              </div>
            </div>
            <div className="boxrow">
              <div className="boxcol">
                <div className="boxtext">ID Proof*</div>
                <select className="ID Proof" id="options">
                  <option value="Select"> Select</option>
                  <option value="AADHAR">AADHAR</option>
                  <option value="PAN-CARD">PAN-CARD</option>
                  <option value="VOTER-ID">VOTER-ID</option>
                  <option value="PASSPORT">PASSPORT</option>
                  <option value="RATION-CARD">RATION-CARD</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
              </div>
              <div className="boxcol">
                {/* <div className="boxtext">Email </div> */}
                {/* <input
                  type="text"
                  className="boxfillad"
                  placeholder=" Your Email"
                ></input> */}
              </div>
            </div>
            <div className="boxrow">
              <div className="boxcol">
                <div className="boxtext">Father's Name*</div>
                <input
                  type="text"
                  className="boxfillad"
                  placeholder="Father's Name"
                ></input>
              </div>
              <div className="boxcol">
                {/* <div className="boxtext">Email </div> */}
                {/* <input
                  type="text"
                  className="boxfillad"
                  placeholder=" Your Email"
                ></input> */}
              </div>
            </div>
          </div>
          <div className="photo">hello</div>
        </div>
      </div>

      <div className="Address card">
        <div className="correspondance">
          <div className="addresstype text-area">Correspondance Address</div>
          <textarea
            className="text-area"
            placeholder="Street"
            name="Street"
            id="Street"
            cols="50"
            rows="3"
          ></textarea>
          <textarea
            className="text-area"
            placeholder="City"
            name="City"
            id="City"
            cols="50"
            rows="3"
          ></textarea>
          <textarea
            className="text-area"
            placeholder="State"
            name="State"
            id="State"
            cols="50"
            rows="3"
          ></textarea>
          <textarea
            className="text-area"
            placeholder="Country"
            name="Country"
            id="Country"
            cols="50"
            rows="3"
          ></textarea>
          <textarea
            className="text-area"
            placeholder="PIN/ZIP"
            name="PIN/ZIP"
            id="PIN/ZIP"
            cols="50"
            rows="3"
          ></textarea>
        </div>
        <div className="permanent">
          <div className="addresstype text-area">Permanent Address</div>
          <textarea
            className="text-area"
            placeholder="Street"
            name="Street"
            id="Street"
            cols="50"
            rows="3"
          ></textarea>
          <textarea
            className="text-area"
            placeholder="City"
            name="City"
            id="City"
            cols="50"
            rows="3"
          ></textarea>
          <textarea
            className="text-area"
            placeholder="State"
            name="State"
            id="State"
            cols="50"
            rows="3"
          ></textarea>
          <textarea
            className="text-area"
            placeholder="Country"
            name="Country"
            id="Country"
            cols="50"
            rows="3"
          ></textarea>
          <textarea
            className="text-area"
            placeholder="PIN/ZIP"
            name="PIN/ZIP"
            id="PIN/ZIP"
            cols="50"
            rows="3"
          ></textarea>
        </div>
      </div>

      <div className="contant card">
        <div className="row">
          <div className="col">
            <div className="text">Mobile*</div>
            <input type="text" className="fillad" placeholder=" Mobile"></input>
          </div>
          <div className="col">
            <div className="text">Email </div>
            <input
              type="text"
              className="fillad"
              placeholder=" Your Email"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text">Alternate Mobile</div>
            <input
              type="text"
              className="fillad"
              placeholder=" Alternate Mobile"
            ></input>
          </div>
          <div className="col">
            <div className="text">Alternate Email </div>
            <input
              type="text"
              className="fillad"
              placeholder=" Alternate Email"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text">Landline Number</div>
            <input
              type="text"
              className="fillad"
              placeholder=" Landline Number"
            ></input>
          </div>
          <div className="col">
            <div className="text"></div>
          </div>
        </div>
      </div>
      <div className="nextpage">
        <NavLink
          to="/"
          className="savebutton"
          style={{ textDecoration: "none" }}
        >
          SAVE & NEXT
        </NavLink>
      </div>
    </div>
  );
}

export default Form1;
