import { combineReducers } from "redux";
import general from "./general";
import shipper from "./shipper";

export default combineReducers({
  general: general,
  shipper: shipper,
});
