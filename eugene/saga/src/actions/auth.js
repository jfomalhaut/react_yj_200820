const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const login = (payload) => ({ type: LOGIN, payload });
const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, data });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, error });

const Auth = {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  login,
  loginSuccess,
  loginFailure,
};

export default Auth;
