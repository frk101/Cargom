import { REGISTER_USER, REGISTER_USER_URL } from "../types/UserRegister";

export function registerUser(userModel) {
  return {
    type: REGISTER_USER,
    payload: {
      request: {
        method: "POST",
        url: REGISTER_USER_URL,
        data: userModel,
      },
    },
  };
}
