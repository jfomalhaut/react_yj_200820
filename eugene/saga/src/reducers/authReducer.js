import { Auth } from "../actions";

const initialState = {
  data: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Auth.LOGIN: {
      console.log("로그인 중");
      return {
        ...state,
        payload: action.payload,
      };
    }
    case Auth.LOGIN_SUCCESS: {
      console.log("로그인 성공");
      return {
        ...state,
        data: action.data,
      };
    }
    case Auth.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
