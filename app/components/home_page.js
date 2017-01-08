'use strict';
 import React, { Component } from 'react';
 import Navbar from '../components/navbar';
 import CampusList from './CampusList.js';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
