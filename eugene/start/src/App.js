import React from "react";
import { BroweserRouter, Switch, Route } from "react-router-dom";
import Home from "./routers/home";
import Main from "./routers/main";

const App = () => {
  return (
    <BroweserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/main" component={Main} />
      </Switch>
    </BroweserRouter>
  );
};

export default App;
