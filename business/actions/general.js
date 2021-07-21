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

export function vehicleBrandsGetAll() {
  return {
    type: VEHICLE_BRANDS_GET_ALL,
    payload: {
      request: {
        url: VEHICLE_BRANDS_GET_ALL_URL,
      },
    },
  };
}

export function vehicleModelsgetByBrand(brandId) {
  return {
    type: VEHICLE_MODELS_GET_BY_BRAND_ID,
    payload: {
      request: {
        url: `${VEHICLE_MODELS_GET_BY_BRAND_ID_URL}/${brandId}`,
      },
    },
  };
}

export function vehicleModelsDesiRate(brandId) {
  return {
    type: VEHICLE_MODELS_DESI_RATE,
    payload: {
      request: {
        url: `${VEHICLE_MODELS_DESI_RATE_URL}/${brandId}`,
      },
    },
  };
}

export function vehicleTypesGetAll() {
  return {
    type: VEHICLE_TYPES_GET_ALL,
    payload: {
      request: {
        url: VEHICLE_TYPES_GET_ALL_URL,
      },
    },
  };
}

export function citiesGetAll() {
  return {
    type: CITIES_GET_ALL,
    payload: {
      request: {
        url: CITIES_GET_ALL_URL,
      },
    },
  };
}

export function citiesGetAllWithDistrict() {
  return {
    type: CITIES_GET_ALL_WITH_DISTRICTS,
    payload: {
      request: {
        url: CITIES_GET_ALL_WITH_DISTRICTS_URL,
      },
    },
  };
}
export function districtGetByCity(cityId) {
  return {
    type: DISTRICTS_GET_BY_CITY_ID,
    payload: {
      request: {
        url: `${DISTRICTS_GET_BY_CITY_ID_URL}/${cityId}`,
      },
    },
  };
}

export function addressSearchByKeword(kelime) {
  return {
    type: ADDRESS_SEARCH_BY_KEYWORD,
    payload: {
      request: {
        url: `${ADDRESS_SEARCH_BY_KEYWORD_URL}/${kelime}`,
      },
    },
  };
}
