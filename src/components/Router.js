import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Header from "./Header/Header";
import Resources from "./Resources/Resources";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/resources" component={Resources} />
    </Switch>
  </BrowserRouter>
);

export default Router;