import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/main-components/home/Home";
import DashBoard from "./components/main-components/DashBoard";
import Auth from "./components/main-components/auth/Authentication";

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
