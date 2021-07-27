import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../../components/Layout";
import { AntDesign } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";
import { vehicleBrandsGetAll } from "../../business/actions/general";
import { vehicleModelsgetByBrand } from "../../business/actions/general";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
const CreateVehicles = ({ toggleModal, setModalVisible }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { vehicleModelGetByBrandLoading, vehicleModelGetByBrandResult } =
    useSelector((x) => x.general);

  useEffect(() => {
    console.log(vehicleModelGetByBrandResult);
    _getVehiclesBrandList();
    return () => {};
  }, []);

  const _getVehiclesBrandList = async () => {
    dispatch(vehicleBrandsGetAll());
  };
  // const { vehicleGetAllBrandsResult, vehicleGetAllBrandsLoading } = useSelector(
  //   (x) => x.general
  // );

  // useEffect(() => {
  //   console.log(vehicleGetAllBrandsResult);
  //   _getVehiclesBrandList();
  //   return () => {};
  // }, []);

  // const _getVehiclesBrandList = async () => {
  //   dispatch(vehicleBrandsGetAll());
  // };

  return (
    <Layout
      title="Araç Ekle"
      left={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            style={{ paddingHorizontal: 10, color: "black" }}
            size={24}
            color={COLORS.themeColor}
          />
        </TouchableOpacity>
      }
    ></Layout>
  );
};

export default CreateVehicles;

const styles = StyleSheet.create({});
