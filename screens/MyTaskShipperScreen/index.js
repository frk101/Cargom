import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { shipperOrdersGetAllMyOrders } from "../../business/actions/driver";
const index = () => {
  const dispatch = useDispatch();

  const {
    driverOrdersGetAllMyOrdersResult,
    driverOrdersGetAllMyOrdersLoading,
  } = useSelector((x) => x.driver);

  useEffect(() => {
    _getShipperTask();
    return () => {};
  }, []);

  const _getShipperTask = async () => {
    dispatch(shipperOrdersGetAllMyOrders()).then((x) => {
      console.log(x);
    });
  };
  return (
    <View>
      <Text>Shipper</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
