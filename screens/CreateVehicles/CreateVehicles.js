import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Layout from "../../components/Layout";
import { AntDesign } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";
import { vehicleBrandsGetAll } from "../../business/actions/general";
import { vehicleModelsgetByBrand } from "../../business/actions/general";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../../constans/colors";
import { Content } from "native-base";
import { Menu, Button } from "react-native-paper";

const CreateVehicles = ({ toggleModal, setModalVisible }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const { vehicleGetAllBrandsResult, vehicleGetAllBrandsLoading } = useSelector(
    (x) => x.general
  );

  useEffect(() => {
    _getVehiclesBrandList();
    return () => {};
  }, []);

  const _getVehiclesBrandList = async () => {
    dispatch(vehicleBrandsGetAll());
  };

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
    >
      <Content>
        <Text style={styles.text_footer}>Marka</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Araç Markanızı Seçiniz"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            style={[
              styles.textInput,
              {
                color: COLORS.text,
              },
            ]}
          />
        </View>
        <Text style={styles.text_footer}>Model</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Araç Modelinizi Seçiniz"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            style={[
              styles.textInput,
              {
                color: COLORS.text,
              },
            ]}
          />
        </View>
        <Text style={styles.text_footer}>Araç Türü</Text>
        <View style={styles.action}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity onPress={openMenu}>
                <Text>Araç Türünüzü Seçiniz</Text>
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />

            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
          <AntDesign name="down" />
        </View>
        <Text style={styles.text_footer}>Desi</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Araç Desi Bilgisini Giriniz"
            placeholderTextColor="#666666"
            keyboardType="decimal-pad"
            style={[
              styles.textInput,
              {
                color: COLORS.text,
              },
            ]}
          />
        </View>
        <TouchableOpacity style={styles.btnGonder}>
          <Text style={styles.btnText}>Ekle</Text>
        </TouchableOpacity>
      </Content>
    </Layout>
  );
};

export default CreateVehicles;

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 5,
    borderColor: "#979797",
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text_footer: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 20,
  },
  btnGonder: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    borderRadius: 10,
  },
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
});
