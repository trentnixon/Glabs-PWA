import React from 'react';

export default class Image extends React.Component {
  render() {
    return(<img src={"https://gdn-cdn.s3.amazonaws.com/embed/2018/07/mini-connected"+this.props.src} alt="" className="BannerImage" />)
  }
}
