import { combineReducers } from "redux";
import { programQueryReducer } from "./ProgramQueryReducer";
import {showReducer} from "./ShowReducer";

const rootReducer = combineReducers({
  show: showReducer,
  programQuery: programQueryReducer
});

export default rootReducer