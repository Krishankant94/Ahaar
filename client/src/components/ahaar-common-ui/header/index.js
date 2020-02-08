import React from "react";
import logo from "../../../ahaar.png";
import Button from "../button";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../../react-auth0-spa";

const Headers = ({ menuItems }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <header className="ahaar-header">
      <div className="container">
        <div className="branding">
          <Link to={"./home"} className="logo-link">
            <img width="334" height="36" alt="ahaar Logo" src={logo} />
          </Link>
        </div>
        <nav className="main-navigation">
          <ul>
            {menuItems &&
              menuItems.map((item, i) => (
                <li key={i}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
          </ul>
        </nav>
        <nav className="main-navigation-right">
          <ul>
            {user && <li>{user.name}</li>}
            <li>
              {!isAuthenticated && (
                <Button secondary onClick={() => loginWithRedirect({})}>
                  Log in
                </Button>
              )}

              {isAuthenticated && (
                <Button secondary onClick={() => logout()}>
                  Log out
                </Button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Headers;
