import {
  MODEL_LIST,
  MODEL_LIST_SUCCESS,
  MODEL_LIST_FAIL,
} from "../types/ModelList";

const INITIAL_STATE = {
  modelListLoading: false,
  modelListResult: {},
  modelListFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODEL_LIST:
      return {
        ...state,
        modelListLoading: true,
        modelListResult: {},
        modelListFail: false,
      };
    case MODEL_LIST_SUCCESS:
      return {
        ...state,
        modelListLoading: false,
        modelListResult: action.payload.data,
        modelListFail: false,
      };
    case MODEL_LIST_FAIL:
      return {
        ...state,
        modelListLoading: false,
        modelListResult: {},
        modelListFail: true,
      };
    default:
      return { ...state };
  }
};
