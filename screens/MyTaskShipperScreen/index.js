import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { shipperOrdersGetAllMyOrders } from "../../business/actions/shipper";
import Layout from "../../components/Layout";
const index = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    shipperOrdersGetAllMyOrdersResult,
    shipperOrdersGetAllMyOrdersLoading,
  } = useSelector((x) => x.shipper);

  useEffect(() => {
    _getShipperTask();
    return () => {};
  }, []);

  const _getShipperTask = async () => {
    dispatch(shipperOrdersGetAllMyOrders());
  };

  return (
    <Layout title="Görevlerim" isBackIcon>
      <FlatList
        data={
          shipperOrdersGetAllMyOrdersResult &&
          shipperOrdersGetAllMyOrdersResult.data
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <RenderList item={item} />}
      />
    </Layout>
  );
};

const RenderList = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>{item.order.firstname}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyTaskShipperDetailScreen")}
      >
        <Text>Detayı Gör</Text>
      </TouchableOpacity>
    </View>
  );
};
export default index;

const styles = StyleSheet.create({});
