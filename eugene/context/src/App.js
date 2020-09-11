import React, { useReducer } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Page1 from "./routers/Page1";
import Page2 from "./routers/Page2";
import Appcontext from "./context/context";

const reducer = (state = "", action) => {
  switch (action.type) {
    case "SET_TEXT":
      return action.value;
    case "RESET_TEXT":
      return action.value;
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, "");
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
