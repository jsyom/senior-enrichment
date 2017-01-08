'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchSingleCampus, deleteCampus, createStudent } from '../actions/index';
import StudentList from './StudentList.js';


class SingleCampus extends Component {
  componentDidMount(){
    this.props.fetchSingleCampus(this.props.params.id);
  }

  onDeleteClick(){
    this.props.deleteCampus(this.props.params.id)
  }

  render() {
    console.log("~~~~~~~~~~~~~~~~~~this.props", this.props);
    console.log("~~~~~~~~~~~~~~~this.state", this.state);
    const { campus, students } = this.props;
    if(!this.props.campus){
      return <div>LOADING...</div>
    }
    return (
      <div className="row-fluid">
        <Link to="/">Link Back</Link>
        <Link to={`/campus/${campus.id}/students`}><button className="btn btn-primary pull-right">CREATE STUDENT</button></Link>

        <button className="btn btn-danger pull-right" onClick={this.onDeleteClick.bind(this)} >DELETE CAMPUS</button>
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

export default connect(mapStateToProps, { fetchSingleCampus, deleteCampus, createStudent })(SingleCampus);
