'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import Root from './root';
import CampusList from './components/CampusList';
import promise from 'redux-promise';
import newStudent from './components/newStudent.js';
import About from './components/about.js';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={ CampusList } />
        <Route path="newStudent" component={newStudent} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
