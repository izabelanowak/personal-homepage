import { all } from "redux-saga/effects";
import { themeSaga } from "../common/themeSaga";
import { personalHomepageSaga } from "../features/personalHomepage/personalHomepageSaga";

export default function* rootSaga() {
  yield all([
    personalHomepageSaga(),
    themeSaga(),
  ]);
}