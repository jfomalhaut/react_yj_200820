import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigations";
import History from "./components/pages/history";
import Intro from "./components/pages/intro";
import Performance from "./components/pages/performance";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/intro" component={Intro} exact />
          <Route path="/business" component={History} />
          <Route path="/performance" component={Performance} />
          <Redirect path="*" to="/intro" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
