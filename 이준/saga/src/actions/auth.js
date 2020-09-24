// 일의 정의
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const SESSION_LOGIN = "SESSION_LOGIN";
const LOGOUT = "LOGOUT";

// 일을 시키는 행위 actions
const login = (payload) => ({ type: LOGIN, payload });
const loginSuccess = (valid) => ({ type: LOGIN_SUCCESS, valid });
const loginFail = (error) => ({ type: LOGIN_FAIL, error });
const sessionLogin = () => ({ type: SESSION_LOGIN });
const logout = () => ({ type: LOGOUT });

const Auth = {
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	SESSION_LOGIN,
	LOGOUT,
	login,
	loginSuccess,
	loginFail,
	sessionLogin,
	logout,
}

export default Auth;