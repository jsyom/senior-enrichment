'use strict';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createStudent } from '../actions/index.js';


class NewStudentPost extends Component {

  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.handleSubmit)}>
        <h3> CREATE A NEW STUDENT</h3>
        <div className="form-group">
          <label>Name</label>
          <input
          type="text"
          className="form-control" />
        </div>
        <div className="form-group">
          <label>EMAIL</label>
          <input
          type="text"
          className="form-control" />
        </div>
        <buttton
        type="submit"
        className="btn btn-primary">
          Submit!
        </buttton>
      </form>
    );
  }
}

export default reduxForm({
  form: 'NewStudentForm',
  fields: ['name', 'email']
}, null, { createStudent })(NewStudentPost);
