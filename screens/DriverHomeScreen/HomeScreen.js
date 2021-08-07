import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import styles from "./styles";
const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={styles.menu}>
        <Image
          source={require("../../assets/shipgeldiLogo-v03-1.png")}
          style={{ width: 140, resizeMode: "contain" }}
        />
      </View>
      <Divider />
    </SafeAreaView>
  );
};

export default HomeScreen;
