import React from "react";
import Slider from "react-slick";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
       <div className="ChartSlider"> 
      <Slider {...settings}>
        {
          this.props.Charts.map((slide,i)=>{
          
              return(
                    <div key={i}>
                      <h3>{slide.Title}</h3>
                      {slide.Sub}
                    </div>
              )
          })
        }
      </Slider>
      </div>
    );
  }
}