import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  FlatList,
  TextInput,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Modalize } from "react-native-modalize";
import COLORS from "../../constans/colors";
import {
  ordersGetPendingOfferDetail,
  ordersAssignGroupDriver,
} from "../../business/actions/driver";
import { useSelector, useDispatch } from "react-redux";
import { Content } from "native-base";
import Layout from "../../components/Layout";
import styles from "./styles";

const AllCargoDetail = () => {
  const modalizeRef = useRef(null);

  const route = useRoute();
  const dispatch = useDispatch();
  const {
    ordersGetPendingOfferDetailResult,
    ordersAssignGroupDriverResult,
    driverGetAllShipperResult,
  } = useSelector((x) => x.driver);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  useEffect(() => {
    _handleGetOfferDetail();
    return () => {};
  }, [route.params.id]);

  const _handleGetOfferDetail = () => {
    dispatch(ordersGetPendingOfferDetail(route.params.id));
  };
  console.log(driverGetAllShipperResult);
  return (
    <Layout title="Teklif Detay" isBackIcon>
      <Content>
        <FlatList
          data={
            ordersGetPendingOfferDetailResult &&
            ordersGetPendingOfferDetailResult.data &&
            ordersGetPendingOfferDetailResult.data.steps
          }
          renderItem={({ item }) => <OffersDesciraption item={item} />}
        />
        <TouchableOpacity
          onPress={onOpen}
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text>Teklifi Kabul Et</Text>
        </TouchableOpacity>
      </Content>
      <Modalize
        ref={modalizeRef}
        modalStyle={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        modalHeight={500}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: COLORS.text,
              marginTop: 50,
            },
          ]}
        >
          Sürücü
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Lütfen Sürücü Seçiniz"
            placeholderTextColor="#666666"
          />
        </View>
        <Text
          style={[
            styles.text_footer,
            {
              color: COLORS.text,
              marginTop: 20,
            },
          ]}
        >
          Araç
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Lütfen Araç Seçiniz"
            placeholderTextColor="#666666"
          />
        </View>
      </Modalize>
    </Layout>
  );
};

export default AllCargoDetail;

const OffersDesciraption = ({ item }) => {
  return (
    <View>
      <Text>{item.step.address}</Text>
    </View>
  );
};
