import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { Post } from "../actions";

const URL = "https://jsonplaceholder.typicode.com/posts";

function* fetchPostsSaga(action) {
  try {
    const { data } = yield call([axios, "get"], URL);
    yield put(Post.getPosts(data));
  } catch (error) {
    console.log("error");
  }
}

export default function* watchPosts() {
  yield takeEvery(Post.POSTS_SUCCESS, fetchPostsSaga);
}
