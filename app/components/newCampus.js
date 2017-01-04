/*'use strict';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';


class newCampusPost extends Component {

  render(){
    return (
      <form>
        <h3> CREATE A NEW Campus</h3>

        <div className="form-group">
          <label>Name</label>
          <input
          type="text"
          className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
          type="text"
          className="form-control"
           />
        </div>

        <buttton
        type="submit"
        className="btn btn-primary"
        >
          Submit!
        </buttton>
      </form>
    );
  }
}

export default reduxForm({
  form: 'newCampusForm',
  fields: ['name', 'image']
})(newCampusPost);
*/
