import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import userReducer from "./components/reducers/userReducer";
import createSagaMiddleware from "redux-saga";

import App from "./containers/App";
import myUserSaga from "./saga/userSagas";
import { logger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  userReducer,
  applyMiddleware(sagaMiddleware, logger)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Object.values(myUserSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
//sagaMiddleware.run(myUserSaga);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById("root")
);
