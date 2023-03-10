import React, { useState } from "react";
import Logo from "../images/trends.png";
import "../css/style.css";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard.js"
function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const users = [
    {
      username: "test_user@meistery.net",
      password: "123",
    },
    {
      username: "test_user2@meistery.net",
      password: "trial_application",
    },
  ];

  const errors = {
    uname: "Either your password or login is incorrect",
    pass: "Either your password or login is incorrect",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = users.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
          {renderErrorMessage("uname")}
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">
          
          <img className="logo" src={Logo}></img>
        </div>
        {isSubmitted ? (
          <div className="successfull">User is successfully logged in
          <div>
          <Link to='/dashboard'><button className="dashboard-button">Go to Dashboard</button></Link></div>
          
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
