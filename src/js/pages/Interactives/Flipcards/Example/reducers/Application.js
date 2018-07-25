// import React from "react";

const InitialState ={
	APPLICATION:false,
	Data:false,
	Theme:false,
	UI:false,
	UI_SET:false,
	SETFLIP:false,
	FLIPSTATE:false,
	ImagePath:"/",
	TrackOpenCards:[]

}

const APP = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
			
			case "STORE_FLIPCARD":{
			return {...state, APPLICATION:action.payload}
				// eslint-disable-next-line 
				break
			}
		}
		return state;
	}
export default APP;	