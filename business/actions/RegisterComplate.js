import {
  REGISTER_COMPLATE,
  REGISTER_COMPLATE_URL,
} from "../types/RegisterComplate";

export function registerComplate(complateModel) {
  return {
    type: REGISTER_COMPLATE,
    payload: {
      request: {
        method: "POST",
        url: REGISTER_COMPLATE_URL,
        data: complateModel,
      },
    },
  };
}
