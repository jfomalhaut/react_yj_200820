import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import List from './routers/List';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={List} />
				<Redirect path="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;