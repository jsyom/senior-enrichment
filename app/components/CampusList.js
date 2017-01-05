'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCampus } from '../actions/index.js';
import { Link } from 'react-router';

class CampusList extends Component {
  componentWillMount() {
    this.props.fetchCampus();
  }

  renderCampuses() {
    return this.props.allCampus.map((campus)=> {
      return (
        <li className="list-group-item" key={campus.id}>
          <Link to={"campus/" + campus.id}>
            <strong>{campus.name}</strong>
            <img src={campus.image}
             className="img-fluid"
             width="200"
             height="200"/>
          </Link>
        </li>
      )
    })
  }


  render() {
    const renderCampuses = this.props;
    return (
      <div>
        <h2 className="text-center">
          List of Margaret Hamilton Interplanetary Academy of Javascript Campuses
        </h2>
        <div className="col-md-10">
          <ul className="list-group">
            {this.renderCampuses()}
          </ul>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { allCampus: state.campuses.allCampus, allStudents: state.students.allStudents }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCampus }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusList)
