import {
  DISTRICTS_CITY,
  DISTRICTS_CITY_SUCCESS,
  DISTRICTS_CITY_FAIL,
} from "../types/DistrictCity";

const INITIAL_STATE = {
  districtsCityLoading: false,
  districtsCityResult: {},
  districtsCityFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISTRICTS_CITY:
      return {
        ...state,
        districtsCityLoading: true,
        districtsCityResult: {},
        districtsCityFail: false,
      };
    case DISTRICTS_CITY_SUCCESS:
      return {
        ...state,
        districtsCityLoading: false,
        districtsCityResult: action.payload.data,
        districtsCityFail: false,
      };
    case DISTRICTS_CITY_FAIL:
      return {
        ...state,
        districtsCityLoading: false,
        districtsCityResult: {},
        districtsCityFail: true,
      };
    default:
      return { ...state };
  }
};
