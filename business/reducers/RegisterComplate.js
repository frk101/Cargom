import {
  REGISTER_COMPLATE,
  REGISTER_COMPLATE_SUCCESS,
  REGISTER_COMPLATE_FAIL,
} from "../types/RegisterComplate";

const INITIAL_STATE = {
  registerComplateLoading: false,
  registerComplateResult: {},
  registerComplateFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_COMPLATE:
      return {
        ...state,
        registerComplateLoading: true,
        registerComplateResult: {},
        registerComplateFail: false,
      };
    case REGISTER_COMPLATE_SUCCESS:
      return {
        ...state,
        registerComplateLoading: false,
        registerComplateResult: action.payload.data,
        registerComplateFail: false,
      };
    case REGISTER_COMPLATE_FAIL:
      return {
        ...state,
        registerComplateLoading: false,
        registerComplateResult: {},
        registerComplateFail: true,
      };
    default:
      return { ...state };
  }
};
