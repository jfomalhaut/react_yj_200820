import React, { useReducer } from 'react';
import useInput from '../customs/useInput';

const reducer = (state, { type, data }) => {
	switch (type) {
		case 'INCREASE': {
			return state + 1;
		}
		case 'DECREASE': {
			return state - 1;
		}
		case 'PLUS_DATA': {
			return state + data * 1;
		}
		default: {
			return state;
		}
	}
};

const Reducer = () => {
	const [count, dispatch] = useReducer(reducer, 0);
	const [plus, onChangePlus, setPlus] = useInput("");

	const onIncrease = () => {
		dispatch({ type: 'INCREASE' });
	};
	
	const onDecrease = () => {
		dispatch({ type: 'DECREASE' });
	};

	const onPlus = () => {
		dispatch({ type: 'PLUS_DATA', data: plus});
		setPlus("");
	}

	return (
		<div>
			<h1>count: {count}</h1>
			<button onClick={onIncrease}>increase</button>
			<button onClick={onDecrease}>decrease</button>
			<input value={plus} onChange={onChangePlus}/>
			<button onClick={onPlus}>PLUS</button>
		</div>
	);
};

export default Reducer;