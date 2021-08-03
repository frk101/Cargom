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
  SHIPPERS_LOGIN_URL,
  SHIPPERS_LOGIN,
  VEHICLES_GET_BY_SHIPPER_ID,
  VEHICLES_GET_BY_SHIPPER_ID_URL,
  SHIPPER_ORDERS_GET_ALL_MY_ORDERS,
  SHIPPER_ORDERS_GET_ALL_MY_ORDERS_URL,
  SHIPPER_ORDERS_GET_BY_ID,
  SHIPPER_ORDERS_GET_BY_ID_URL,
  SHIPPER_ORDERS_PICKUP_URL,
  SHIPPER_ORDERS_PICKUP,
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

export function driverGetByShipper(isApproved) {
  let url = DRIVERS_GET_BY_SHIPPER_ID_URL;
  if (isApproved != null || isApproved != undefined) {
    if (isApproved) {
      url += `?isApproved=true`;
    } else {
      url += `?isApproved=false`;
    }
  }
  return {
    type: DRIVERS_GET_BY_SHIPPER_ID,
    payload: {
      request: {
        url: url,
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

export function shipperLogin(userModel) {
  return {
    type: SHIPPERS_LOGIN,
    payload: {
      request: {
        method: "POST",
        url: SHIPPERS_LOGIN_URL,
        data: userModel,
      },
    },
  };
}

export function vehiclesGetByShipper() {
  return {
    type: VEHICLES_GET_BY_SHIPPER_ID,
    payload: {
      request: {
        url: VEHICLES_GET_BY_SHIPPER_ID_URL,
      },
    },
  };
}

export function shipperOrdersGetAllMyOrders(pageNumber = 0) {
  return {
    type: SHIPPER_ORDERS_GET_ALL_MY_ORDERS,
    payload: {
      request: {
        url: `${SHIPPER_ORDERS_GET_ALL_MY_ORDERS_URL}?Page=${pageNumber}`,
      },
    },
  };
}

export function shipperOrdersgetById(orderId) {
  return {
    type: SHIPPER_ORDERS_GET_BY_ID,
    payload: {
      request: {
        url: `${SHIPPER_ORDERS_GET_BY_ID_URL}/${orderId}`,
      },
    },
  };
}

export function shipperOrdersPıckup(userModel) {
  return {
    type: SHIPPER_ORDERS_PICKUP,
    payload: {
      request: {
        method: "POST",
        url: SHIPPER_ORDERS_PICKUP_URL,
        data: userModel,
      },
    },
  };
}
