import React from 'react';
import { useDispatch } from 'react-redux';

const Page2 = () => {
	const dispatch = useDispatch();
	const onDecreases = () => {
		dispatch({ type: 'DECREASE' });
	};

	return (
		<div>
			<button onClick={onDecreases}>Decreases</button>
		</div>
	);
};

export default Page2;