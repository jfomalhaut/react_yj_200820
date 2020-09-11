import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Page1, Page2 } from './routers';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/page1" component={Page1}/>
				<Route path="/page2" component={Page2}/>
				<Redirect to="/page1" />
			</Switch>
		</BrowserRouter>
	)
};

export default App;