import { combineReducers } from "redux";
import general from "./general";
import shipper from "./shipper";
import driver from "./driver";
export default combineReducers({
  general: general,
  shipper: shipper,
  driver: driver,
});
