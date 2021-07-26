import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";
export default StyleSheet.create({
  topNavBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },

  backBtn: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  opacitys: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    shadowColor: "#000",
    borderRadius: 5,
  },
  nameWrapper: {
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
  },
  phone: {
    fontSize: 12,
    color: COLORS.gray,
  },
  docsWrapper: {
    marginTop: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: COLORS.text,
  },
  docItems: {
    flexDirection: "row",
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    alignItems: "center",
  },
  docText: {
    fontWeight: "500",
    fontWeight: "bold",
    color: COLORS.gray,
    marginLeft: 10,
  },
  docItemsUpload: {
    backgroundColor: COLORS.lightGray,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    padding: 15,
    borderRadius: 10,

    alignItems: "center",
  },
  notUploaded: {
    flexDirection: "row",
    alignItems: "center",
  },
  error: {
    color: "red",
    fontSize: 12,
  },
});
