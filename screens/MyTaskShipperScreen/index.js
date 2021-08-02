import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { shipperOrdersGetAllMyOrders } from "../../business/actions/shipper";
const index = () => {
  const dispatch = useDispatch();

  const { shipperOrdersGetAllMyOrdersResult, shipperOrdersGetAllMyOrdersLoading } = useSelector((x) => x.shipper);

  useEffect(() => {
    _getShipperTask();
    return () => {};
  }, []);

  const _getShipperTask = async () => {
    dispatch(shipperOrdersGetAllMyOrders());
  };

  return (
    <View>
      <Text>Shipper</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
