import React, { Component } from 'react';
import Home from './components/home_page';


export default class Root extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Home />
        {this.props.children  && React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
};

