import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const 체중 = 70;
function reducer(state = 체중, action){
  if (action.type === '증가') {
    state++;
    return state
  }
  if (action.type === '감소') {
    state--;
    return state
  }
  else{
    return state
  }
}

let store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);