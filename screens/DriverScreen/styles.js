import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  viewHeaderContainer: {
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
  listContainer: {
    padding: 10,
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.primary,
  },
  card: {
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  listes: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  baslik: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 15,
  },
  title: {
    color: COLORS.text,
    fontWeight: "400",
    fontSize: 15,
  },
  documents: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    marginLeft: 5,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginBottom: 20,
  },
  view: {
    margin: 0,
    justifyContent: "flex-end",
  },
  docView: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  docItems: {
    flexDirection: "row",
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    alignItems: "center",
    marginHorizontal: 10,
  },
  docText: {
    fontWeight: "500",
    fontWeight: "bold",
    color: COLORS.gray,
    marginLeft: 10,
  },
  docItemsUpload: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGray,

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
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 60,
    marginHorizontal: 30,
  },
  modaltxtContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  modaltxt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalRds: {
    flex: 1,
    backgroundColor: "#F1F2F4",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
