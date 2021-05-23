import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import myData from "../../../data/FakeData";
import COLORS from "../../../constans/colors";
import { Appbar } from "react-native-paper";

import { ListItem, Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native";

const AllCargoScreen = () => {
  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <Headers />
      <FlatList
        data={myData}
        renderItem={({ item }) => <RenderList item={item} />}
      />
    </View>
  );
};

const RenderList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() => navigation.navigate("AllCargoDetail", item)}
    >
      <ListItem bottomDivider>
        <Image source={item.icon} style={{ width: 40, height: 40 }} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
};

const Headers = () => {
  const navigation = useNavigation();
  const _goBack = () => navigation.goBack();
  return (
    <Appbar.Header style={{ backgroundColor: "#ffffff" }}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content
        title="Tüm Kargolar"
        titleStyle={{ color: COLORS.text, fontWeight: "500" }}
      />
    </Appbar.Header>
  );
};
export default AllCargoScreen;

const styles = StyleSheet.create({
  viewHeaderContainer: {
    backgroundColor: "#ffffff",

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
