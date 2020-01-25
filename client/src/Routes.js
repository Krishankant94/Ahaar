import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/main-components/home/Home';
import DashBoard from './components/main-components/dashboard/DashBoard';
import Auth from './components/main-components/auth/Authentication';

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

export default Routes;
