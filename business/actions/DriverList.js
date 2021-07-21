import { DRIVER_LIST, DRIVER_LIST_URL } from "../types/DriverList";

export function driverList(driverListModel) {
  return {
    type: DRIVER_LIST,
    payload: {
      request: {
        url: DRIVER_LIST_URL,
        data: driverListModel,
      },
    },
  };
}
