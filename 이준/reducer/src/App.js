import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Page1, Page2, Page3 } from './routers';

const App = () => {
	return (
		<BrowserRouter>
			<ul>
				<li>
					<Link to="/page2">상품리스트</Link>
				</li>
				<li>
					<Link to="/page3">장바구니</Link>
				</li>
			</ul>
			<Switch>
				<Route path="/page1" component={Page1}/>
				<Route path="/page2" component={Page2}/>
				<Route path="/page3" component={Page3}/>
				<Redirect to="/page2" />
			</Switch>
		</BrowserRouter>
	)
};

export default App;