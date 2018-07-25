import React from 'react';
import BannerImage from "./Content_Layouts/MediaTypes/image"
import Video from "./Content_Layouts/MediaTypes/video";
import Audio from "./Content_Layouts/MediaTypes/audio";
// import ImageSlider from "./Content_Layouts/MediaTypes/image_Slider";



let DisplayMedia=null;
export default class Card extends React.Component {

  componentWillMount(){}

  render() {
   // console.log(this.props.banner);

    DisplayMedia=null
    if(this.props.banner !== undefined){
    switch(this.props.banner.media) {
        case 'image':
                DisplayMedia = <BannerImage src={this.props.banner.src}  />
            break;
        case 'video':
            DisplayMedia = <Video src={this.props.banner.src}  />
        break;
        case 'audio':
            DisplayMedia = <Audio src={this.props.banner.src}  />
        break;
        
        default:
        DisplayMedia=<div></div>;
    }
    }


    return(
        <div>
            {DisplayMedia}
        </div>
      )
  }
}
