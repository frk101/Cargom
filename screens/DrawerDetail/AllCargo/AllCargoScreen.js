import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import myData from "../../../data/FakeData";
import COLORS from "../../../constans/colors";
import { Appbar } from "react-native-paper";

import { ListItem, Avatar, Badge } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Layout from "../../../components/Layout";
const AllCargoScreen = () => {
  return (
    <Layout isBackIcon title="Tüm Kargolar">
      <FlatList
        data={myData}
        renderItem={({ item }) => <RenderList item={item} />}
      />
    </Layout>
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
        <FontAwesome5 name={item.icon} size={24} color={COLORS.gray} />
        <ListItem.Content>
          <ListItem.Title style={{ color: COLORS.text, fontWeight: "bold" }}>
            {item.name}
          </ListItem.Title>
          <ListItem.Title style={{ color: COLORS.text }}>
            {item.km}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={{ color: COLORS.primary, fontWeight: "bold" }}>
          {item.ücret}
        </ListItem.Title>
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
