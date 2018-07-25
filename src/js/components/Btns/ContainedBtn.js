import React, { Component } from 'react';

import Button from '@material-ui/core/Button';




export default  class ContainedBtn extends Component {
    render() {
      console.log(this.props)
      return (
            <Button variant="contained" className={this.props.Class} href={this.props.href} size="large" color="primary" >
                {this.props.label}
            </Button>       
          ) 
      }
  }