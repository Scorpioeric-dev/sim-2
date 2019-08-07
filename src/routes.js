import React from "react";
import { Switch, Route } from "react-router-dom";
import Wizard from "./components/Wizard/Wizard";
import DashBoard from "./components/DashBoard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={DashBoard} />
    <Route path="/Wizard" component={Wizard} />
  </Switch>
);
