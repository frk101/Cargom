import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";
const { width } = Dimensions.get("screen");
export default StyleSheet.create({
  container: { flex: 1 },

  containerAvoiddingView: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginTop: 50,
  },
  textTitle: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 16,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cellView: {
    paddingVertical: 25,
    width: 70,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 70,
  },
  cellText: {
    textAlign: "center",
    fontSize: 16,
  },
  back: { marginTop: 40, marginLeft: 20 },
  backBtn: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  headerSubTitle: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 10,
  },
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
  btnGonder: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    padding: 15,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  viewPhoneCodes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  inputPhoneCode: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    // marginHorizontal: 3,
    textAlign: "center",
    color: COLORS.text,
    fontWeight: "bold",
    // fontSize: 18,
    // marginTop: 50,
    // padding: 20,
    borderRadius: width / 8,
    width: width / 8,
    height: width / 8,
  },
});
