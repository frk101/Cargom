import {
  VEHICLE_TYPE,
  VEHICLE_TYPE_SUCCESS,
  VEHICLE_TYPE_FAIL,
} from "../types/VehicleType";

const INITIAL_STATE = {
  vehicleTypeLoading: false,
  vehicleTypeResult: {},
  vehicleTypeFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VEHICLE_TYPE:
      return {
        ...state,
        vehicleTypeLoading: true,
        vehicleTypeResult: {},
        vehicleTypeFail: false,
      };
    case VEHICLE_TYPE_SUCCESS:
      return {
        ...state,
        vehicleTypeLoading: false,
        vehicleTypeResult: action.payload.data,
        vehicleTypeFail: false,
      };
    case VEHICLE_TYPE_FAIL:
      return {
        ...state,
        vehicleTypeLoading: false,
        vehicleTypeResult: {},
        vehicleTypeFail: true,
      };
    default:
      return { ...state };
  }
};
