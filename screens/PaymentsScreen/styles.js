import COLORS from "../../constans/colors";
import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height * 0.6;
const CARD_WIDTH = width - 60;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default StyleSheet.create({
    leftButton:{
        marginHorizontal:10
    },
    leftText:{
        fontWeight: 'bold',
        fontSize:20
    }
});
