import {
  CORPORATE_USER,
  CORPORATE_USER_SUCCESS,
  CORPORATE_USER_FAIL,
} from "../types/CorporateRegister";

const INITIAL_STATE = {
  corporateUserLoading: false,
  corporateUserResult: {},
  corporateUserFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CORPORATE_USER:
      return {
        ...state,
        corporateUserLoading: true,
        corporateUserResult: {},
        corporateUserFail: false,
      };
    case CORPORATE_USER_SUCCESS:
      return {
        ...state,
        corporateUserLoading: false,
        corporateUserResult: action.payload.data,
        corporateUserFail: false,
      };
    case CORPORATE_USER_FAIL:
      return {
        ...state,
        corporateUserLoading: false,
        corporateUserResult: {},
        corporateUserFail: true,
      };
    default:
      return { ...state };
  }
};
