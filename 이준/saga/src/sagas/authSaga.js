import { call, put, takeEvery, takeLast } from 'redux-saga/effects';
import { Auth } from '../actions';
import axios from 'axios';

const URL = "https://kpec.kr/api/login2";

function* fetchAuthSaga(action) {
	const { payload } = action;
	try {
		// 데이터 받아오기 성공 (일치하는 데이터 유무 무관)
		const { data: { valid, token } } = yield call([axios, 'post'], URL, payload);
		window.sessionStorage.setItem('token', token);
		yield put(Auth.loginSuccess(valid));
	} catch (error) {
		// 네크워크 오류
		yield put(Auth.loginFail(error));
	}
};

export default function* watchAuth() {
	yield takeEvery(Auth.LOGIN, fetchAuthSaga);
};