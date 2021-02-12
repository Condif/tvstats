import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from "redux";
import {Provider } from "react-redux";
import rootReducer from "./reducers/CombineReducers.js"
import thunk from "redux-thunk"

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e);
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e);
    return undefined
  }
}

const persistedState = loadFromLocalStorage()
// order is important!
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
