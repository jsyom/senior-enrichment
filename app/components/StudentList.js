'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { fetchStudent } from '../actions/index.js';

class StudentList extends Component {
  componentDidMount() {
    this.props.fetchStudent();
  }

  renderStudents() {
    const { students, campuses } = this.props;
    return this.props.allStudents.map((student)=> {
      return (
        <li className="list-group-item" key={student.id}>
          <Link to={"students/" + student.id}>
            <strong>{student.name}</strong>
            <span className="pull-right">{student.email}</span>
          </Link>
        </li>
      )
    })
  }

  render() {
    const fetchStudent = this.props;
    return (
      <div className="col-md-10">
        <ul className="list-group">
          {this.renderStudents()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const campusId = Number(ownProps.campusId);
  function findByCampusId(student){
    return !campusId ? true : student.campusId === campusId
  }
  return { allStudents: state.students.allStudents.filter(findByCampusId) }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStudent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
