import React from "react";
import { Page1, Page2 } from "./Routers";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Redirect to="/page1" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
