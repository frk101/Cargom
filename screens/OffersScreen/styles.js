import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
  tabsWrapper: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    maxHeight: 48,
    marginHorizontal: 20,
  },
  aktifTabStyle: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginRight: 8,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  aktifTabText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  pasifTabStyle: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    marginLeft: 8,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  pasifTabText: {
    color: COLORS.gray,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  leftButton: {
    width: "50%",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  leftText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textContainer: { alignItems: "center" },
  textColor: { fontSize: 15, fontWeight: "bold" },
  rightButton: {
    width: "50%",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 10,
  },
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
  listGrupContainer: {
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
  actionBtn: {
    flexDirection: "row",
    marginTop: 5,
backgroundColor:COLORS.primary,
    
    padding: 16,
   justifyContent:"center",
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  actionSearch: {
    
    marginTop: 5,
   
    borderBottomColor: "#979797",
    padding: 13,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    
    
  },
  actiond: {
    flexDirection: "row",
    marginTop: 5,

    padding: 13,
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
  durum: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  locationContainer: { flexDirection: "row", alignItems: "center" },
  address: { flexDirection: "row", alignItems: "center" },
  txt: { textAlign: "center", fontWeight: "bold" },
  durumContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    paddingBottom: 40,
    flexDirection: "column",
  },
  durumColor: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: -10,
    // width: 70,
    // height: 20,
    padding: 10,
    marginBottom: 5,
    borderRadius: 4,
    // backgroundColor: "red",
  },
  price: {
    fontSize: 20,
    marginTop: 10,
    color: COLORS.primary,
    fontWeight: "bold",
    textAlign: "right",
  },
});
