import React from "react";
import logo from "../../../ahaar.png";
import Button from "../button";

export default Headers = () => {
  return (
    <header className="ahaar-header">
      <div className="container">
        <div className="branding">
          <a className="logo-link">
            <img width="334" height="36" alt="ahaar Logo" src={logo} />
          </a>
        </div>
        <nav className="main-navigation"></nav>
        <nav className="main-navigation-right">
          <ul>
            <li>
              <Button secondary>Sign In</Button>
            </li>
            <li>
              <Button primary>Login</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
