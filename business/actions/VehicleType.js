import { VEHICLE_TYPE, VEHICLE_TYPE_URL } from "../types/VehicleType";

export function vehicleTypeUser(vehicleModel) {
  return {
    type: VEHICLE_TYPE,
    payload: {
      request: {
        url: VEHICLE_TYPE_URL,
        data: vehicleModel,
      },
    },
  };
}
