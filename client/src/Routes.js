import React from "react";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./components/main-components/dashboard/DashBoard";

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/home" component={DashBoard} />
        <Route path="/" exact component={DashBoard} />
      </Switch>
    </div>
  );
};

export default Routes;
