import { call, takeLatest, put, delay } from "redux-saga/effects";
import { getApiData } from "./getApiData";
import { fetchRepos, fetchReposError, fetchReposSuccess } from "./reposSlice";

function* fetchReposHandler() {
  try {
    yield delay(1000);
    const data = yield call(getApiData);
    yield put(fetchReposSuccess(data));
  } catch (error) {
    yield put(fetchReposError());
  }
}

export function* watchFetchRepos() {
  yield takeLatest(fetchRepos.type, fetchReposHandler);
}
