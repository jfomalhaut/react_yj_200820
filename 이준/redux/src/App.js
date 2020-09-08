import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Page1, Page2 } from './routers';
import { useSelector } from 'react-redux';

const App = () => {

	const count = useSelector(({ Reducer }) => Reducer.count);

	return (
		<Router>
			<header style={{ borderBottom: '1px solid', marginBottom: '50px'}}>
				<ul>
					<li>
						<h1><Link to="/page1">page1</Link></h1>
					</li>
					<li>
						<h1><Link to="/page2">Page2</Link></h1>
					</li>
				</ul>
				<h1>count: {count}</h1>
			</header>
			<Switch>
				<Route path="/page1" component={Page1} />
				<Route path="/page2" component={Page2} />
				<Redirect to="/page1" />
			</Switch>
		</Router>
	);
};

export default App;