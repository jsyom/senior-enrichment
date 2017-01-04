'use strict';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createCampus } from '../actions/index.js';
import { Link } from 'react-router';


class CreateNewCampus extends Component {
  render() {
    const { fields: { name, image }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.createCampus)}>
        <h3>Create A NEW CAMPUS</h3>

        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <label>name</label>
          <input type="text" className="form-control" {...name} />
          <div className="text-help">
            {name.touched ? name.error : ''}
          </div>
        </div>

        <div className={`form-group ${image.touched && image.invalid ? 'has-danger' : ''}`}>
          <label>image</label>
          <input type="text" className="form-control" {...image} />
          <div className="text-help">
            {image.touched ? image.error : ''}
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
  if (!values.image) {
    errors.image = 'Enter a Image Url'
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNewCampus',
  fields: ['name', 'image'],
  validate
}, null, { createCampus })(CreateNewCampus);
