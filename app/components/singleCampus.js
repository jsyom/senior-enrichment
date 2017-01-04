'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../actions/index';
import StudentList from './StudentList.js';


class SingleCampus extends Component {
  componentWillMount(){
    this.props.fetchSingleCampus(this.props.params.id);
  }
  render() {
    const { campus, students } = this.props;
    if(!this.props.campus){
      return <div>LOADING...</div>
    }
    return (
      <div className="row-fluid">
          <h3>
            {campus.name}
          </h3>
          <img src={campus.image}
          className="img-fluid"
          alt="Responsive image"
          width="200"
          height="200"/>
          <StudentList students={students} campusId={campus.id} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    campus: state.campuses.campus
  }
}

export default connect(mapStateToProps, { fetchSingleCampus })(SingleCampus);
