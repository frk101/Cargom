import { GET_DISTRICT, GET_DISTRICT_URL } from "../types/GetDistricts";

export function getDistrict(getDistrictModel) {
  return {
    type: GET_DISTRICT,
    payload: {
      request: {
        url: GET_DISTRICT_URL,
        data: getDistrictModel,
      },
    },
  };
}
