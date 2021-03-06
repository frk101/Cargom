import {
  ORDERS_GET_ALL_PENDING_OFFERS,
  ORDERS_GET_ALL_PENDING_OFFERS_URL,
  ORDERS_GET_PENDING_OFFER_DETAIL,
  ORDERS_GET_PENDING_OFFER_DETAIL_URL,
  ORDERS_ASSIGN_GROUP_DRIVER,
  ORDERS_ASSIGN_GROUP_DRIVER_URL,
  DRIVER_ORDERS_GET_ALL_MY_ORDERS,
  DRIVER_ORDERS_GET_ALL_MY_ORDERS_URL,
  DRIVER_LOGIN,
  DRIVER_LOGIN_URL,
  DRIVER_ORDERS_GET_BY_ID,
  DRIVER_ORDERS_GET_BY_ID_URL,
} from "../types/driver";

export function ordersGetAllPendingOffers(params) {
  if (!params) params = "";
  else params = "/" + params;
  return {
    type: ORDERS_GET_ALL_PENDING_OFFERS,
    payload: {
      request: {
        url: `${ORDERS_GET_ALL_PENDING_OFFERS_URL}${params}`,
      },
    },
  };
}

export function ordersGetPendingOfferDetail(offerId) {
  return {
    type: ORDERS_GET_PENDING_OFFER_DETAIL,
    payload: {
      request: {
        url: `${ORDERS_GET_PENDING_OFFER_DETAIL_URL}/${offerId}`,
      },
    },
  };
}

export function ordersAssignGroupDriver(model) {
  return {
    type: ORDERS_ASSIGN_GROUP_DRIVER,
    payload: {
      request: {
        method: "POST",
        url: ORDERS_ASSIGN_GROUP_DRIVER_URL,
        data: model,
      },
    },
  };
}

export function driverOrdersGetAllMyOrders(pageNumber = 0) {
  return {
    type: DRIVER_ORDERS_GET_ALL_MY_ORDERS,
    payload: {
      request: {
        method: "GET",
        url: `${DRIVER_ORDERS_GET_ALL_MY_ORDERS_URL}?Page=${pageNumber}`,
      },
    },
  };
}

export function driverLogin(userModel) {
  return {
    type: DRIVER_LOGIN,
    payload: {
      request: {
        method: "POST",
        url: DRIVER_LOGIN_URL,
        data: userModel,
      },
    },
  };
}
export function driverOrdersGetById(orderId) {
  return {
    type: DRIVER_ORDERS_GET_BY_ID,
    payload: {
      request: {
        url: `${DRIVER_ORDERS_GET_BY_ID_URL}/${orderId}`,
      },
    },
  };
}
