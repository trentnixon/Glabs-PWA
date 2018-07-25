import React from 'react';
import CardFrame from "./js/Card_Frame";

// React component for the card (main component)
// Select  the default framework for the cards
 
const  DefaultLayout="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 Card_Frame offset-md-2";
let delay=0;
// This Component will Loop through the "Card" object stored in Redux
// And create the base Frame for the Flipcards
export default class CreateFlipCards extends React.Component {

render() {

  console.log(this.props.Card)

    return(
  
        <div id="FlipCard" >
          <div className="row">
            {
              this.props.Card.map((card,i)=>{
               
                delay = delay+10
                return(
                      <div className={DefaultLayout} key={i}>
                          <CardFrame  card={card}  i={i} delay={delay} {... this.props} />
                      </div>
                )
              })
            }
          </div>
        </div>
    )
  }
}
