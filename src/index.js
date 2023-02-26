import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router }  from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import './local/i18n'
const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
ReactDOM.render( app, document.getElementById('root'));

