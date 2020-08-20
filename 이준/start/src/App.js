import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from './routers/Home';
import Main from './routers/Main';
import Navigation from './components/Navigation';

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