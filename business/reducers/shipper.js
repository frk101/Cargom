import {
  DRIVERS_CREATE,
  DRIVERS_CREATE_SUCCESS,
  DRIVERS_CREATE_FAIL,
  DRIVERS_GET_BY_SHIPPER_ID,
  DRIVERS_GET_BY_SHIPPER_ID_FAIL,
  DRIVERS_GET_BY_SHIPPER_ID_SUCCESS,
  VEHICLES_CREATE,
  VEHICLES_CREATE_SUCCESS,
  VEHICLES_CREATE_FAIL,
  SHIPPERS_REGISTER_BEGIN_REQUEST,
  SHIPPERS_REGISTER_BEGIN_REQUEST_SUCCESS,
  SHIPPERS_REGISTER_BEGIN_REQUEST_FAIL,
  SHIPPERS_REGISTER_COMPLATE,
  SHIPPERS_REGISTER_COMPLATE_FAIL,
  SHIPPERS_REGISTER_COMPLATE_SUCCESS,
  SHIPPERS_LOGIN,
  SHIPPERS_LOGIN_SUCCESS,
  SHIIPERS_LOGIN_FAIL,
  VEHICLES_GET_BY_SHIPPER_ID,
  VEHICLES_GET_BY_SHIPPER_ID_FAIL,
  VEHICLES_GET_BY_SHIPPER_ID_SUCCESS,
} from "../types/shipper";

const INITIAL_STATE = {
  driverCreateLoading: false,
  driverCreateResult: {},
  driverCreateFail: false,
  driverGetAllShipperLoading: false,
  driverGetAllShipperResult: {},
  driverGetAllShipperFail: false,
  vehiclesCreateLoading: false,
  vehiclesCreateResult: {},
  vehiclesCreateFail: false,
  shipperRegisterBeginLoading: false,
  shipperRegisterBeginLResult: {},
  shipperRegisterBeginFail: false,
  shipperRegisterComplateLoading: false,
  shipperRegisterComplateResult: {},
  shipperRegisterComplateFail: false,
  shipperLoginLoading: false,
  shipperLoginResult: {},
  shipperLoginFail: false,
  vehiclesGetByShipperLoading: false,
  vehiclesGetByShipperResult: {},
  vehiclesGetByShipperFail: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DRIVERS_CREATE:
      return {
        ...state,
        driverCreateLoading: true,
        driverCreateResult: {},
        driverCreateFail: false,
      };
    case DRIVERS_CREATE_SUCCESS:
      return {
        ...state,
        driverCreateLoading: false,
        driverCreateResult: action.payload.data,
        driverCreateFail: false,
      };
    case DRIVERS_CREATE_FAIL:
      return {
        ...state,
        driverCreateLoading: false,
        driverCreateResult: {},
        driverCreateFail: true,
      };
    case DRIVERS_GET_BY_SHIPPER_ID:
      return {
        ...state,
        driverGetAllShipperLoading: true,
        driverGetAllShipperResult: {},
        driverGetAllShipperFail: false,
      };
    case DRIVERS_GET_BY_SHIPPER_ID_SUCCESS:
      return {
        ...state,
        driverGetAllShipperLoading: false,
        driverGetAllShipperResult: action.payload.data,
        driverGetAllShipperFail: false,
      };
    case DRIVERS_GET_BY_SHIPPER_ID_FAIL:
      return {
        ...state,
        driverGetAllShipperLoading: false,
        driverGetAllShipperResult: {},
        driverGetAllShipperFail: true,
      };
    //
    case VEHICLES_CREATE:
      return {
        ...state,
        vehiclesCreateLoading: true,
        vehiclesCreateResult: {},
        vehiclesCreateFail: false,
      };
    case VEHICLES_CREATE_SUCCESS:
      return {
        ...state,
        vehiclesCreateLoading: false,
        vehiclesCreateResult: action.payload.data,
        vehiclesCreateFail: false,
      };
    case VEHICLES_CREATE_FAIL:
      return {
        ...state,
        vehiclesCreateLoading: false,
        vehiclesCreateResult: {},
        vehiclesCreateFail: true,
      };

    ///////////////
    case SHIPPERS_REGISTER_BEGIN_REQUEST:
      return {
        ...state,
        shipperRegisterBeginLoading: true,
        shipperRegisterBeginLResult: {},
        shipperRegisterBeginFail: false,
      };
    case SHIPPERS_REGISTER_BEGIN_REQUEST_SUCCESS:
      return {
        ...state,
        shipperRegisterBeginLoading: false,
        shipperRegisterBeginLResult: action.payload.data,
        shipperRegisterBeginFail: false,
      };
    case SHIPPERS_REGISTER_BEGIN_REQUEST_FAIL:
      return {
        ...state,
        shipperRegisterBeginLoading: false,
        shipperRegisterBeginLResult: {},
        shipperRegisterBeginFail: true,
      };

    /////////////////

    case SHIPPERS_REGISTER_COMPLATE:
      return {
        ...state,
        shipperRegisterComplateLoading: true,
        shipperRegisterComplateResult: {},
        shipperRegisterComplateFail: false,
      };
    case SHIPPERS_REGISTER_COMPLATE_SUCCESS:
      return {
        ...state,
        shipperRegisterComplateLoading: false,
        shipperRegisterComplateResult: action.payload.data,
        shipperRegisterComplateFail: false,
      };
    case SHIPPERS_REGISTER_COMPLATE_FAIL:
      return {
        ...state,
        shipperRegisterComplateLoading: false,
        shipperRegisterComplateResult: {},
        shipperRegisterComplateFail: true,
      };
    ////////////////////////////////
    case SHIPPERS_LOGIN:
      return {
        ...state,
        shipperLoginLoading: true,
        shipperLoginResult: {},
        shipperLoginFail: false,
      };
    case SHIPPERS_LOGIN_SUCCESS:
      return {
        ...state,
        shipperLoginLoading: false,
        shipperLoginResult: action.payload.data,
        shipperLoginFail: false,
      };
    case SHIIPERS_LOGIN_FAIL:
      return {
        ...state,
        shipperLoginLoading: false,
        shipperLoginResult: {},
        shipperLoginFail: true,
      };

    case VEHICLES_GET_BY_SHIPPER_ID:
      return {
        ...state,
        vehiclesGetByShipperLoading: false,
        vehiclesGetByShipperResult: {},
        vehiclesGetByShipperFail: false,
      };
    case VEHICLES_GET_BY_SHIPPER_ID_SUCCESS:
      return {
        ...state,
        vehiclesGetByShipperLoading: false,
        vehiclesGetByShipperResult: action.payload.data,
        vehiclesGetByShipperFail: false,
      };
    case VEHICLES_GET_BY_SHIPPER_ID_FAIL:
      return {
        ...state,
        vehiclesGetByShipperLoading: false,
        vehiclesGetByShipperResult: {},
        vehiclesGetByShipperFail: true,
      };

    default:
      return { ...state };
  }
};
