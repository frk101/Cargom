import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";
export default StyleSheet.create({
  btnKayit: {
    backgroundColor: COLORS.primary,
    width: "35%",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnGiris: {
    padding: 10,
    width: "35%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  txt: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  btnContainer: {
    bottom: 70,
    position: "absolute",
    width: "100%",
  },
  img: { width: "100%", height: "100%" },
  btnGonder: {
    backgroundColor: COLORS.primary,
    width: "90%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  btnGonder1: {
    backgroundColor: COLORS.primary,
    width: "90%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    height: 350,
    alignItems: "center",
    justifyContent: "center",
  },
  modalTxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: COLORS.text,
  },
});
