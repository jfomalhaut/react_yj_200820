import React from 'react';
import Items from '../jsons/fishes.json';
import { useDispatch } from 'react-redux';

const Page2 = () => {
	const dispatch = useDispatch();

	const addCart = (item) => {
		dispatch({ type: 'ADD_CART', item });
	};

	return (
		<div>
			{Items.map(item => (
				<div style={{ marginBottom: '20px' }}>
					<h1>{item.name}</h1>
					<button onClick={() => addCart(item)}>담기</button>
				</div>
			))}
		</div>
	)
}

export default Page2
