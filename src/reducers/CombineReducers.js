import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";
import {showReducer} from "./ShowReducer";

const rootReducer = combineReducers({
  show: showReducer,
  dropdown: dropdownReducer
});

export default rootReducer