import {
  ADD_DRIVER,
  ADD_DRIVER_SUCCESS,
  ADD_DRIVER_FAIL,
} from "../types/AddDriver";

const INITIAL_STATE = {
  addDriverLoading: false,
  addDriverResult: {},
  addDriverFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DRIVER:
      return {
        ...state,
        addDriverLoading: true,
        addDriverResult: {},
        addDriverFail: false,
      };
    case ADD_DRIVER_SUCCESS:
      return {
        ...state,
        addDriverLoading: false,
        addDriverResult: action.payload.data,
        addDriverFail: false,
      };
    case ADD_DRIVER_FAIL:
      return {
        ...state,
        addDriverLoading: false,
        addDriverResult: {},
        addDriverFail: true,
      };
    default:
      return { ...state };
  }
};
