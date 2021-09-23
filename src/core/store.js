import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import reposReducer from "../features/homepage/reposSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repos: reposReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
