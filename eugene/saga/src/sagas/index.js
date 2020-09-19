import { spawn } from "redux-saga/effects";
import watchAuth from "./authSaga";
import watchPosts from "./postSaga";

export default function* rootSaga() {
  yield spawn(watchAuth);
  yield spawn(watchPosts);
}
