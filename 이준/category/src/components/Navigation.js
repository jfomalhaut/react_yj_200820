import React from 'react';
import CATEGORY from '../jsons/category.json';
import { Link } from 'react-router-dom';

const Navigation = () => { 
	return (
		<ul className="header">
			{CATEGORY.map(item => (
				<li key={`CATEGORY${item.id}`}>
					<Link to={`/${item.path}`}>{item.label}</Link>
				</li>
			))}
		</ul>
	);
};

export default Navigation;