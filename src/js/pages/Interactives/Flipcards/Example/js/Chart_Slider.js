import React from "react";
import Slider from "react-slick";

import LineChart from "../../../../../dom/charts/LineChart";

const SliderData=[
  {
    "Title":"Flip Card Engagment",
    "Sub":<LineChart />,
  },
  {
    "Title":"Average Time on Site",
    "Sub":<LineChart />,
  },
  {
    "Title":"% of full content consumed",
    "Sub":<LineChart />,
  }
]
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
      <Slider {...settings}>
        {
          SliderData.map((slide,i)=>{
            let Path="assets/images/StartHereSlider/";
              return(
                    <div key={i}>
                      <h3>{slide.Title}</h3>
                      {slide.Sub}
                    </div>
              )
          })
        }
      </Slider>
    );
  }
}