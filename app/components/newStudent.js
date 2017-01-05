'use strict';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createStudent } from '../actions/index.js';
import { Link } from 'react-router';


class CreateNewStudent extends Component {
  render() {
    const { fields: { name, email }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.createStudent)}>
        <h3>Create A NEW STUDENT</h3>

        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <label>name</label>
          <input type="text" className="form-control col-md-10" {...name} />
          <div className="text-help">
            {name.touched ? name.error : ''}
          </div>
        </div>

        <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
          <label>email</label>
          <input type="text" className="form-control" {...email} />
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
  if (!values.email) {
    errors.email = 'Enter a Email'
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['name', 'email'],
  validate
}, null, { createStudent })(CreateNewStudent);
