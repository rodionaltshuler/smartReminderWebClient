import 'babel-polyfill';
import {Router, browserHistory} from 'react-router';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import initialState from './store/initialState';

console.log('Initial state: ' + JSON.stringify(initialState));
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
