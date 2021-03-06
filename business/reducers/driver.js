import {
  ORDERS_GET_ALL_PENDING_OFFERS,
  ORDERS_GET_ALL_PENDING_OFFERS_SUCCESS,
  ORDERS_GET_ALL_PENDING_OFFERS_FAIL,
  ORDERS_GET_PENDING_OFFER_DETAIL,
  ORDERS_GET_PENDING_OFFER_DETAIL_SUCCESS,
  ORDERS_GET_PENDING_OFFER_FAIL,
  ORDERS_ASSIGN_GROUP_DRIVER,
  ORDERS_ASSIGN_GROUP_DRIVER_SUCCESS,
  ORDERS_ASSIGN_GROUP_DRIVER_FAIL,
  DRIVER_ORDERS_GET_ALL_MY_ORDERS,
  DRIVER_ORDERS_GET_ALL_MY_ORDERS_SUCCESS,
  DRIVER_ORDERS_GET_ALL_MY_ORDERS_FAIL,
  DRIVER_LOGIN,
  DRIVER_LOGIN_SUCCESS,
  DRIVER_LOGIN_FAIL,
  DRIVER_ORDERS_GET_BY_ID,
  DRIVER_ORDERS_GET_BY_ID_SUCCESS,
  DRIVER_ORDERS_GET_BY_ID_FAIL,
} from "../types/driver";

const INITIAL_STATE = {
  ordersGetAllPendingOffersLoading: false,
  ordersGetAllPendingOffersResult: {},
  ordersGetAllPendingOffersFail: false,

  ordersGetPendingOfferDetailLoading: false,
  ordersGetPendingOfferDetailResult: {},
  ordersGetPendingOfferDetailFail: false,

  ordersAssignGroupDriverLoading: false,
  ordersAssignGroupDriverResult: {},
  ordersAssignGroupDriverFail: false,

  driverOrdersGetAllMyOrdersLoading: false,
  driverOrdersGetAllMyOrdersResult: {},
  driverOrdersGetAllMyOrdersFail: false,

  driverLoginLoading: false,
  driverLoginResult: {},
  driverLoginFail: false,

  driverOrdersGetByIdLoading: false,
  driverOrdersGetByIdResult: {},
  driverOrdersGetByIdFail: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDERS_GET_ALL_PENDING_OFFERS:
      return {
        ...state,
        ordersGetAllPendingOffersLoading: true,
        ordersGetAllPendingOffersResult: {},
        ordersGetAllPendingOffersFail: false,
      };
    case ORDERS_GET_ALL_PENDING_OFFERS_SUCCESS:
      return {
        ...state,
        ordersGetAllPendingOffersLoading: false,
        ordersGetAllPendingOffersResult: action.payload.data,
        ordersGetAllPendingOffersFail: false,
      };
    case ORDERS_GET_ALL_PENDING_OFFERS_FAIL:
      return {
        ...state,
        ordersGetAllPendingOffersLoading: false,
        ordersGetAllPendingOffersResult: {},
        ordersGetAllPendingOffersFail: true,
      };
    ///
    case ORDERS_GET_PENDING_OFFER_DETAIL:
      return {
        ...state,
        ordersGetPendingOfferDetailLoading: true,
        ordersGetPendingOfferDetailResult: {},
        ordersGetPendingOfferDetailFail: false,
      };
    case ORDERS_GET_PENDING_OFFER_DETAIL_SUCCESS:
      return {
        ...state,
        ordersGetPendingOfferDetailLoading: false,
        ordersGetPendingOfferDetailResult: action.payload.data,
        ordersGetPendingOfferDetailFail: false,
      };
    case ORDERS_GET_PENDING_OFFER_FAIL:
      return {
        ...state,
        ordersGetPendingOfferDetailLoading: false,
        ordersGetPendingOfferDetailResult: {},
        ordersGetPendingOfferDetailFail: true,
      };
    //////
    case ORDERS_ASSIGN_GROUP_DRIVER:
      return {
        ...state,
        ordersAssignGroupDriverLoading: true,
        ordersAssignGroupDriverResult: {},
        ordersAssignGroupDriverFail: false,
      };
    case ORDERS_ASSIGN_GROUP_DRIVER_SUCCESS:
      return {
        ...state,
        ordersAssignGroupDriverLoading: false,
        ordersAssignGroupDriverResult: action.payload.data,
        ordersAssignGroupDriverFail: false,
      };
    case ORDERS_ASSIGN_GROUP_DRIVER_FAIL:
      return {
        ...state,
        ordersAssignGroupDriverLoading: false,
        ordersAssignGroupDriverResult: {},
        ordersAssignGroupDriverFail: true,
      };
    ////
    case DRIVER_ORDERS_GET_ALL_MY_ORDERS:
      return {
        ...state,
        driverOrdersGetAllMyOrdersLoading: true,
        driverOrdersGetAllMyOrdersResult: {},
        driverOrdersGetAllMyOrdersFail: false,
      };
    case DRIVER_ORDERS_GET_ALL_MY_ORDERS_SUCCESS:
      return {
        ...state,
        driverOrdersGetAllMyOrdersLoading: false,
        driverOrdersGetAllMyOrdersResult: action.payload.data,
        driverOrdersGetAllMyOrdersFail: false,
      };
    case DRIVER_ORDERS_GET_ALL_MY_ORDERS_FAIL:
      return {
        ...state,
        driverOrdersGetAllMyOrdersLoading: false,
        driverOrdersGetAllMyOrdersResult: {},
        driverOrdersGetAllMyOrdersFail: true,
      };

    case DRIVER_LOGIN:
      return {
        ...state,
        driverLoginLoading: true,
        driverLoginResult: {},
        driverLoginFail: false,
      };
    case DRIVER_LOGIN_SUCCESS:
      return {
        ...state,
        driverLoginLoading: false,
        driverLoginResult: action.payload.data,
        driverLoginFail: false,
      };
    case DRIVER_LOGIN_FAIL:
      return {
        ...state,
        driverLoginLoading: false,
        driverLoginResult: {},
        driverLoginFail: true,
      };

    case DRIVER_ORDERS_GET_BY_ID:
      return {
        ...state,
        driverOrdersGetByIdLoading: true,
        driverOrdersGetByIdResult: {},
        driverOrdersGetByIdFail: false,
      };
    case DRIVER_ORDERS_GET_BY_ID_SUCCESS:
      return {
        ...state,
        driverOrdersGetByIdLoading: false,
        driverOrdersGetByIdResult: action.payload.data,
        driverOrdersGetByIdFail: false,
      };
    case DRIVER_ORDERS_GET_BY_ID_FAIL:
      return {
        ...state,
        driverOrdersGetByIdLoading: false,
        driverOrdersGetByIdResult: {},
        driverOrdersGetByIdFail: true,
      };
    default:
      return { ...state };
  }
};
