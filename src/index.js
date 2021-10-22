import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { authUser } from './actions/auth';
import App from './App';
import store, {history} from './store';
import { ConnectedRouter } from 'connected-react-router';

const token = localStorage.authToken;

if(token) {
  store.dispatch(authUser(token));
}

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);