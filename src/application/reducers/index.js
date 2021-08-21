import { combineReducers } from "redux";
import forsale from "./forsale";
import ui from "./ui";
import testimoni from "./testimoni";

export default combineReducers({
  forsale,
  ui,
  testimoni,
});
