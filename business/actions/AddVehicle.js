import { ADD_VEHICLE, ADD_VHICLE_URL } from "../types/AddVehicle";

export function addVehicle(addVehicleModel) {
  return {
    type: ADD_VEHICLE,
    payload: {
      request: {
        method: "POST",
        url: ADD_VHICLE_URL,
        data: addVehicleModel,
      },
    },
  };
}
