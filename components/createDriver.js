import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Layout from "./Layout";
import { AntDesign } from "react-native-vector-icons";

import DriverScheme from "../ValidationScheme/DriverScheme";
import { useSelector, useDispatch } from "react-redux";
import { TextInputMask } from "react-native-masked-text";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { Switch, RadioButton } from "react-native-paper";

import { Notifier, NotifierComponents } from "react-native-notifier";
import { Content, Footer, FooterTab, Button } from "native-base";
import { Formik } from "formik";
import { driverCraete } from "../business/actions/shipper";
import COLORS from "../constans/colors";
import FormErrorText from "./FormErrorText";

const createDriver = ({ toggleModal, setModalVisible }) => {
  const onToggleSwitch = () => setErkek(!erkek);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const _handleRegister = (values) => {
    values.PhoneNumber = values.PhoneNumber.replace("(", "")
      .replace(")", "")
      .replace("-", "")
      .replace(/\s/g, "")
      .trim();

    dispatch(driverCraete(values)).then(({ payload: { data } }) => {
      console.log(data);
      if (data.status == true) {
        navigation.navigate(values);
      } else {
        let message = "Kayıt işlemi sırasında bir hata oluştu.";
        if (data.message) {
          message += data.message;
        }
        // Notifier.showNotification({
        //   title: "UYARI",
        //   description: message,
        //   Component: NotifierComponents.Alert,
        //   componentProps: {
        //     alertType: "error",
        //   },
        // });
        Alert.alert(
          message,
          "",
          [
            {
              text: "Vazgeç",
              onPress: () => setModalVisible(false),
            },
            { text: "Tekrar", onPress: () => console.log("OK Pressed") },
          ],
          { cancelable: false }
        );
      }
    });
  };

  return (
    <Layout
      title="Sürücü Ekle"
      left={
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <AntDesign name="closecircleo" size={20} />
        </TouchableOpacity>
      }
    >
      <Content>
        <Formik
          initialValues={{
            EmailAddress: "",
            PhoneNumber: "",
            Firstname: "",
            Lastname: "",
            IdentityNumber: "",
            Gender: null,
          }}
          validationSchema={DriverScheme}
          onSubmit={(values) => _handleRegister(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: COLORS.text,
                    marginTop: 35,
                  },
                ]}
              >
                E-mail
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="E-mail Adresinizi giriniz"
                  placeholderTextColor="#666666"
                  keyboardType="email-address"
                  style={[
                    styles.textInput,
                    {
                      color: COLORS.text,
                    },
                  ]}
                  onChangeText={handleChange("EmailAddress")}
                  onBlur={handleBlur("EmailAddress")}
                  value={values.EmailAddress}
                />
              </View>
              {errors.EmailAddress && touched.EmailAddress ? (
                <FormErrorText>* {errors.EmailAddress}</FormErrorText>
              ) : null}
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: COLORS.text,
                    marginTop: 35,
                  },
                ]}
              >
                Telefon Numarası
              </Text>
              <View style={styles.action}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
                    +90
                  </Text>
                </View>

                <TextInputMask
                  placeholder="Telefon Numaranızı Giriniz"
                  placeholderTextColor="#666666"
                  style={styles.textInput}
                  type={"cel-phone"}
                  options={{
                    maskType: "BRL",
                    withDDD: true,
                    dddMask: "(999) 999 99-99",
                  }}
                  maxLength={15}
                  onChangeText={handleChange("PhoneNumber")}
                  onBlur={handleBlur("PhoneNumber")}
                  value={values.PhoneNumber}
                />
              </View>
              {errors.PhoneNumber && touched.PhoneNumber ? (
                <FormErrorText>* {errors.PhoneNumber}</FormErrorText>
              ) : null}
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: COLORS.text,
                    marginTop: 35,
                  },
                ]}
              >
                Ad
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="Adınızı giriniz"
                  placeholderTextColor="#666666"
                  keyboardType="email-address"
                  style={[
                    styles.textInput,
                    {
                      color: COLORS.text,
                    },
                  ]}
                  onChangeText={handleChange("Firstname")}
                  onBlur={handleBlur("Firstname")}
                  value={values.Firstname}
                />
              </View>
              {errors.Firstname && touched.Firstname ? (
                <FormErrorText>* {errors.Firstname}</FormErrorText>
              ) : null}
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: COLORS.text,
                    marginTop: 35,
                  },
                ]}
              >
                Soyad
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="Soyadınızı giriniz"
                  placeholderTextColor="#666666"
                  keyboardType="email-address"
                  style={[
                    styles.textInput,
                    {
                      color: COLORS.text,
                    },
                  ]}
                  onChangeText={handleChange("Lastname")}
                  onBlur={handleBlur("Lastname")}
                  value={values.Lastname}
                />
              </View>
              {errors.Lastname && touched.Lastname ? (
                <FormErrorText>* {errors.Lastname}</FormErrorText>
              ) : null}
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: COLORS.text,
                    marginTop: 35,
                  },
                ]}
              >
                Tc
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="Tc Kimlik Numaranızı Giriniz"
                  placeholderTextColor="#666666"
                  keyboardType="phone-pad"
                  style={[
                    styles.textInput,
                    {
                      color: COLORS.text,
                    },
                  ]}
                  onChangeText={handleChange("IdentityNumber")}
                  onBlur={handleBlur("IdentityNumber")}
                  value={values.IdentityNumber}
                />
              </View>
              {errors.IdentityNumber && touched.IdentityNumber ? (
                <FormErrorText>* {errors.IdentityNumber}</FormErrorText>
              ) : null}

              <TouchableOpacity style={styles.btnGonder} onPress={handleSubmit}>
                <Text style={styles.btnText}>Ekle</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </Content>
    </Layout>
  );
};

export default createDriver;

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 5,

    borderColor: "#979797",
    padding: 13,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: COLORS.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  text_footer: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  backBtn: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
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
