import { ADD_DRIVER, ADD_DRIVER_URL } from "../types/AddDriver";

export function addDriver(addDriverModel) {
  return {
    type: ADD_DRIVER,
    payload: {
      request: {
        method: "POST",
        url: ADD_DRIVER_URL,
        data: addDriverModel,
      },
    },
  };
}
