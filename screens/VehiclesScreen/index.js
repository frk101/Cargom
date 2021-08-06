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
import { List } from "react-native-paper";
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
    <Layout title="Araçlar" isBackIcon>
      <View style={{ flex: 1 }}>
        {vehiclesGetByShipperResult.data == "" ? (
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            Sürücünüz Bulunmamaktadır
          </Text>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                tintColor={COLORS.primary}
                refreshing={vehiclesGetByShipperLoading}
                onRefresh={_getVehiclesList}
              />
            }
            keyExtractor={(item, index) => index.toString()}
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
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const navigation = useNavigation();

  return (
    <List.Section style={styles.listContainer}>
      <List.Accordion
        title={item.brand.brandName}
        titleStyle={{ color: COLORS.text, fontWeight: "bold", fontSize: 18 }}
        left={() => (
          <List.Icon
            icon={
              item.vehicle.isApproved
                ? "format-list-bulleted-square"
                : "hours-24"
            }
            color={item.vehicle.isApproved ? COLORS.text : COLORS.primary}
          />
        )}
      >
        <List.Item title={item.model.modelName} />
        <List.Item title={item.vehicle.desi} />
        <List.Item title={item.type.typeName} />
        <List.Item title={item.vehicle.plate} />
      </List.Accordion>
    </List.Section>
  );
};

export default index;
