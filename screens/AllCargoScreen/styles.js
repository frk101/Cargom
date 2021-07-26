import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
  pim: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  toolTip: {
    width: 220,
    backgroundColor: "#fff",
    position: "relative",
    flexDirection: "row",
    borderLeftWidth: 6,
    justifyContent: "space-between",
    padding: 10,
  },
  opacitys: {
    marginHorizontal: 10,

    backgroundColor: "#ffffff",
    padding: 10,
    marginTop: 10,
    // paddingBottom: 10,
    shadowColor: "#000",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 10,
  },
  baslik: {
    fontSize: 15,
    color: COLORS.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
  baslik1: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: "bold",
    textAlign: "right",
  },
  title: {
    fontSize: 15,
    color: COLORS.gray,
    fontWeight: "bold",
  },
  btnGonder: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
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
  card: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  txtContainer1: {
    flex: 1,
  },
  txtContainer2: { flex: 1.5 },
  listContainer: {
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
});
