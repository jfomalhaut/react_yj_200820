import React, { useReducer } from 'react'


const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREASE': {
			return state + 1;
		}
		case 'ADD_ITEM': {
			return state.concat(action.data);
		}
		default: {
			return state;
		}
	}
};


const data = [
	{ id: 1, name: '생선1', price: 1000 },
	{ id: 2, name: '생선2', price: 2000 },
	{ id: 3, name: '생선3', price: 3000 },
];

const Page1 = () => {
	const [count, dispatch] = useReducer(reducer, data);
	const increase = () => {
		const item = {
			id: 4,
			name: '생선4',
			price: 4000
		};
		dispatch({ type: 'ADD_ITEM', data: item });
	};
	const decrease = () => {

	};

	return (
		<div>
			<button onClick={increase}>increase</button>
			<button onClick={decrease}>decrease</button>
			<div>
				{count.map(item => (
					<h1>{item.name} {item.price}</h1>
				))}
			</div>
		</div>
	);
};

export default Page1
