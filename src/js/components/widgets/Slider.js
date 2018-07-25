import React from "react";
import Slider from "react-slick";


const SliderData=[
  {
    "Title":"Infographics",
    "Sub":"About Infographics",
    "Img":"builder.png"
  },
  {
    "Title":"Articles",
    "Sub":"About Articles",
    "Img":"nurse.png"
  },
  {
    "Title":"Item",
    "Sub":"About Item",
    "Img":"teacher.png"
  },
  {
    "Title":"Item",
    "Sub":"About Item",
    "Img":"chief.png"
  },
  {
    "Title":"Item",
    "Sub":"About Item",
    "Img":"builder002.png"
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
                      <img src={Path+slide.Img} alt={slide.Title}/>
                      
                      <p>{slide.Sub}</p>
                    </div>
              )
          })
        }
      </Slider>
    );
  }
}