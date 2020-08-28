import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import List from './routers/List';
import './App.css';
import Navigation from './components/Navigation';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path="/:category" component={List} />
				<Redirect path="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;