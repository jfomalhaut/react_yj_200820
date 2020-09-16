const CartReducer = (state = [], { type, item }) => {
	switch (type) {
		case 'ADD_CART': {
			const after = state.concat(item);
			console.log(after);
			return after;
		}
		case 'REMOVE_CART': {
			return state;
		}
		case 'REMOVE_ALL': {
			return state;
		}
		default: {
			return state;
		}
	}
};

export default CartReducer;