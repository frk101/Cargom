import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
// import { Avatar } from "react-native-paper";
import { Avatar } from "react-native-elements";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import COLORS from "../../constans/colors";
import { FlatGrid } from "react-native-super-grid";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import styles from "./styles";
export const dummyData = [
  {
    code: "#FCF1FF",
    name: "Bekleyen Teslimatlar",
    subName: "12 Adet",
    img: require("../../assets/box.png"),
  },
  {
    code: "#FFF1F1",
    name: "Aktif Teslimatlar",
    subName: "5 Adet",
    img: require("../../assets/checkedBox.png"),
  },
  {
    code: "#F6FFF1",
    name: "Haftalık, Aylık Teslim Edilen",
    subName: "128 Adet",
    img: require("../../assets/calendar.png"),
  },
];
const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.opacitys}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Image
            source={require("../../assets/menu.png")}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Image
          source={require("../../assets/shipgeldiLogo-v03-1.png")}
          style={{ width: 140, resizeMode: "contain" }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <MaterialCommunityIcons
            name="account-circle"
            size={40}
            color={COLORS.gray}
            style={{ marginTop: 10 }}
          />
        </TouchableOpacity>
      </View>

      <FlatGrid
        itemDimension={130}
        data={dummyData}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Image
              source={item.img}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.subName}</Text>
          </View>
        )}
      />

      {/* </Content> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
