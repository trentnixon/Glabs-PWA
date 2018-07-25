import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Use this component to build up the Project Layout
export default class InfoGraphics extends Component {
  render() {

    return (
            <div className="content">
                  <h1>Interactives</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           
                  <div className="col-md-4 item">
                    <h1>
                      <i className="material-icons">cached</i>
                    </h1>
                    <h2>Flip Cards</h2>
                      
                      <Link to="/glabs/interactive/flipcard"> Examples </Link> | Campaign
                  </div>
           
            </div>
        ) 
  }
}
