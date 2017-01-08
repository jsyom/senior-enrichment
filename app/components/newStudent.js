'use strict';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createStudent, fetchCampus } from '../actions/index.js';
// import Select from 'react-select';
import { Link } from 'react-router';


class CreateNewStudent extends Component {
  componentDidMount(){
    this.props.fetchCampus()
  }
  renderCampuses() {
    return this.props.allCampus.map((campus)=> {
      return (
        <option
        key={campus.id}
        value={campus.id}>
          {campus.name}
        </option>
      )
    })
  }

  render() {
    const { fields: { name, email, campus }, handleSubmit, onChange } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createStudent)}>
        <h3>Create A NEW STUDENT</h3>


        <div className={`form-group ${campus.touched && campus.invalid ? 'has-danger' : ''}`}>
          <label>Campus</label>
            <select className="form-control" placeholder="pick a campus" {...campus}>
              {this.renderCampuses()}
            </select>
          <div className="text-help">
            {campus.touched ? campus.error : ''}
          </div>
        </div>


        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <label>name</label>
          <input type="text" className="form-control col-lg-6" {...name} />
          <div className="text-help">
            {name.touched ? name.error : ''}
          </div>
        </div>

        <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
          <label>email</label>
          <input type="text" className="form-control col-lg-6" {...email} />
          <div className="text-help">
            {email.touched ? email.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.name){
    errors.name = 'Enter a name'
  }
  if (!values.campus) {
    errors.campus = 'Enter a Campus'
  }
  if (!values.email) {
    errors.email = 'Enter a Email'
  }
  return errors;
}

function mapStateToProps(state) {
  return { allCampus: state.campuses.allCampus, allStudents: state.students.allStudents }
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['name', 'email', 'campus'],
  validate
}, mapStateToProps, { createStudent, fetchCampus })(CreateNewStudent);
