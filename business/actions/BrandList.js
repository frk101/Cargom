import { BRAND_LIST, BRAND_LIST_URL } from "../types/BrandList";

export function brandList(brandListModel) {
  return {
    type: BRAND_LIST,
    payload: {
      request: {
        url: BRAND_LIST_URL,
        data: brandListModel,
      },
    },
  };
}
