import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';


import Flipcards from "./Flipcards/Flipcards";
// Import Layout Components



// Use this component to build up the Project Layout
export default class GlabsRouter extends Component { 
  render() {
        return (
                <Router>
                    <Route exact path="/glabs/interactive/flipcard" component={Flipcards}/>   
                </Router>
            ) 
    }
}
 