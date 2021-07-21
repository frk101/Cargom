import {
  VEHICLE_BRANDS_GET_ALL,
  VEHICLE_BRANDS_GET_ALL_FAIL,
  VEHICLE_BRANDS_GET_ALL_SUCCESS,
  VEHICLE_MODELS_GET_BY_BRAND_ID,
  VEHICLE_MODELS_GET_BY_BRAND_ID_SUCCESS,
  VEHICLE_MODELS_GET_BY_BRAND_ID_FAIL,
  VEHICLE_MODELS_DESI_RATE,
  VEHICLE_MODELS_DESI_RATE_SUCCESS,
  VEHICLE_MODELS_DESI_RATE_FAIL,
  VEHICLE_TYPES_GET_ALL,
  VEHICLE_TYPES_GET_ALL_SUCCESS,
  VEHICLE_TYPES_GET_ALL_FAIL,
  CITIES_GET_ALL,
  CITIES_GET_ALL_FAIL,
  CITIES_GET_ALL_SUCCESS,
  CITIES_GET_ALL_WITH_DISTRICTS,
  CITIES_GET_ALL_WITH_DISTRICTS_SUCCESS,
  CITIES_GET_ALL_WITH_DISTRICTS_FAIL,
  DISTRICTS_GET_BY_CITY_ID,
  DISTRICTS_GET_BY_CITY_ID_SUCCESS,
  DISTRICTS_GET_BY_CITY_ID_FAIL,
  ADDRESS_SEARCH_BY_KEYWORD,
  ADDRESS_SEARCH_BY_KEYWORD_FAIL,
  ADDRESS_SEARCH_BY_KEYWORDL_SUCCESS,
} from "../types/general";

