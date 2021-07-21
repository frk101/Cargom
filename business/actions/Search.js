import { ADDRESS_SEARCH, ADDRESS_SEARCH_URL } from "../types/Search";

export function addressSearch(addressSearchModel) {
  return {
    type: ADDRESS_SEARCH,
    payload: {
      request: {
        url: ADDRESS_SEARCH_URL,
        data: addressSearchModel,
      },
    },
  };
}
