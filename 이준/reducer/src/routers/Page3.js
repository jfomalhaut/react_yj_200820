import React from 'react';
import { useSelector } from 'react-redux';

const Page3 = () => {
	const cart = useSelector(res => res);

	console.log(cart);
	console.log('cart');
	return (
		<div>
			{cart.map(item => (
				<h1>{item.name}</h1>
			))}			
		</div>
	);
};

export default Page3;
