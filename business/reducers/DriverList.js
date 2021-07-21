import {
  DRIVER_LIST,
  DRIVER_LIST_SUCCESS,
  DRIVER_LIST_FAIL,
} from "../types/DriverList";

const INITIAL_STATE = {
  driverListLoading: false,
  driverListResult: {},
  driverListFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DRIVER_LIST:
      return {
        ...state,
        driverListLoading: true,
        driverListResult: {},
        driverListFail: false,
      };
    case DRIVER_LIST_SUCCESS:
      return {
        ...state,
        driverListLoading: false,
        driverListResult: action.payload.data,
        driverListFail: false,
      };
    case DRIVER_LIST_FAIL:
      return {
        ...state,
        driverListLoading: false,
        driverListResult: {},
        driverListFail: true,
      };
    default:
      return { ...state };
  }
};
