import ReactDOM from 'react-dom'
import createReactClass from'create-react-class'

import './stylesheets/image.css';
import React, { Component } from 'react';

class SingleImage extends Component {
  render() {
    return (
      <img className={this.props.class} src={this.props.url}/>

    );
  }
}

export default SingleImage;