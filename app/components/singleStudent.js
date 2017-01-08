import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent, deleteStudent, fetchSingleCampus } from '../actions/index';
import { Link } from 'react-router';
import StudentList from './StudentList.js';


class SingleStudent extends Component {

  componentDidMount(){
    this.props.fetchSingleStudent(this.props.params.id);
    this.props.fetchSingleCampus(this.props.campus.id);
  }

  onDeleteClick(){
    this.props.deleteStudent(this.props.params.id)
  }

  render() {
    const { campus, student } = this.props;
    console.log("~~~~~~~~~~~THIS.STATE", this.state);
    console.log("~~~~~~~~~~~THIS.PROPS", this.props);
    console.log("~~~~~~~~~~~PROPS", this.props.campus);

    if(!this.props.student){
      return <div>LOADING...</div>
    }
    return (
      <div className="row-fluid">
        <Link to="/">Link Back</Link>
        <button className="btn btn-danger pull-right"
        onClick={this.onDeleteClick.bind(this)}>
        Delete Student
        </button>
          <div className="col-6">
            <div>
              <label>Name: </label>
                {student.name}
            </div>
            <div>
              <label>Email: </label>
                {student.email}
            </div>
            <div>
              <label>Campus: </label>
              {campus.name}
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    student: state.students.students,
    campus: state.campuses.campus
  }
}

export default connect(mapStateToProps, { fetchSingleStudent, deleteStudent, fetchSingleCampus })(SingleStudent);
