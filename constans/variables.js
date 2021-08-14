import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isTest = __DEV__;

export const apiUrl =
  "https://mobileapi.shipgeldi.com";

export const axiosClient = {
  ["default"]: {
    client: axios.create({
      baseURL: apiUrl,
      responseType: "json",
    }),
  },
};
const requestHandler = async (request) => {
  // Token will be dynamic so we can use any app-specific way to always
  // fetch the new token before making the call
  try {
    const value = await AsyncStorage.getItem("@token");
    if (value !== null) {
      request.headers.Authorization = "Bearer " + value;
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }

  return request;
};
axiosClient.default.client.interceptors.request.use((request) =>
  requestHandler(request)
);
