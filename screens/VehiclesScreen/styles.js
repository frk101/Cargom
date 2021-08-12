import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.primary,
  },
  action: {
    flexDirection: "row",
    marginTop: 3,

    borderColor: "#979797",
    padding: 12,
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
    marginVertical: 20,
    borderRadius: 10,
  },
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
  forgetButton: { height: 48, justifyContent: "center", alignItems: "center" },
  forgetPass: { color: COLORS.primary, fontWeight: "bold", fontSize: 15 },
  forgetPassWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    marginHorizontal: 20,
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
  card: {
    padding: 10,
  },
  view: {
    margin: 0,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: COLORS.text,
  },
  subtitle: {
    color: COLORS.gray,
    fontWeight: "500",
    marginLeft: 5,
  },
  subtitles: {
    color: COLORS.text,
    fontWeight: "bold",
    marginLeft: 5,
  },
  container: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  docView: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  documents: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    marginLeft: 5,
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
  modelNames: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  iconModel: { flexDirection: "row", alignItems: "center" },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 60,
    marginHorizontal: 30,
  },
  modalTxt: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  modalRds: {
    flex: 1,
    backgroundColor: "#F1F2F4",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
