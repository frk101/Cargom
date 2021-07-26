import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
import { Appbar } from "react-native-paper";
import { FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import myData from "../../data/FakeData";
import Layout from "../../components/Layout";
import styles from "./styles";
// export const datas = [
//   {
//     key: "1",
//     name: "Amy Farha",
//     icon: require("../../assets/Oval.png"),
//     subtitle: "Vice President",
//   },
//   {
//     key: "2",
//     name: "Chris Jackson",
//     icon: require("../../assets/Oval.png"),
//     subtitle: "Vice Chairman",
//   },
//   {
//     key: "3",
//     name: "Chris Jackson",
//     icon: require("../../assets/Oval.png"),
//     subtitle: "Vice Chairman",
//   },
//   {
//     key: "4",
//     name: "Chris Jackson",
//     icon: require("../../assets/Oval.png"),
//     subtitle: "Vice Chairman",
//   },
//   {
//     key: "5",
//     name: "Chris Jackson",
//     icon: require("../../assets/Oval.png"),
//     subtitle: "Vice Chairman",
//   },
//   {
//     key: "6",
//     name: "Chris Jackson",
//     icon: require("../../assets/Oval.png"),
//     subtitle: "Vice Chairman",
//   },
//   {
//     key: "7",
//     name: "Chris Jackson",
//     icon: require("../../assets/Oval.png"),
//     subtitle: "Vice Chairman",
//   },
// ];
const DriverScreen = () => {
  return (
    <Layout isBackIcon title="Sürücüler">
      {/* <Headers /> */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={myData}
          renderItem={({ item }) => <RenderList item={item} />}
        />
      </View>
    </Layout>
  );
};

const RenderList = ({ item }) => {
  return (
    <View style={styles.listContainer}>
      <ListItem bottomDivider>
        <Image source={item.img} style={{ width: 40, height: 40 }} />
        <ListItem.Content>
          <ListItem.Title>{item.surucuAdi}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
};

export default DriverScreen;