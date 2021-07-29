import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  RefreshControl,
  ScrollView,
} from "react-native";
import Layout from "../../components/Layout";
import { FAB } from "react-native-paper";
import COLORS from "../../constans/colors";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { vehiclesGetByShipper } from "../../business/actions/shipper";
import { ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const index = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { vehiclesGetByShipperResult, vehiclesGetByShipperLoading } =
    useSelector((x) => x.shipper);

  useEffect(() => {
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
            keyExtractor={(item) => item.id}
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
    <TouchableOpacity style={styles.listContainer}>
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
