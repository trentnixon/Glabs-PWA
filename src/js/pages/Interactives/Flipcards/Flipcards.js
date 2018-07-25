import React, { Component } from 'react';
import { connect } from "react-redux";
import { Scrollbars } from 'react-custom-scrollbars';
import Flipcard from "./Example/Flipcards";
import FlipcardSingle from "./Example/FlipcardsSingle";

// Display Charts
import ChartSlider from "../../../components/widgets/Chart_Slider";
import LineChart from "../../../components/widgets/charts/LineChart";
import PieChart from "../../../components/widgets/charts/PieChart";
import RadialChart from "../../../components/widgets/charts/radial";




let Height = window.screen.height;
// Use this component to build up the Project Layout
class Flipcards extends Component {
  render() {


    const Charts=[
      {
        "Title":"Flip Card turn rates",
        "Sub":<LineChart {... this.props}/>,
      },
      {
        "Title":"% of all content read",
        "Sub":<PieChart {... this.props} />,
      },
      {
        "Title":"Devices Used",
        "Sub":<RadialChart {... this.props} />,
      }
    ]

    
    Height = window.screen.height;
    console.log(window.screen.height, Height);
    return (
          <Scrollbars style={{ height: Height }}>
              <div className="content">
              
                      <h1>What are Flipcards?</h1>
                      <div className="row">
                      
                        <div className="col-md-5">
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            
                        </div>
                        <div className="col-md-7">
                            <FlipcardSingle Card={this.props.FLIPCARDS.APPLICATION.Cards.slice(0, 1)} {... this.props}/>
                            <p className="text-center" ><small> Try Me </small></p>
                        </div>
                      </div>

                      <div className="divider"></div>

                      <h2>How would flipcards benefit my project?</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  
                      <Flipcard {... this.props}/> 

                      <div className="divider"></div>

                      <h2>Flipcard engagment.</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                      <ChartSlider 
                            {... this.props}
                            Charts={Charts}  
                      />

                      <div className="divider"></div>

                      <h2>Branded Campaigns</h2>

                        <ul className="BrandedContent"> 
                              <li>
                                  [Logo]
                                  <h2>Campaign Name</h2>
                                  <h3>Client Name</h3>
                                  [Link to Campign]
                              </li>

                              <li>
                                  [Logo]
                                  <h2>Campaign Name</h2>
                                  <h3>Client Name</h3>
                                  [Link to Campign]
                              </li>

                              <li>
                                  [Logo]
                                  <h2>Campaign Name</h2>
                                  <h3>Client Name</h3>
                                  [Link to Campign]
                              </li>
                        </ul>


              </div>
        </Scrollbars>
        ) 
  }
}

const mapStateToProps = (state) => ({
  UI: state.UI,
  FLIPCARDS:state.FLipcard
})
export default connect(mapStateToProps)(Flipcards);
 