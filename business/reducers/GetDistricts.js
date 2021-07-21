import {
  GET_DISTRICT,
  GET_DISTRICT_SUCCESS,
  GET_DISTRICT_FAIL,
} from "../types/GetDistricts";

const INITIAL_STATE = {
  getDistrictLoading: false,
  getDistrictResult: {},
  getDistrictFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DISTRICT:
      return {
        ...state,
        getDistrictLoading: true,
        getDistrictResult: {},
        getDistrictFail: false,
      };
    case GET_DISTRICT_SUCCESS:
      return {
        ...state,
        getDistrictLoading: false,
        getDistrictResult: action.payload.data,
        getDistrictFail: false,
      };
    case GET_DISTRICT_FAIL:
      return {
        ...state,
        getDistrictLoading: false,
        getDistrictResult: {},
        getDistrictFail: true,
      };
    default:
      return { ...state };
  }
};
