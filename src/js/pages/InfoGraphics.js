import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Iframe from "../components/widgets/Iframe";

let Height=0;
// Use this component to build up the Project Layout
export default class Interactive extends Component {
  render() {
    
    Height = window.screen.height;
    console.log(Height);
    
    return (
            <div className="full">
             <Scrollbars style={{ height: Height }}>
                <Iframe 
                  href="https://gdn-cdn.s3.amazonaws.com/embed/2018/07/icare/pre/index.html"
                  height="3000"
                />
               </Scrollbars >
            </div>
        ) 
  }
}
