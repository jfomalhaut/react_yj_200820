const initialState = {
	count: 0
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREASE': {
			state.count = state.count + 1;
			return state;
		}
		case 'DECREASE': {
			state.count = state.count - 1;
			return state;
		}
		default: {
			return state;
		}
	}
};

export default Reducer;