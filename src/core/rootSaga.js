import { all } from "redux-saga/effects";
import { watchFetchRepos } from "../features/personalHomepage/reposSaga";

export default function* rootSaga() {
  yield all([
    watchFetchRepos(),
  ]);
}
