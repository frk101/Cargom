import { CORPORATE_USER, CORPORATE_USER_URL } from "../types/CorporateRegister";

export function comporateUser(comporateModel) {
  return {
    type: CORPORATE_USER,
    payload: {
      request: {
        method: "POST",
        url: CORPORATE_USER_URL,
        data: comporateModel,
      },
    },
  };
}
