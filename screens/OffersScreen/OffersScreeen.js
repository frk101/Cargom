import React, { useState, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  Modal,
  RefreshControl,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
import { ListItem } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { Container, Content, Footer, FooterTab, Button } from "native-base";

import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "react-native-vector-icons";
import { ordersGetAllPendingOffers } from "../../business/actions/driver";
import Layout from "../../components/Layout";
import Filter from "../../components/Filter";
import styles from "./styles";
const OffersScreeen = () => {
  const dispatch = useDispatch();
  const _goBack = () => navigation.goBack();
  const [openModal, setOpenModal] = useState(false);
  const [aktifKey, setAktifKey] = useState(null);

  const PressData = (val) => {
    setAktifKey(val);
  };
  const navigation = useNavigation();
  const { ordersGetAllPendingOffersResult, ordersGetAllPendingOffersLoading } =
    useSelector((x) => x.driver);

  useEffect(() => {
    _getOfferList();

    return () => {};
  }, []);

  const _getOfferList = async () => {
    dispatch(ordersGetAllPendingOffers());
  };

  return (
    <Layout
      title="Teklifler"
      isBackIcon
      right={<LayoutRight1 setOpenModal={setOpenModal} />}
    >
      <FlatList
        refreshControl={
          <RefreshControl
            tintColor={COLORS.primary}
            refreshing={ordersGetAllPendingOffersLoading}
            onRefresh={_getOfferList}
          />
        }
        style={{ marginTop: 20 }}
        keyExtractor={(item, index) => index.toString()}
        data={ordersGetAllPendingOffersResult.data}
        renderItem={({ item }) => <GrupCargo item={item} />}
      />

      {/* {aktifKey == true ? (
          <FlatList
            style={{ marginTop: 20 }}
            data={ordersGetAllPendingOffersResult.data}
            renderItem={({ item }) => <GrupCargo item={item} />}
          />
        ) : (
          <FlatList
            style={{ marginTop: 20 }}
            data={myData}
            renderItem={({ item }) => <AllCargo item={item} />}
          />
        )} */}
      {/* </Content> */}

      <Modal visible={openModal} animationType="slide">
        <Filter setOpenModal={setOpenModal} />
      </Modal>
    </Layout>
  );
};

const GrupCargo = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.listGrupContainer}
      onPress={() =>
        navigation.navigate("OffersDetailScreen", { id: item.group.id })
      }
    >
      <ListItem bottomDivider>
        <View>
          <View style={styles.locationContainer}>
            <Ionicons name="ios-location" size={24} color={COLORS.primary} />
            <Text style={{ fontWeight: "bold" }}>
              {" "}
              Çıkış :{" "}
              <Text style={{ color: COLORS.gray }}>
                {item.group.startAddress}
              </Text>{" "}
            </Text>
          </View>
          <Ionicons
            name="ios-ellipsis-vertical-outline"
            size={24}
            color={COLORS.primary}
          />
          <View style={styles.address}>
            <Ionicons name="locate-outline" size={24} color={COLORS.primary} />
            <Text style={styles.txt}>
              {" "}
              Varış :{" "}
              <Text style={{ color: COLORS.gray }}>
                {" "}
                {item.group.endAddress}
              </Text>
            </Text>
          </View>
          <View style={[styles.address, { marginTop: 10, marginLeft: 5 }]}>
            <MaterialCommunityIcons name="highway" size={15} color="#404040" />
            <Text style={[styles.txt, { marginLeft: 5 }]}>
              <Text style={{ color: COLORS.gray, fontSize: 11 }}>
                {" "}
                {item.group.distance / 1000} KM
              </Text>
            </Text>
          </View>
        </View>
        <ListItem.Content>
          <Text></Text>
        </ListItem.Content>

        <View style={styles.durumContainer}>
          {item.group.isPriorityOffer == true ? (
            <View style={[styles.durumColor]}>
              <Text style={styles.durum}>
                <AntDesign name="star" size={18} /> Avantajlı
              </Text>
            </View>
          ) : null}

          <ListItem.Title style={styles.price}>
            {item.group.price} ₺
          </ListItem.Title>
        </View>
      </ListItem>
    </TouchableOpacity>
  );
};

const LayoutRight1 = ({ setOpenModal }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => setOpenModal(true)}>
      <FontAwesome name="filter" size={20} />
    </TouchableOpacity>
  );
};

export default OffersScreeen;
