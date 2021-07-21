import { CITY, CITY_SUCCESS, CITY_FAIL } from "../types/City";

const INITIAL_STATE = {
  cityLoading: false,
  cityResult: {},
  cityFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CITY:
      return {
        ...state,
        cityLoading: true,
        cityResult: {},
        cityFail: false,
      };
    case CITY_SUCCESS:
      return {
        ...state,
        cityLoading: false,
        cityResult: action.payload.data,
        cityFail: false,
      };
    case CITY_FAIL:
      return {
        ...state,
        cityLoading: false,
        cityResult: {},
        cityFail: true,
      };
    default:
      return { ...state };
  }
};
