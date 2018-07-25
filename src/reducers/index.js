import { combineReducers } from "redux";

import UI_DATA from "./UI";
import FLipcard from "../js/pages/Interactives/Flipcards/Example/reducers/Application";

const reducers = combineReducers({
		UI:UI_DATA,
		FLipcard:FLipcard
	})

export default reducers;