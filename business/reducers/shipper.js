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
  SHIPPER_ORDERS_GET_ALL_MY_ORDERS,
  SHIPPER_ORDERS_GET_ALL_MY_ORDERS_FAIL,
  SHIPPER_ORDERS_GET_ALL_MY_ORDERS_SUCCESS,
  SHIPPER_ORDERS_GET_BY_ID,
  SHIPPER_ORDERS_GET_BY_ID_FAIL,
  SHIPPER_ORDERS_GET_BY_ID_SUCCESS,
  SHIPPER_ORDERS_PICKUP,
  SHIPPER_ORDERS_PICKUP_SUCCESS,
  SHIPPER_ORDERS_PICKUP_FAIL,
  SHIPPER_ORDERS_GET_ORDERS_ID_BY_QRCODE,
  SHIPPER_ORDERS_GET_ORDERS_ID_BY_QRCODE_SUCCESS,
  SHIPPER_ORDERS_GET_ORDERS_ID_BY_QRCODE_FAIL,
  SHIPPER_ORDERS_DELIVERY,
  SHIPPER_ORDERS_DELIVERY_SUCCESS,
  SHIPPER_ORDERS_DELIVERY_FAIL,
  SHIPPER_ORDERS_GET_MY_OFFERS,
  SHIPPER_ORDERS_GET_MY_OFFERS_SUCCESS,
  SHIPPER_ORDERS_GET_MY_OFFERS_FAIL,
  SHIPPER_ORDERS_GET_MY_OFFER_DETAIL,
  SHIPPER_ORDERS_GET_MY_OFFER_DETAIL_SUCCESS,
  SHIPPER_ORDERS_GET_MY_OFFER_DETAIL_FAIL,
  SHIPPER_MY_INVOICES_GET_BY_SHIPPER_ID,
  SHIPPER_MY_INVOICES_GET_BY_SHIPPER_ID_SUCCESS,
  SHIPPER_MY_INVOICES_GET_BY_SHIPPER_ID_FAIL,
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
  shipperOrdersGetAllMyOrdersLoading: false,
  shipperOrdersGetAllMyOrdersResult: null,
  shipperOrdersGetAllMyOrdersFail: false,
  shipperOrdersGetByIdLoading: false,
  shipperOrdersGetByIdResult: {},
  shipperOrdersGetByIdFail: false,
  shipperOrdersPickupLoading: false,
  shipperOrdersPickupResult: {},
  shipperOrdersPickupFail: false,
  shipperOrdersGetOrdersIdByQrCodeLoading: false,
  shipperOrdersGetOrdersIdByQrCodeResult: {},
  shipperOrdersGetOrdersIdByQrCodeResult: false,
  shipperOrdersDeliveryLoading: false,
  shipperOrdersDeliveryResult: {},
  shipperOrdersDeliveryFail: false,
  shipperOrdersGetMyOrdersLoading:false,
  shipperOrdersGetMyOrdersResult:{},
  shipperOrdersGetMyOrdersFail:false,
