import { Auth } from '../actions';

const initialState = {
	auth: {}, // 접속한 사람의 정보
	logged: false, // 로그인 유무
	failure: 0 // 로그인 실패 횟수
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case  Auth.LOGIN: {
			return {
				...state,
				payload: action.payload
			};
		}
		case Auth.LOGIN_SUCCESS: {
			const failure = action.valid ? state.failure : state.failure + 1;
			return {
				...state,
				logged: action.valid,
				failure
			};
		}
		case Auth.LOGIN_FAIL: {
			return {
				...state,
				error: action.error
			};
		}
		case Auth.SESSION_LOGIN: {
			return {
				...state,
				logged: true
			}
		}
		case Auth.LOGOUT: {
			return {
				...state,
				logged: false,
				failure: 0,
				auth: {}
			}
		}
		default: return state;
	}
};

export default authReducer;