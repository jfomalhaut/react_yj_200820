// 일의 정의
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

// 일을 시키는 행위 actions
const login = (payload) => ({ type: LOGIN, payload });
const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, data });
const loginFail = (error) => ({ type: LOGIN_FAIL, error });

const Auth = {
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	login,
	loginSuccess,
	loginFail,
}

export default Auth;