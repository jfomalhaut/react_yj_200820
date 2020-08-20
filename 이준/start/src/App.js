import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from './routers/Home';
import Main from './routers/Main';

const App = () => {
	return (
		<BrowserRouter>
			<ul>
				<li><Link to="/home">Home</Link></li>
				<li><Link to="/main">Main</Link></li>
			</ul>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/main" component={Main} />
				<Redirect path="*" to="/home" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;