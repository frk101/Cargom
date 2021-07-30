import {
  ORDERS_GET_ALL_PENDING_OFFERS,
  ORDERS_GET_ALL_PENDING_OFFERS_URL,
  ORDERS_GET_PENDING_OFFER_DETAIL,
  ORDERS_GET_PENDING_OFFER_DETAIL_URL,
  ORDERS_ASSIGN_GROUP_DRIVER,
  ORDERS_ASSIGN_GROUP_DRIVER_URL,
} from "../types/driver";

export function ordersGetAllPendingOffers() {
  return {
    type: ORDERS_GET_ALL_PENDING_OFFERS,
    payload: {
      request: {
        url: ORDERS_GET_ALL_PENDING_OFFERS_URL,
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

export function ordersAssignGroupDriver() {
  return {
    type: ORDERS_ASSIGN_GROUP_DRIVER,
    payload: {
      request: {
        url: ORDERS_ASSIGN_GROUP_DRIVER_URL,
      },
    },
  };
}
