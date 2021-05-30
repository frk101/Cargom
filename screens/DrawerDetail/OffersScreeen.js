import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../../constans/colors";
import { Appbar } from "react-native-paper";

const OffersScreeen = () => {
  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <Headers />
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
        title="Teklifler"
        titleStyle={{ color: COLORS.text, fontWeight: "500" }}
      />
    </Appbar.Header>
  );
};

export default OffersScreeen;

const styles = StyleSheet.create({});
