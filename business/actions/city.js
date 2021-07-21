import { CITY, CITY_URL } from "../types/City";

export function city(cityModel) {
  return {
    type: CITY,
    payload: {
      request: {
        url: CITY_URL,
        data: cityModel,
      },
    },
  };
}
