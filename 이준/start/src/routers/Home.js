import React, { useState } from 'react';

const Home = () => {
	const title = "HOME";
	const [data, setData] = useState(10);

	const increase = () => {
		setData(20);
	};

	return (
		<div>
			<h1>{title} Component</h1>
			<h1>{data}</h1>
			<button onClick={increase}>증가</button>
		</div>
	);
};

export default Home;