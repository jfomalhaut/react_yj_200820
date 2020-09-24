import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const GuardRoute = ({ component: Component, auth, ...res }) => {
	return (
		<Route {...res} render={(props) => (
			auth ? (
				<Component {...props} />
			) : (
				<Redirect to="/signin" />
			)
		)} />
	);
};

export default GuardRoute;