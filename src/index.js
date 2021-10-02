import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { authUser } from './actions/auth';
import { REGISTER_AUTH } from './actions/types';
import App from './App';
import store from './store';

const token = localStorage.authToken;

if(token) {
  authUser(token, store.dispatch);
  //store.dispatch({type: REGISTER_AUTH});
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);