import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
  listGrupContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    // paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  durum: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  locationContainer: { flexDirection: "row", alignItems: "center" },
  address: { flexDirection: "row", alignItems: "center" },
  txt: { textAlign: "center", fontWeight: "bold" },
  durumContainer: { justifyContent: "center", alignItems: "center" },
  durumColor: {
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 50,
    // padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  price: {
    color: COLORS.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
});
