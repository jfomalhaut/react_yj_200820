import { call, put, takeEvery } from "redux-saga/effects";
import { Auth } from "../actions";
import axios from "axios";

const URL = "http://fomalhaut.shop/api/SP_getItem";

function* fetchAuthSaga(action) {
  try {
    const { data } = yield call([axios, "get"], URL);
    yield put(Auth.loginSuccess(data));
  } catch (error) {
    yield put(Auth.loginFailure(error));
  }
}

export default function* watchAuth() {
  yield takeEvery(Auth.LOGIN, fetchAuthSaga);
}
