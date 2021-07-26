import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./Layout";
import { AntDesign } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";
import { vehiclesCreate } from "../business/actions/shipper";
import { useDispatch, useSelector } from "react-redux";

const createVehicles = ({ toggleModal, setModalVisible }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(vehiclesCreate()).then((x) => {
      console.log(x);
    });
    return () => {};
  }, []);
  return (
    <Layout
      title="Araç Ekle"
      s
      left={
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <AntDesign name="closecircleo" size={20} />
        </TouchableOpacity>
      }
    ></Layout>
  );
};

export default createVehicles;

const styles = StyleSheet.create({});
