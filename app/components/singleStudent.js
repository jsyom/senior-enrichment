import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent, deleteStudent } from '../actions/index';
import { Link } from 'react-router';
import StudentList from './StudentList.js';


class SingleStudent extends Component {

  componentDidMount(){
    this.props.fetchSingleStudent(this.props.params.id);
  }

  onDeleteClick(){
    this.props.deleteStudent(this.props.params.id)
  }

  render() {
    const { campus, student } = this.props;
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
            <h3>
              {student.name}
            </h3>
            <h2>
              {student.email}
            </h2>
           </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    student: state.students.students
  }
}

export default connect(mapStateToProps, { fetchSingleStudent, deleteStudent })(SingleStudent);
