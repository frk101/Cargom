import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 5,
    borderColor: "#979797",
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  actions: {
    marginTop: 5,
    borderColor: "#979797",
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  text_footer: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 20,
  },
  btnGonder: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    borderRadius: 10,
  },
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
  btn: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  onay: { color: "#fff", fontWeight: "bold" },
});
