import React from "react";
import { Page1, Page2, Page3 } from "./Routers";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  // const cart = useSelector((res) => res);
  return (
    <div>
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/page1">page1</Link>
            </li>
            <li>
              <Link to="/page2">page2</Link>
            </li>
            <li>
              <Link to="/page3">page3</Link>
            </li>
          </ul>
          {/* <h1>{cart}</h1> */}
        </header>
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Redirect to="/page1" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
