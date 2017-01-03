'use strict';
import React, { Component } from 'react';
import axios from 'axios';

export default class CampusList extends Component {
  constructor(props) {
    super(props)
  }

  showAllCampus() {
    axios.get('/api/campus')
      .then(res => res.data)
      .then(() => {
      })
  }

  render() {
    return (
      <div>
        HELLO
      </div>
    )
  }
}
