import React from "react";
import logo from "../../../ahaar.png";
import Button from "../button";
import { Link } from "react-router-dom";

export default Headers = () => {
  return (
    <header className="ahaar-header">
      <div className="container">
        <div className="branding">
          <Link to={"./home"} className="logo-link">
            <img width="334" height="36" alt="ahaar Logo" src={logo} />
          </Link>
        </div>
        <nav className="main-navigation"></nav>
        <nav className="main-navigation-right">
          <ul>
            <li>
              <Button secondary>Sign Up</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
