// import React from "react";

const InitialState ={
	Data:false,
	Theme:false,
	UI:false,
	UI_SET:false,
	SETFLIP:false,
	FLIPSTATE:false,
	ImagePath:"https://gdn-cdn.s3.amazonaws.com/embed/2018/07/icare/atom/assets/images/",
	Themes:{
		Dark:{
			colors:['#996b4e', '#dbaa8b', '#73b393', '#b37383','#5bbeba', '#bebb5b','#67c2c4','#c47e67', '#be5b5e', '#5b5ebe','#c46795','#95c467'],
			axis:'#383838',
			label:{
				color:'#383838',
			},
			Tooltip:{
				wrapper:{ 
					backgroundColor:'rgba(44, 44, 44, .7)',
					borderColor:'transparent',
					borderRadius:'5px',
					textAlign:'right'
				},
				label:{ color:'#CFF8F5',},
				Style:{color:'#CFF8F5',}
			},
			Legend:{color:'#383838',}
		}
	}
}

const UI = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
			
			// Fetch Initial Meta Data
			case "STORE_DATA":{
					return {...state, Data:action.payload}
					// eslint-disable-next-line 
					break
				}	
			case "STORE_THEME":{
				return {...state, Theme:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "STORE_UI":{
				return {...state, UI:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "UI_SET":{
				return {...state, UI_SET:action.payload}
					// eslint-disable-next-line 
					break
			}
		}
		return state;
	}
export default UI;	