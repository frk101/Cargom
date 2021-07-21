import {
  DRIVERS_CREATE,
  DRIVERS_CREATE_URL,
  DRIVERS_GET_BY_SHIPPER_ID,
  DRIVERS_GET_BY_SHIPPER_ID_URL,
  VEHICLES_CREATE,
  VEHICLES_CREATE_URL,
  SHIPPERS_REGISTER_BEGIN_REQUEST,
  SHIPPERS_REGISTER_BEGIN_REQUEST_URL,
  SHIPPERS_REGISTER_COMPLATE,
  SHIPPERS_REGISTER_COMPLATE_URL,
} from "../types/shipper";

export function driverCraete(userModel) {
  return {
    type: DRIVERS_CREATE,
    payload: {
      request: {
        method: "POST",
        url: DRIVERS_CREATE_URL,
        data: userModel,
      },
    },
  };
}

export function driverGetByShipper(userModel) {
  return {
    type: DRIVERS_GET_BY_SHIPPER_ID,
    payload: {
      request: {
        method: "POST",
        url: DRIVERS_GET_BY_SHIPPER_ID_URL,
        data: userModel,
      },
    },
  };
}

export function vehiclesCreate(userModel) {
  return {
    type: VEHICLES_CREATE,
    payload: {
      request: {
        method: "POST",
        url: VEHICLES_CREATE_URL,
        data: userModel,
      },
    },
  };
}

export function shipperRegisterBeginRequest(userModel) {
  return {
    type: SHIPPERS_REGISTER_BEGIN_REQUEST,
    payload: {
      request: {
        method: "POST",
        url: SHIPPERS_REGISTER_BEGIN_REQUEST_URL,
        data: userModel,
      },
    },
  };
}

export function shipperRegisterComplate(userModel) {
  return {
    type: SHIPPERS_REGISTER_COMPLATE,
    payload: {
      request: {
        method: "POST",
        url: SHIPPERS_REGISTER_COMPLATE_URL,
        data: userModel,
      },
    },
  };
}
