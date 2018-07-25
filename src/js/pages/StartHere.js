import React, { Component } from 'react';
import { connect } from "react-redux";
// Import Layout Components
import Logo from "../components/Images/logo";
import Slider from "../components/widgets/Slider";
import Button from "../components/Btns/ContainedBtn";


// Use this component to build up the Project Layout
class StartHere extends Component {
  render() {
    console.log(this.props.UI)
    return (
            <div className="StartHere">
                <div className="Logo">
                    <Logo 
                        logo={this.props.UI.Data.ProjectLogo}
                    />
                </div>
                <div className="Slider">
                    <Slider />
                </div>
                <div className="CTA">
                    <Button 
                        label="Lets Get Started..."
                        Class="LetsGetStarted"
                        href="/#/glabs"
                    />
                </div>
            </div>        
        ) 
    }
}

const mapStateToProps = (state) => ({
    UI: state.UI
  })
export default connect(mapStateToProps)(StartHere);