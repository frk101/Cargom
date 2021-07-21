import {
  BRAND_LIST,
  BRAND_LIST_SUCCESS,
  BRAND_LIST_FAIL,
} from "../types/BrandList";

const INITIAL_STATE = {
  brandListLoading: false,
  brandListResult: {},
  brandListFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BRAND_LIST:
      return {
        ...state,
        brandListLoading: true,
        brandListResult: {},
        brandListFail: false,
      };
    case BRAND_LIST_SUCCESS:
      return {
        ...state,
        brandListLoading: false,
        brandListResult: action.payload.data,
        brandListFail: false,
      };
    case BRAND_LIST_FAIL:
      return {
        ...state,
        brandListLoading: false,
        brandListResult: {},
        brandListFail: true,
      };
    default:
      return { ...state };
  }
};
