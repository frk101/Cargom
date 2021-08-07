import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";
export default StyleSheet.create({
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
  listContainer1: {
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
  list: {
    width: "100%",
    backgroundColor: "#000",
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
  menu: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
});
