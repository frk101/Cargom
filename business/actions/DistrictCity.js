import { DISTRICTS_CITY, DISTRICTS_CITY_URL } from "../types/DistrictCity";

export function districtscity(districtscityModel) {
  return {
    type: DISTRICTS_CITY,
    payload: {
      request: {
        url: DISTRICTS_CITY_URL,
        data: districtscityModel,
      },
    },
  };
}
