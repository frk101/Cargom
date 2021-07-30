import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  useNavigation,
  DrawerActions,
  useRoute,
} from "@react-navigation/native";
import { ordersGetPendingOfferDetail } from "../../business/actions/driver";
import { useSelector, useDispatch } from "react-redux";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { Feather, Fontisto, Ionicons } from "react-native-vector-icons";
import COLORS from "../../constans/colors";
import mapStyle from "../../MapStyle/style";
import PopupButton from "../../components/Button/PopupButton";
import styles from "./styles";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;

const AllCargoDetail = ({}) => {
  const route = useRoute();
  console.log(route.params.id);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { ordersGetPendingOfferDetailResult } = useSelector((x) => x.driver);

  useEffect(() => {
    _handleGetOfferDetail();
    return () => {};
  }, [route.params.id]);

  const _handleGetOfferDetail = () => {
    dispatch(ordersGetPendingOfferDetail(route.params.id));
  };
  console.log(ordersGetPendingOfferDetailResult);
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Text></Text>
    </View>
  );
};

export default AllCargoDetail;
