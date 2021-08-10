import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 15,
  },
  opacitys: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginTop: 0,
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
    borderRadius: 30,
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 170,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  itemName: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: "600",
    textAlign: "center",
  },
  itemCode: {
    fontWeight: "bold",
    fontSize: 18,
    color: COLORS.text,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  opacity: {
    width: 50,
    height: 50,
  },
  modalBottomImage: {
    width: 139,
    height: 145,
    resizeMode: "contain",
  },
  bottomModalTextContainer: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  bossText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bossName: {
    color: "#807272",
    fontSize: 12,
    marginBottom: 10,
  },
  popUpPolygon: {
    marginLeft: width / 4,
  },
  bossTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
