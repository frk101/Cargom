import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
  headerWrapper: { marginHorizontal: 20, marginTop: 20 },
  headerTitle: { fontSize: 30, fontWeight: "bold", color: COLORS.text },
  headerSubTitle: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 10,
  },
  back: { marginTop: 40, marginLeft: 20 },
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
  action: {
    flexDirection: "row",
    marginTop: 5,

    borderColor: "#979797",
    padding: 13,
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
  }, checkedAction: {
    marginTop: 5,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
