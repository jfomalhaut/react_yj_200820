import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Eugene from "./components/pages/Eugene";
import Danbee from "./components/pages/Danbee";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/eugene" component={Eugene} />
          <Route path="/danbee" component={Danbee} />
          <Redirect path="*" to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
