import { combineReducers } from "redux";
import register from "./UserRegister";
import desi from "./ModelDesi";
import model from "./ModelList";
import addDriver from "./AddDriver";
import addVehicle from "./AddVehicle";
import brand from "./BrandList";
import city from "./City";
import corporateRegister from "./CorporateRegister";
import districtyCity from "./DistrictCity";
import driver from "./DriverList";
import district from "./GetDistricts";
import complateRegister from "./RegisterComplate";
import search from "./Search";
import type from "./VehicleType";
export default combineReducers({
  register: register,
  desi: desi,
  model: model,
  addDriver: addDriver,
  addVehicle: addVehicle,
  brand: brand,
  city: city,
  corporateRegister: corporateRegister,
  districtyCity: districtyCity,
  driver: driver,
  district: district,
  complateRegister: complateRegister,
  search: search,
  type: type,
});
