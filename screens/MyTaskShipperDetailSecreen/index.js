import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { shipperOrdersgetById } from "../../business/actions/shipper";
import Layout from "../../components/Layout";

const index = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { shipperOrdersgetByIdResult, shipperOrdersgetByIdLoading } =
    useSelector((x) => x.shipper);

  useEffect(() => {
    _getShipperTaskDetail();
    return () => {};
  }, []);

  const _getShipperTaskDetail = async () => {
    dispatch(shipperOrdersgetById());
  };

  return (
    <Layout title="Görev Detay" isBackIcon>
      <Text>Shipper Detail</Text>
    </Layout>
  );
};

export default index;

const styles = StyleSheet.create({});
