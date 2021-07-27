import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  RefreshControl,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
import { Appbar, FAB } from "react-native-paper";
import { FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import Layout from "../../components/Layout";
import styles from "./styles";
import { Fontisto } from "react-native-vector-icons";
import { driverGetByShipper } from "../../business/actions/shipper";
const { width, height } = Dimensions.get("screen");
const DriverScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
        onPress={() => navigation.navigate("CreateDriver")}
      />
    </Layout>
  );
};

const RenderList = ({ item }) => {
  console.log(item.driver);
  return (
    <View style={styles.listContainer}>
      <ListItem bottomDivider>
        {item.driver.gender == true ? (
          <Fontisto name="male" color={COLORS.gray} size={30} />
        ) : (
          <Fontisto name="female" color={COLORS.gray} size={30} />
        )}

        {/* <Image
          source={require("../../assets/Oval.png")}
          style={{ width: 40, height: 40 }}
        /> */}
        <ListItem.Content>
          <ListItem.Title>
            {item.driver.firstname} {item.driver.lastname}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
};

export default DriverScreen;
