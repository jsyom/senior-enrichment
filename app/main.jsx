'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import Root from './root';
import CampusList from './components/CampusList';
import promise from 'redux-promise';
import NewStudentPost from './components/newStudent.js';
import About from './components/about.js';
import StudentList from './components/StudentList.js';
import SingleCampus from './components/singleCampus.js';
import newCampusPost from './components/newCampus.js';
import SingleStudent from './components/singleStudent.js';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={ CampusList } />
        <Route path="campus" component={ CampusList } />
        <Route path="campus/:id" component={SingleCampus} />
        <Route path="about" component={About} />
        <Route path="students" component={StudentList} />
        <Route path="newStudent" component={NewStudentPost} />
        <route path="newCampus" component={newCampusPost} />
        <route path="students/:id" component={SingleStudent} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
