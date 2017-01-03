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
import StudentList from './components/StudentList.js';
import singleCampus from './components/singleCampus';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={ CampusList } />
        <Route path="campus" component={ CampusList } />
        <Route path="campus/:id" component={singleCampus} />
        <Route path="newStudent" component={newStudent} />
        <Route path="about" component={About} />
        <Route path="students" component={StudentList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
