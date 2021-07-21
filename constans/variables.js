import axios from "axios";

export const isTest = __DEV__;

export const apiUrl = isTest
  ? "http://mobileapi.shipgeldi.com"
  : "http://mobileapi.shipgeldi.com";

export const axiosClient = {
  ["default"]: {
    client: axios.create({
      baseURL: apiUrl,
      responseType: "json",
    }),
  },
};
