'use strict';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import axios from 'axios';

class newStudentPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: ''
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }


  onNameChange(event){
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    })
  }

  onEmailChange(event){
    console.log(event.target.value)
    this.setState({
      email: event.target.value
    })
  }


  render(){

    const { fields:{ name, email }, handleSubmit } = this.props;
    console.log(name);
    return (
      <form onSubmit={handleSubmit}>
        <h3> CREATE A NEW STUDENT</h3>

        <div className="form-group">
          <label>Name</label>
          <input
          type="text"
          className="form-control"
          value={this.state.name}
          onChange={this.onNameChange}
          />
        </div>

        <div className="form-group">
          <label>EMAIL</label>
          <input
          type="text"
          className="form-control"
          value={this.state.email}
          onChange={this.onEmailChange}
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
  form: 'newStudentForm',
  fields: ['name', 'email']
})(newStudentPost);
