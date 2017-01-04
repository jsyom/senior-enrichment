'use strict';
 import React from 'react';
import { Link } from 'react-router';

export default function () {
  return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div>
            <ul className="nav navbar-nav" >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="navbar-header">
            <Link to="/">
              <a href="#" className="navbar-brand">The Margaret Hamilton Interplanetary Academy of Javascript</a>
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/campus">Campus</Link>
            </li>
            <li>
              <Link to="/newStudent">Create a Student</Link>
            </li>
            <li>
              <Link to="/newStudent">Create a Campus</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}
