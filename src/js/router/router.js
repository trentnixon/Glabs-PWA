import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';

import WelcomePage from "../pages/Welcome";
import About from "../pages/About";
import InfoGraphics from  "../pages/InfoGraphics";
import Interactive from "../pages/Interactive";
import InteractiveRouter from "../pages/Interactives/interactive_router";

// Import Layout Components



// Use this component to build up the Project Layout
export default class GlabsRouter extends Component {
  render() {
    return (
        
        <Router>
                <div id="Stage">	
                    <Route exact path="/glabs/" component={WelcomePage}/>
                    <Route exact path="/glabs/about" component={About}/>
                    <Route exact path="/glabs/infographics" component={InfoGraphics}/>
                    <Route exact path="/glabs/interactive" component={Interactive}/>
                    <InteractiveRouter />
                </div>
        </Router>
        
        ) 
  }
}
 