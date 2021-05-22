import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
// import { Avatar } from "react-native-paper";
import { Avatar } from "react-native-elements";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import COLORS from "../constans/colors";
const CorpHomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 40,
          marginHorizontal: 15,
        }}
      >
        <TouchableOpacity
          style={{
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
            borderRadius: 20,
          }}
        >
          <Image
            source={require("../assets/Icon.png")}
            style={{ width: 25, height: 25 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#ffffff",
            padding: 5,
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
            borderRadius: 20,
          }}
        >
          {/* <MaterialCommunityIcons name="account" size={25} /> */}
          <Avatar rounded title="F.A" titleStyle={{ color: COLORS.gray }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CorpHomeScreen;

const styles = StyleSheet.create({});
