import React, { useReducer } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Page1 from "./routers/Page1";
import Page2 from "./routers/Page2";
import Appcontext from "./context/context";
import pageReducer from "./reducer/pageReducer";

const App = () => {
  const [state, dispatch] = useReducer(pageReducer, "");
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/page1">Page1 </Link>
        </li>
        <li>
          <Link to="/page2">Page2 </Link>
        </li>
      </ul>
      <Switch>
        <Appcontext.Provider value={{ state, dispatch }}>
          <Route to="page1" component={Page1} />
          <Route to="page2" component={Page2} />
        </Appcontext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
