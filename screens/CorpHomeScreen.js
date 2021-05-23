import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
// import { Avatar } from "react-native-paper";
import { Avatar } from "react-native-elements";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import COLORS from "../constans/colors";
import { FlatGrid } from "react-native-super-grid";

const CorpHomeScreen = () => {
  const [items, setItems] = useState([
    {
      code: "#F1FCFF",
      name: "Toplam Araç Bilgisi",
      subName: "124 Adet",
      img: require("../assets/car.png"),
    },
    {
      code: "#F1F5FF",
      name: "Haftalık, Aylık Ödeme Bilgisi",
      subName: "1.247 ₺",
      img: require("../assets/card.png"),
    },
    {
      code: "#FCF1FF",
      name: "Bekleyen Teslimatlar",
      subName: "12 Adet",
      img: require("../assets/box.png"),
    },
    {
      code: "#FFF1F1",
      name: "Aktif Teslimatlar",
      subName: "5 Adet",
      img: require("../assets/checkedBox.png"),
    },
    {
      code: "#F6FFF1",
      name: "Haftalık, Aylık Teslim Edilen",
      subName: "128 Adet",
      img: require("../assets/calendar.png"),
    },
  ]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.opacitys}>
          <Image
            source={require("../assets/menu.png")}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacitys}>
          <Avatar rounded title="F.A" titleStyle={{ color: COLORS.gray }} />
        </TouchableOpacity>
      </View>
      <FlatGrid
        itemDimension={130}
        data={items}
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
    </SafeAreaView>
  );
};

export default CorpHomeScreen;

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
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
});
