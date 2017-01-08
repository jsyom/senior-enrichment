'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCampus } from '../actions/index.js';
import { Link } from 'react-router';

class CampusList extends Component {
  componentDidMount() {
    this.props.fetchCampus();
  }


  renderCampuses() {
    return this.props.allCampus.map((campus)=> {
      return (
        <li className="list-group-item col-lg-4" key={campus.id}>
          <Link to={"campus/" + campus.id}>
            <img src={campus.image}
             className="img-fluid"
             width="200"
             height="200"/>
            <label>{campus.name}</label>
          </Link>
        </li>
      );
    })
  }


  render() {
      const renderCampuses = this.props;

    return (
      <div>
       <h2 className="text-center">
         List of Margaret Hamilton Interplanetary Academy of Javascript Campuses
       </h2>
      <div className="container-fluid">
         <ul className="row-fluid list-group">
            {this.renderCampuses()}
         </ul>
      </div>
    </div>
    );

  }
}
function mapStateToProps(state) {
  return { allCampus: state.campuses.allCampus, allStudents: state.students.allStudents }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCampus }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusList)
  // renderCampuses() {
  //   return this.props.allCampus.map((campus)=> {
  //     return (
  //       <li className="list-group-item" key={campus.id}>
  //           <strong>{campus.name}</strong>
  //           <img src={campus.image}
  //            className="img-fluid"
  //            width="200"
  //            height="200"/>
  //         <Link to={"campus/" + campus.id}>
  //         </Link>
  //       </li>
  //     )
  //   })
  // }


  // render() {
  //   const renderCampuses = this.props;
  //   return (
  //     <div>
  //       <h2 className="text-center">
  //         List of Margaret Hamilton Interplanetary Academy of Javascript Campuses
  //       </h2>
  //       <div className="col-md-10">
  //         <ul className="list-group">
  //           {this.renderCampuses()}
  //         </ul>
  //       </div>
  //     </div>
  //   )
  // }
// <div id="products" class="row list-group">
//         <div class="item  col-xs-4 col-lg-4">
//             <div class="thumbnail">
//                 <img class="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
//                 <div class="caption">
//                     <h4 class="group inner list-group-item-heading">
//                         Product title</h4>
//                     <p class="group inner list-group-item-text">
//                         Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
//                         sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
//                     <div class="row">
//                         <div class="col-xs-12 col-md-6">
//                             <p class="lead">
//                                 $21.000</p>
//                         </div>
//                         <div class="col-xs-12 col-md-6">
//                             <a class="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
