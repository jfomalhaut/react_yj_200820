import { Auth } from '../actions';

const initialState = {
	data: {}
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case  Auth.LOGIN: {
			console.log(action);
			return {
				...state,
				payload: action.payload
			};
		}
		case Auth.LOGIN_SUCCESS: {
			console.log(action);
			return {
				...state,
				data: action.data
			};
		}
		case Auth.LOGIN_FAIL: {
			console.log(action);
			return {
				...state,
				error: action.error
			};
		}
		default: return state;
	}
};

export default authReducer;