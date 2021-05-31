import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
import { Appbar } from "react-native-paper";
import { ListItem } from "react-native-elements";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import myData from "../../data/FakeData";

import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";
const MyTaskScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <Headers />
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => navigation.navigate("StepCargo")}
      >
        <ListItem bottomDivider>
          <Feather name="alert-circle" size={24} color="red" />

          <ListItem.Content>
            <ListItem.Title style={{ color: COLORS.text, fontWeight: "bold" }}>
              Kütahya - Adana
            </ListItem.Title>
            <ListItem.Title style={{ color: COLORS.text }}>
              120 Km
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Title style={{ color: COLORS.primary, fontWeight: "bold" }}>
            540 ₺
          </ListItem.Title>
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listContainer1}
        onPress={() => navigation.navigate("StepCargo")}
      >
        <ListItem bottomDivider>
          <Feather name="check-circle" size={24} color="green" />

          <ListItem.Content>
            <ListItem.Title style={{ color: COLORS.text, fontWeight: "bold" }}>
              Kütahya - Adana
            </ListItem.Title>
            <ListItem.Title style={{ color: COLORS.text }}>
              120 Km
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Title style={{ color: COLORS.primary, fontWeight: "bold" }}>
            540 ₺
          </ListItem.Title>
        </ListItem>
      </TouchableOpacity>
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
        title="Görevlerim"
        titleStyle={{ color: COLORS.text, fontWeight: "500" }}
      />
    </Appbar.Header>
  );
};
export default MyTaskScreen;

const styles = StyleSheet.create({
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
  listContainer1: {
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
