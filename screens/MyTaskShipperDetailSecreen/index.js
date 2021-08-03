import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { shipperOrdersgetById } from "../../business/actions/shipper";
import Layout from "../../components/Layout";

const MyTaskShipperDetailSecreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const { shipperOrdersGetByIdResult, shipperOrdersGetByIdLoading } =
    useSelector((x) => x.shipper);

  useEffect(() => {
    _getShipperTaskDetail();
    return () => {};
  }, [route.params.orderDetail.order.id]);

  const _getShipperTaskDetail = async () => {
    dispatch(shipperOrdersgetById(route.params.orderDetail.order.id));
  };

  if (shipperOrdersGetByIdLoading) return <ActivityIndicator />;
  return (
    <Layout title="Görev Detay" isBackIcon>
      <Text>{shipperOrdersGetByIdResult.data.city.cityName}</Text>
      <Text>{shipperOrdersGetByIdResult.data.district.districtName}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("BracodeScanner")}>
        <Text> Araca Yükle</Text>
      </TouchableOpacity>
      <FlatList
        data={shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data}
        renderItem={(item) => <RenderItem item={item} />}
      />
    </Layout>
  );
};
const RenderItem = ({ item }) => {
  console.log("sss", item);
  return <View style={{ borderWidth: 1, borderColor: "red" }}></View>;
};
export default MyTaskShipperDetailSecreen;

const styles = StyleSheet.create({});
