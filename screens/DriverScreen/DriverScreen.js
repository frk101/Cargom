import React, { useState, useEffect } from "react";
import { Text, View, RefreshControl, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
import { FAB } from "react-native-paper";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import Layout from "../../components/Layout";
import styles from "./styles";
import { Fontisto, AntDesign } from "react-native-vector-icons";
import { driverGetByShipper } from "../../business/actions/shipper";

const DriverScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { driverGetAllShipperResult, driverGetAllShipperLoading } = useSelector(
    (x) => x.shipper
  );

  useEffect(() => {
    _getDriverList();
    return () => {};
  }, []);

  const _getDriverList = async () => {
    dispatch(driverGetByShipper());
  };

  return (
    <Layout isBackIcon title="Sürücüler">
      <View style={{ flex: 1 }}>
        {driverGetAllShipperResult.data == "" ? (
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            Sürücünüz Bulunmamaktadır
          </Text>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={driverGetAllShipperLoading}
                onRefresh={_getDriverList}
              />
            }
            data={driverGetAllShipperResult.data}
            renderItem={({ item }) => <RenderList item={item} />}
          />
        )}
      </View>
      <FAB
        style={styles.fab}
        medium
        icon="plus"
        color="#fff"
        onPress={() => navigation.navigate("CreateDriver", { driver: null })}
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
        {item.driver.isApproved ? (
          item.driver.gender == true ? (
            <Fontisto name="male" color={COLORS.gray} size={30} />
          ) : (
            <Fontisto name="female" color={COLORS.gray} size={30} />
          )
        ) : (
          <AntDesign name="hourglass" size={24} color={COLORS.primary} />
        )}

        <ListItem.Content>
          <ListItem.Title>
            {item.driver.firstname} {item.driver.lastname}{" "}
            {/* {item.driver.isApproved ? "Onaylı" : "Onaysız"} */}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
};

export default DriverScreen;
