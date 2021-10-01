import { call, takeLatest, put, delay } from "redux-saga/effects";
import { getRepositories } from "./personalHomepageAPI";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./personalHomepageSlice";

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(1000);
    const repositiories = yield call(getRepositories, username);
    yield put(fetchRepositoriesSuccess(repositiories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
