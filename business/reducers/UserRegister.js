import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "../types/UserRegister";

const INITIAL_STATE = {
  registerUserLoading: false,
  registerUserResult: {},
  registerUserFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        registerUserLoading: true,
        registerUserResult: {},
        registerUserFail: false,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUserLoading: false,
        registerUserResult: action.payload.data,
        registerUserFail: false,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        registerUserLoading: false,
        registerUserResult: {},
        registerUserFail: true,
      };
    default:
      return { ...state };
  }
};
