import {
  ADDRESS_SEARCH,
  ADDRESS_SEARCH_SUCCESS,
  ADDRESS_SEARCH_FAIL,
} from "../types/Search";

const INITIAL_STATE = {
  addressSearchLoading: false,
  addressSearchResult: {},
  addressSearchFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDRESS_SEARCH:
      return {
        ...state,
        addressSearchLoading: true,
        addressSearchResult: {},
        addressSearchFail: false,
      };
    case ADDRESS_SEARCH_SUCCESS:
      return {
        ...state,
        addressSearchLoading: false,
        addressSearchResult: action.payload.data,
        addressSearchFail: false,
      };
    case ADDRESS_SEARCH_FAIL:
      return {
        ...state,
        addressSearchLoading: false,
        addressSearchResult: {},
        addressSearchFail: true,
      };
    default:
      return { ...state };
  }
};
