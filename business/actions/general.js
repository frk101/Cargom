import {
  VEHICLE_BRANDS_GET_ALL,
  VEHICLE_BRANDS_GET_ALL_URL,
  VEHICLE_MODELS_GET_BY_BRAND_ID,
  VEHICLE_MODELS_GET_BY_BRAND_ID_URL,
  VEHICLE_MODELS_DESI_RATE,
  VEHICLE_MODELS_DESI_RATE_URL,
  VEHICLE_TYPES_GET_ALL,
  VEHICLE_TYPES_GET_ALL_URL,
  CITIES_GET_ALL,
  CITIES_GET_ALL_URL,
  CITIES_GET_ALL_WITH_DISTRICTS,
  CITIES_GET_ALL_WITH_DISTRICTS_URL,
  DISTRICTS_GET_BY_CITY_ID,
  DISTRICTS_GET_BY_CITY_ID_URL,
  ADDRESS_SEARCH_BY_KEYWORD,
  ADDRESS_SEARCH_BY_KEYWORD_URL,
} from "../types/general";

export function vehicleBrandsGetAll(userModel) {
  return {
    type: VEHICLE_BRANDS_GET_ALL,
    payload: {
      request: {
        method: "POST",
        url: VEHICLE_BRANDS_GET_ALL_URL,
        data: userModel,
      },
    },
  };
}

export function vehicleModelsgetByBrand(userModel) {
  return {
    type: VEHICLE_MODELS_GET_BY_BRAND_ID,
    payload: {
      request: {
        method: "POST",
        url: VEHICLE_MODELS_GET_BY_BRAND_ID_URL,
        data: userModel,
      },
    },
  };
}

export function vehicleModelsDesiRate(userModel) {
  return {
    type: VEHICLE_MODELS_DESI_RATE,
    payload: {
      request: {
        method: "POST",
        url: VEHICLE_MODELS_DESI_RATE_URL,
        data: userModel,
      },
    },
  };
}

export function vehicleTypesGetAll(userModel) {
  return {
    type: VEHICLE_TYPES_GET_ALL,
    payload: {
      request: {
        method: "POST",
        url: VEHICLE_TYPES_GET_ALL_URL,
        data: userModel,
      },
    },
  };
}

export function citiesGetAll(userModel) {
  return {
    type: CITIES_GET_ALL,
    payload: {
      request: {
        method: "POST",
        url: CITIES_GET_ALL_URL,
        data: userModel,
      },
    },
  };
}

/////////////////
export function citiesGetAllWithDistrict(userModel) {
  return {
    type: CITIES_GET_ALL_WITH_DISTRICTS,
    payload: {
      request: {
        method: "POST",
        url: CITIES_GET_ALL_WITH_DISTRICTS_URL,
        data: userModel,
      },
    },
  };
}
export function districtGetByCity(userModel) {
  return {
    type: DISTRICTS_GET_BY_CITY_ID,
    payload: {
      request: {
        method: "POST",
        url: DISTRICTS_GET_BY_CITY_ID_URL,
        data: userModel,
      },
    },
  };
}

export function addressSearchByKeword(userModel) {
  return {
    type: ADDRESS_SEARCH_BY_KEYWORD,
    payload: {
      request: {
        method: "POST",
        url: ADDRESS_SEARCH_BY_KEYWORD_URL,
        data: userModel,
      },
    },
  };
}
