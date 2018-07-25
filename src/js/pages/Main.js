import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import StartHere from "../pages/StartHere";
import Drawer from "../dom/Drawer";
// Import Layout Components

// Use this component to build up the Project Layout
export default class Main extends Component {
  render() {
    console.log(this.props)
    return (
        <div>
          <Router>
                <div id="Stage">	
                    <Route exact path="/" component={StartHere}/>
                    <Route  path="/glabs" component={Drawer}/>
                </div>
          </Router>
        </div>
        ) 
  }
}
