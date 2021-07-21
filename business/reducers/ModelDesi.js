import {
  MODEL_DESI,
  MODEL_DESI_SUCCESS,
  MODEL_DESI_FAIL,
} from "../types/ModelDesi";

const INITIAL_STATE = {
  modelDesiLoading: false,
  modelDesiResult: {},
  modelDesiFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODEL_DESI:
      return {
        ...state,
        modelDesiLoading: true,
        modelDesiResult: {},
        modelDesiFail: false,
      };
    case MODEL_DESI_SUCCESS:
      return {
        ...state,
        modelDesiLoading: false,
        modelDesiResult: action.payload.data,
        modelDesiFail: false,
      };
    case MODEL_DESI_FAIL:
      return {
        ...state,
        modelDesiLoading: false,
        modelDesiResult: {},
        modelDesiFail: true,
      };
    default:
      return { ...state };
  }
};
