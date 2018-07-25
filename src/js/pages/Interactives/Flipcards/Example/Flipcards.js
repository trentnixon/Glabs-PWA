import React from 'react';
import CardFrame from "./js/Card_Frame";

// React component for the card (main component)
// Select  the default framework for the cards
 
const  DefaultLayout="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 Card_Frame";
let delay=0,active='Shopclosed';
// This Component will Loop through the "Card" object stored in Redux
// And create the base Frame for the Flipcards
export default class CreateFlipCards extends React.Component {

render() {

  console.log(this.props)
if(this.props.FLIPCARDS.APPLICATION.Cards.length === 0)
 {active='Shopclosed';}else{active='ShopOpen';}

    return(
      <div className="container">
        <div id="FlipCard" className={active}>
          <div className="row">
            {
              this.props.FLIPCARDS.APPLICATION.Cards.map((card,i)=>{
               
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
      </div>
    )
  }
}
