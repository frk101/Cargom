import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
import { Appbar } from "react-native-paper";
import { FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import myData from "../../data/FakeData";
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
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <Headers />
      <View style={{ flex: 1 }}>
        <FlatList
          data={myData}
          renderItem={({ item }) => <RenderList item={item} />}
        />
      </View>
    </View>
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

const Headers = () => {
  const navigation = useNavigation();
  const _goBack = () => navigation.goBack();
  return (
    <Appbar.Header style={{ backgroundColor: "#ffffff" }}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content
        title="Sürücüler"
        titleStyle={{ color: COLORS.text, fontWeight: "500" }}
      />
    </Appbar.Header>
  );
};
export default DriverScreen;

const styles = StyleSheet.create({
  viewHeaderContainer: {
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
});
