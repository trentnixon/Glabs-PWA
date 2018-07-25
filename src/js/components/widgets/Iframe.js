import React, { Component } from 'react';
let Height;
export default  class Iframe extends Component {
    render() {
        Height = window.screen.height - 64;
      return (
                <iframe 
                    title="iframe" 
                    src={this.props.href} 
                    width="100%"
                    height={Height}
                    id="ThisIframe"
                    style={{overflow:"scroll"}}
                >
                </iframe>
          ) 
      }
  }