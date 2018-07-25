import React, { Component } from 'react';
// Use this component to build up the Project Layout
export default class Logo extends Component {
  render() {
  
    return (
            <img src={this.props.logo} alt="Guardian Labs" className="Glabs_Logo" />      
        ) 
    }
}