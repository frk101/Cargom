import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
import { Appbar, FAB } from "react-native-paper";
import Modal from "react-native-modal";
import { FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import myData from "../../data/FakeData";
import Layout from "../../components/Layout";
import styles from "./styles";
import PopupButton from "../../components/Button/PopupButton";
import { Content } from "native-base";
import CreateDriver from "../../components/createDriver";
import { driverGetByShipper } from "../../business/actions/shipper";
const { width, height } = Dimensions.get("screen");
const DriverScreen = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const { driverGetAllShipperResult } = useSelector((x) => x.shipper);

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
        onPress={toggleModal}
      />

      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        style={{ margin: 0, padding: 0, justifyContent: "flex-end" }}
      >
        <CreateDriver setModalVisible={setModalVisible} />
      </Modal>
    </Layout>
  );
};

const RenderList = ({ item }) => {
  return (
    <View style={styles.listContainer}>
      <ListItem bottomDivider>
        <Image source={item.img} style={{ width: 40, height: 40 }} />
        <ListItem.Content>
          <ListItem.Title>{item.surucuAdi}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
};

export default DriverScreen;
