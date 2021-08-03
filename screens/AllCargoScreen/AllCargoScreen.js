import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import myData from "../../data/FakeData";
import COLORS from "../../constans/colors";

import { ListItem, Avatar, Badge } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Layout from "../../components/Layout";
import styles from "./styles";
const AllCargoScreen = () => {
  return (
    <Layout isBackIcon title="Tüm Kargolar">
      <FlatList
        keyExtractor={(item, index) => index.toString()}
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

export default AllCargoScreen;
