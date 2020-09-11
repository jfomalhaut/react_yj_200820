import React, { useReducer } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Page1 from './routers/Page1';
import Page2 from './routers/Page2';
import AppContext from './context/AppContext';

const reducer = (state = "", action) => {
	switch (action.type) {
		case "SET_TEXT": return action.value;
		case "RESET_TEXT": return action.value;
		default: return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, "");
	return (
		<BrowserRouter>
			<ul>
				<li><Link to="/page1">Page1..</Link></li>
				<li><Link to="/page2">Page2..</Link></li>
			</ul>
			<Switch>
				<AppContext.Provider value={{ state, dispatch }}>
					<Route to="page1" component={Page1} />
					<Route to="page2" component={Page2} />
				</AppContext.Provider>
			</Switch>
		</BrowserRouter>
	);
};

export default App;