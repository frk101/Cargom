import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  RefreshControl,
} from "react-native";
import Layout from "../../components/Layout";
import { FAB } from "react-native-paper";
import COLORS from "../../constans/colors";
import { Content } from "native-base";
import { AntDesign } from "react-native-vector-icons";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { vehiclesGetByShipper } from "../../business/actions/shipper";
import { ListItem } from "react-native-elements";
import LoginScheme from "../../ValidationScheme/LoginScheme";
import { Formik } from "formik";
import FormErrorText from "../../components/FormErrorText";

import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const index = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { vehiclesGetByShipperResult, vehiclesGetByShipperLoading } =
    useSelector((x) => x.shipper);

  useEffect(() => {
    console.log(vehiclesGetByShipperResult);
    _getVehiclesList();
    return () => {};
  }, []);

  const _getVehiclesList = async () => {
    dispatch(vehiclesGetByShipper());
  };

  return (
    <Layout isBackIcon title="Araçlar">
      <View style={{ flex: 1 }}>
        {vehiclesGetByShipperResult.data == "" ? (
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            Sürücünüz Bulunmamaktadır
          </Text>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={vehiclesGetByShipperLoading}
                onRefresh={_getVehiclesList}
              />
            }
            data={vehiclesGetByShipperResult.data}
            renderItem={({ item }) => <RenderList item={item} />}
          />
        )}
      </View>
      <FAB
        style={styles.fab}
        medium
        icon="plus"
        color="#fff"
        onPress={() => navigation.navigate("CreateVehicles")}
      />
    </Layout>
  );
};
const RenderList = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.listContainer}
      // onPress={() => navigation.navigate("CreateDriver", item)}
    >
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
};

export default index;
