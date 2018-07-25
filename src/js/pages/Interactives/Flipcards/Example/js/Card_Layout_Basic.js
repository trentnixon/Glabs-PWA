import React from 'react';

// Import Card Elements
import CardDomBanner from "./Card_DOM_Header";
import CardDomContent from "./Card_DOM_Content";
import CardDomAction from "./Card_DOM_ActionBar";

// BUild up Dom Elements for each Card
export default class CardFront extends React.Component {
  changeHandler(){}
  render() {
    return(
      <div className={'card-side ' + this.props.SideClass}
          style={{backgroundImage:"url(https://gdn-cdn.s3.amazonaws.com/embed/2018/07/mini-connected"+this.props.card.bgImage+")" }}
      >
        <div className='container-fluid card-side-outer'>
          <div className='row'>
              <div className='card-side-layout'>
                  <CardDomContent {... this.props}/>
                  <CardDomBanner {... this.props}/> 
                  <CardDomAction {... this.props}/>
              </div>
          </div>
        </div>
      </div> 
    )
  }
} 