import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./routers/home";
import Main from "./routers/main";
import Navigation from "./components/Navigations";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/home/:value" component={Home} exact />
        <Route path="/main" component={Main} />
        <Redirect path="*" to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
