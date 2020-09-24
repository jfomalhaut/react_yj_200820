import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./routers/Home";
import Posts from "./routers/Posts";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/posts">posts</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/posts" component={Posts} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
