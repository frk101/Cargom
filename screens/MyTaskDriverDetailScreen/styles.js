import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
  },
  txtBaslik: {
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.text,
    marginLeft: 20,
  },
  list: {
    width: width - 40,
    marginTop: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
    paddingVertical: 20,
  },
  baslik: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
    color: COLORS.text,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    marginVertical: 8,
  },
});
