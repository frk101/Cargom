import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";
export default StyleSheet.create({
  topNavBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    marginHorizontal: 20,
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
    marginHorizontal: 20,
  },
  nameWrapper: {
    marginLeft: 10,justifyContent:"center"
  },
  name: {
    fontWeight: "bold",
  },
  phone: {
    fontSize: 12,
    color: COLORS.gray,
  },
  docsWrapper: {
    marginTop: 40,
    marginHorizontal: 20,
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
    borderColor: COLORS.lightGray,
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
  durumContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 5,
  },
  durumColor: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 20,
    paddingHorizontal:5,
    // padding: 10,
    marginBottom: 5,
    borderRadius: 4,
  }, durum: {
    color: "#fff",

    textAlign: "center",
  },modalHeader: {
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
  },  listes: {
    backgroundColor: "#F1F2F4",
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
});
