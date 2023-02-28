import React, { useState } from "react";
import Logo from "../images/Logo.svg";
import "../css/style.css";

export default function Dashborad() {
  return (
    <div>
      <div className="nav">
        <img src={Logo}/>
        <div>
          <button className="output">INPUT</button>
          <button className=" input2">OUTPUT</button>
        </div>
        <div className="account">
          JW
        </div>
      </div>
      <div className="background-nav">
        <div className="background-content">
        <form>
            <h1>User</h1>
            <div className="input-fields">
              <div className="flexing4">
                <label className="name" for="name">Name</label><br/>
                <input className="input" />
              </div>
              <div className="flexing">
                <label className="name" for="name">Gender</label><br/>
                {/* <input className="input" /> */}
                <select className="input">
                  <option selected hidden>Please select ...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Unspecified</option>
                </select>
              </div>
              <div className="flexing">
                <label className="name" for="name">Age</label><br/>
                <select className="input">
                  <option selected hidden>Please select ...</option>
                  <option>0</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
            <h1 className="csv">Input CSV Data</h1>
            <div className="flexing6">
            <input className="input" type="file" placeholder="Upload file..."/>
            <button className="upload">Upload</button>
            </div>
            <div className="flexing">
            <label className="name" for="name">Manual CSV Data Input</label><br/>
            <textarea className="input" rows="12"></textarea>
            </div>
            <div className="flexing center">
            <button className="continue">Continue</button>
            
            </div>
        </form>
        </div>
      </div>
    </div>
    
    
  )
}
