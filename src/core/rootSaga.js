import { all } from "redux-saga/effects";
import { watchFetchRepos } from "../features/homepage/reposSaga";

export default function* rootSaga() {
  yield all([
    watchFetchRepos(),
  ]);
}