const INITIAL_STATE = {
  vehicleGetAllBrandsLoading: false,
  vehicleGetAllBrandsResult: {},
  vehicleGetAllBrandsFail: false,
  vehicleModelGetByBrandLoading: false,
  vehicleModelGetByBrandResult: {},
  vehicleModelGetByBrandFail: false,
  vehicleModelDesiRateLoading: false,
  vehicleModelDesiRateResult: {},
  vehicleModelDesiRateLFail: false,
  vehicleTypesGetAllLoading: false,
  vehicleTypesGetAllResult: {},
  vehicleTypesGetAllFail: false,
  citiesGetAllLoading: false,
  citiesGetAllResult: {},
  citiesGetAllFail: false,
  citiesGetAllWithDistrictLoading: false,
  citiesGetAllWithDistrictResult: {},
  citiesGetAllWithDistrictFail: false,
  districtGetByCityLoading: false,
  districtGetByCityResult: {},
  districtGetByCityFail: false,
  addressSearchByKewordLoading: false,
  addressSearchByKewordResult: {},
  addressSearchByKewordFail: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VEHICLE_BRANDS_GET_ALL:
      return {
        ...state,
        vehicleGetAllBrandsLoading: true,
        vehicleGetAllBrandsResult: {},
        vehicleGetAllBrandsFail: false,
      };
    case VEHICLE_BRANDS_GET_ALL_SUCCESS:
      return {
        ...state,
        vehicleGetAllBrandsLoading: false,
        vehicleGetAllBrandsResult: action.payload.data,
        vehicleGetAllBrandsFail: false,
      };
    case VEHICLE_BRANDS_GET_ALL_FAIL:
      return {
        ...state,
        vehicleGetAllBrandsLoading: false,
        vehicleGetAllBrandsResult: {},
        vehicleGetAllBrandsFail: true,
      };
    case VEHICLE_MODELS_GET_BY_BRAND_ID:
      return {
        ...state,
        vehicleModelGetByBrandLoading: true,
        vehicleModelGetByBrandResult: {},
        vehicleModelGetByBrandFail: false,
      };
    case VEHICLE_MODELS_GET_BY_BRAND_ID_SUCCESS:
      return {
        ...state,
        vehicleModelGetByBrandLoading: false,
        vehicleModelGetByBrandResult: action.payload.data,
        vehicleModelGetByBrandFail: false,
      };
    case VEHICLE_MODELS_GET_BY_BRAND_ID_FAIL:
      return {
        ...state,
        vehicleModelGetByBrandLoading: false,
        vehicleModelGetByBrandResult: {},
        vehicleModelGetByBrandFail: true,
      };

    case VEHICLE_MODELS_DESI_RATE:
      return {
        ...state,
        vehicleModelDesiRateLoading: true,
        vehicleModelDesiRateResult: {},
        vehicleModelDesiRateFail: false,
      };
    case VEHICLE_MODELS_DESI_RATE_SUCCESS:
      return {
        ...state,
        vehicleModelDesiRateLoading: false,
        vehicleModelDesiRateResult: action.payload.data,
        vehicleModelDesiRateFail: false,
      };
    case VEHICLE_MODELS_DESI_RATE_FAIL:
      return {
        ...state,
        vehicleModelDesiRateLoading: false,
        vehicleModelDesiRateResult: {},
        vehicleModelDesiRateFail: true,
      };

    case VEHICLE_TYPES_GET_ALL:
      return {
        ...state,
        vehicleTypesGetAllLoading: true,
        vehicleTypesGetAllResult: {},
        vehicleTypesGetAllFail: false,
      };
    case VEHICLE_TYPES_GET_ALL_SUCCESS:
      return {
        ...state,
        vehicleTypesGetAllLoading: false,
        vehicleTypesGetAllResult: action.payload.data,
        vehicleTypesGetAllFail: false,
      };
    case VEHICLE_TYPES_GET_ALL_FAIL:
      return {
        ...state,
        vehicleTypesGetAllLoading: false,
        vehicleTypesGetAllResult: {},
        vehicleTypesGetAllFail: true,
      };

    case CITIES_GET_ALL:
      return {
        ...state,
        citiesGetAllLoading: true,
        citiesGetAllResult: {},
        citiesGetAllFail: false,
      };
    case CITIES_GET_ALL_SUCCESS:
      return {
        ...state,
        citiesGetAllLoading: false,
        citiesGetAllResult: action.payload.data,
        citiesGetAllFail: false,
      };
    case CITIES_GET_ALL_FAIL:
      return {
        ...state,
        citiesGetAllLoading: false,
        citiesGetAllResult: {},
        citiesGetAllFail: true,
      };

    case CITIES_GET_ALL_WITH_DISTRICTS:
      return {
        ...state,
        citiesGetAllWithDistrictLoading: true,
        citiesGetAllWithDistrictResult: {},
        citiesGetAllWithDistrictFail: false,
      };
    case CITIES_GET_ALL_WITH_DISTRICTS_SUCCESS:
      return {
        ...state,
        citiesGetAllWithDistrictLoading: false,
        citiesGetAllWithDistrictResult: action.payload.data,
        citiesGetAllWithDistrictFail: false,
      };
    case CITIES_GET_ALL_WITH_DISTRICTS_FAIL:
      return {
        ...state,
        citiesGetAllWithDistrictLoading: false,
        citiesGetAllWithDistrictResult: {},
        citiesGetAllWithDistrictFail: true,
      };

    case DISTRICTS_GET_BY_CITY_ID:
      return {
        ...state,
        districtGetByCityLoading: true,
        districtGetByCityResult: {},
        districtGetByCityFail: false,
      };
    case DISTRICTS_GET_BY_CITY_ID_SUCCESS:
      return {
        ...state,
        districtGetByCityLoading: false,
        districtGetByCityResult: action.payload.data,
        districtGetByCityFail: false,
      };
    case DISTRICTS_GET_BY_CITY_ID_FAIL:
      return {
        ...state,
        districtGetByCityLoading: false,
        districtGetByCityResult: {},
        districtGetByCityFail: true,
      };

    case ADDRESS_SEARCH_BY_KEYWORD:
      return {
        ...state,
        addressSearchByKewordLoading: true,
        addressSearchByKewordResult: {},
        addressSearchByKewordFail: false,
      };
    case ADDRESS_SEARCH_BY_KEYWORDL_SUCCESS:
      return {
        ...state,
        addressSearchByKewordLoading: false,
        addressSearchByKewordResult: action.payload.data,
        addressSearchByKewordFail: false,
      };
    case ADDRESS_SEARCH_BY_KEYWORD_FAIL:
      return {
        ...state,
        addressSearchByKewordLoading: false,
        addressSearchByKewordResult: {},
        addressSearchByKewordFail: true,
      };
    default:
      return { ...state };
  }
};
