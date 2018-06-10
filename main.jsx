import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import 'react-datetime/css/react-datetime.css';

import getRoutes from './app/routes';
import Store from './app/redux/store';
import history from './app/utils/history';


const routes = getRoutes();
/* global  document */

render(
  <Provider store={Store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('app'),
);
