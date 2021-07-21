import {
  ADD_VEHICLE,
  ADD_VEHICLE_SUCCESS,
  ADD_VEHICLE_FAIL,
} from "../types/AddVehicle";

const INITIAL_STATE = {
  addVehicleLoading: false,
  addVehicleResult: {},
  addVehicleFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_VEHICLE:
      return {
        ...state,
        addVehicleLoading: true,
        addVehicleResult: {},
        addVehicleFail: false,
      };
    case ADD_VEHICLE_SUCCESS:
      return {
        ...state,
        addVehicleLoading: false,
        addVehicleResult: action.payload.data,
        addVehicleFail: false,
      };
    case ADD_VEHICLE_FAIL:
      return {
        ...state,
        addVehicleLoading: false,
        addVehicleResult: {},
        addVehicleFail: true,
      };
    default:
      return { ...state };
  }
};
