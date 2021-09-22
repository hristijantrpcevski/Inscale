import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import usersReducer from "./Redux/Store/reducers/usersReducer";
import rootSaga from "./Redux/Saga/usersSaga";

const configureStore = () => {
  const rootReducers = combineReducers({ usersReducer });
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return store;
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
