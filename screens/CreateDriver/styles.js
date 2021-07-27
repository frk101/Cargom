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
  },
  actions: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  actionss: {
    flexDirection: "row",
    marginTop: 5,
    borderColor: "#979797",
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: COLORS.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  text_footer: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  backBtn: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
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
  drop: {
    borderColor: "#979797",
    borderWidth: 1,
    marginTop: 5,
  },
});
