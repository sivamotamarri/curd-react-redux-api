import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "./components/reducers/userReducer";

import App from "./containers/App";

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById("root")
);