shipperMyInvoicesGetByShipperIdLoading:false,
shipperMyInvoicesGetByShipperIdResult:{},
shipperMyInvoicesGetByShipperIdFail:false,
  shipperOrdersGetMyOfferDetailLoading:false,
  shipperOrdersGetMyOfferDetailResult:{},
  shipperOrdersGetMyOfferDetailFail:false

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
        vehiclesGetByShipperLoading: true,
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

    case SHIPPER_ORDERS_GET_ALL_MY_ORDERS:
      return {
        ...state,
        shipperOrdersGetAllMyOrdersLoading: true,
        shipperOrdersGetAllMyOrdersResult:
          state.shipperOrdersGetAllMyOrdersResult,
        shipperOrdersGetAllMyOrdersFail: false,
      };
    case SHIPPER_ORDERS_GET_ALL_MY_ORDERS_SUCCESS:
      return {
        ...state,
        shipperOrdersGetAllMyOrdersLoading: false,
        shipperOrdersGetAllMyOrdersResult: action.payload.data,
        shipperOrdersGetAllMyOrdersFail: false,
      };
    case SHIPPER_ORDERS_GET_ALL_MY_ORDERS_FAIL:
      return {
        ...state,
        shipperOrdersGetAllMyOrdersLoading: false,
        shipperOrdersGetAllMyOrdersResult:
          state.shipperOrdersGetAllMyOrdersResult,
        shipperOrdersGetAllMyOrdersFail: true,
      };

    case SHIPPER_ORDERS_GET_BY_ID:
      return {
        ...state,
        shipperOrdersGetByIdLoading: true,
        shipperOrdersGetByIdResult: {},
        shipperOrdersGetByIdFail: false,
      };
    case SHIPPER_ORDERS_GET_BY_ID_SUCCESS:
      return {
        ...state,
        shipperOrdersGetByIdLoading: false,
        shipperOrdersGetByIdResult: action.payload.data,
        shipperOrdersGetByIdFail: false,
      };
    case SHIPPER_ORDERS_GET_BY_ID_FAIL:
      return {
        ...state,
        shipperOrdersGetByIdLoading: false,
        shipperOrdersGetByIdResult: {},
        shipperOrdersGetByIdFail: true,
      };
    /////
    case SHIPPER_ORDERS_PICKUP:
      return {
        ...state,
        shipperOrdersPickupLoading: true,
        shipperOrdersPickupResult: {},
        shipperOrdersPickupFail: false,
      };
    case SHIPPER_ORDERS_PICKUP_SUCCESS:
      return {
        ...state,
        shipperOrdersPickupLoading: false,
        shipperOrdersPickupResult: action.payload.data,
        shipperOrdersPickupFail: false,
      };
    case SHIPPER_ORDERS_PICKUP_FAIL:
      return {
        ...state,
        shipperOrdersPickupLoading: false,
        shipperOrdersPickupResult: {},
        shipperOrdersPickupFail: true,
      };

    case SHIPPER_ORDERS_GET_ORDERS_ID_BY_QRCODE:
      return {
        ...state,
        shipperOrdersGetOrdersIdByQrCodeLoading: true,
        shipperOrdersGetOrdersIdByQrCodeResult: {},
        shipperOrdersGetOrdersIdByQrCodeResult: false,
      };
    case SHIPPER_ORDERS_GET_ORDERS_ID_BY_QRCODE_SUCCESS:
      return {
        ...state,
        shipperOrdersGetOrdersIdByQrCodeLoading: false,
        shipperOrdersGetOrdersIdByQrCodeResult: action.payload.data,
        shipperOrdersGetOrdersIdByQrCodeResult: false,
      };
    case SHIPPER_ORDERS_GET_ORDERS_ID_BY_QRCODE_FAIL:
      return {
        ...state,
        shipperOrdersGetOrdersIdByQrCodeLoading: false,
        shipperOrdersGetOrdersIdByQrCodeResult: {},
        shipperOrdersGetOrdersIdByQrCodeResult: true,
      };

    case SHIPPER_ORDERS_DELIVERY:
      return {
        ...state,
        shipperOrdersDeliveryLoading: true,
        shipperOrdersDeliveryResult: {},
        shipperOrdersDeliveryFail: false,
      };
    case SHIPPER_ORDERS_DELIVERY_SUCCESS:
      return {
        ...state,
        shipperOrdersDeliveryLoading: false,
        shipperOrdersDeliveryResult: action.payload.data,
        shipperOrdersDeliveryFail: false,
      };
    case SHIPPER_ORDERS_DELIVERY_FAIL:
      return {
        ...state,
        shipperOrdersDeliveryLoading: false,
        shipperOrdersDeliveryResult: {},
        shipperOrdersDeliveryFail: true,
      };



      case SHIPPER_ORDERS_GET_MY_OFFERS:
      return {
        ...state,
        shipperOrdersGetMyOrdersLoading:true,
  shipperOrdersGetMyOrdersResult:{},
  shipperOrdersGetMyOrdersFail:false
      };
    case SHIPPER_ORDERS_GET_MY_OFFERS_SUCCESS:
      return {
        ...state,
        shipperOrdersGetMyOrdersLoading:false,
        shipperOrdersGetMyOrdersResult:action.payload.data,
        shipperOrdersGetMyOrdersFail:false
      };
    case SHIPPER_ORDERS_GET_MY_OFFERS_FAIL:
      return {
        ...state,
        shipperOrdersGetMyOrdersLoading:false,
        shipperOrdersGetMyOrdersResult:{},
        shipperOrdersGetMyOrdersFail:true
      };





      case SHIPPER_ORDERS_GET_MY_OFFER_DETAIL:
        return {
          ...state,
          shipperOrdersGetMyOfferDetailLoading:true,
          shipperOrdersGetMyOfferDetailResult:{},
          shipperOrdersGetMyOfferDetailFail:false
        };
      case SHIPPER_ORDERS_GET_MY_OFFER_DETAIL_SUCCESS:
        return {
          ...state,
          shipperOrdersGetMyOfferDetailLoading:false,
          shipperOrdersGetMyOfferDetailResult:action.payload.data,
          shipperOrdersGetMyOfferDetailFail:false
        };
      case SHIPPER_ORDERS_GET_MY_OFFER_DETAIL_FAIL:
        return {
          ...state,
          shipperOrdersGetMyOfferDetailLoading:false,
          shipperOrdersGetMyOfferDetailResult:{},
          shipperOrdersGetMyOfferDetailFail:true
        };




        case SHIPPER_MY_INVOICES_GET_BY_SHIPPER_ID:
        return {
          ...state,
          shipperMyInvoicesGetByShipperIdLoading:true,
          shipperMyInvoicesGetByShipperIdResult:{},
          shipperMyInvoicesGetByShipperIdFail:false,
        };
      case SHIPPER_MY_INVOICES_GET_BY_SHIPPER_ID_SUCCESS:
        return {
          ...state,
          shipperMyInvoicesGetByShipperIdLoading:false,
shipperMyInvoicesGetByShipperIdResult:action.payload.data,
shipperMyInvoicesGetByShipperIdFail:false,
        };
      case SHIPPER_MY_INVOICES_GET_BY_SHIPPER_ID_FAIL:
        return {
          ...state,
          shipperMyInvoicesGetByShipperIdLoading:false,
          shipperMyInvoicesGetByShipperIdResult:{},
          shipperMyInvoicesGetByShipperIdFail:true,
        };
    default:
      return { ...state };
  }
};
