import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  Button,
} from "react-native";
import Layout from "../../components/Layout";
import { AntDesign } from "react-native-vector-icons";
import { Notifier, NotifierComponents } from "react-native-notifier";
import DriverScheme from "../../ValidationScheme/DriverScheme";
import { useSelector, useDispatch } from "react-redux";
import { TextInputMask } from "react-native-masked-text";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Content, Footer, FooterTab } from "native-base";
import { Formik } from "formik";
import { driverCraete } from "../../business/actions/shipper";
import { Menu, Portal } from "react-native-paper";
import COLORS from "../../constans/colors";
import moment from "moment";
import styles from "./styles";
import FormErrorText from "../../components/FormErrorText";

const CreateDriver = () => {
  const openMenu = () => setVisible(true);
  const [visible, setVisible] = useState(false);
  const [activeGender, setActiveGender] = useState(null);
  const closeMenu = () => setVisible(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("Doğum Tarihinizi Seçiniz");
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Erkek", value: true },
    { label: "Kadın", value: false },
  ]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    setText(fDate + "\n");
  };
  const _handleBankaSecimi = (items) => {
    setActiveGender(items);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const _handleRegister = (values) => {
    values.PhoneNumber = values.PhoneNumber.replace("(", "")
      .replace(")", "")
      .replace("-", "")
      .replace(/\s/g, "")
      .trim();
    values.Gender = value;
    values.Birthdate = date;
    dispatch(driverCraete(values)).then(({ payload: { data } }) => {
      if (data.status == true) {
        navigation.navigate("DriverScreen");
      } else {
        let message = "Kayıt işlemi sırasında bir hata oluştu.";
        if (data.message) {
          message += data.message;
        }
        Notifier.showNotification({
          title: "UYARI",
          description: message,
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: "error",
          },
        });
      }
    });
  };

  return (
    <Layout
      title="Sürücü Ekle"
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
        <Formik
          initialValues={{
            EmailAddress: "",
            PhoneNumber: "",
            Firstname: "",
            Lastname: "",
            IdentityNumber: "",
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
                    marginTop: 20,
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
                    marginTop: 20,
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
                    marginTop: 20,
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
                    marginTop: 20,
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
                    marginTop: 20,
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
                  maxLength={11}
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
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: COLORS.text,
                    marginTop: 20,
                  },
                ]}
              >
                Cinsiyet
              </Text>
              <View style={styles.actions}>
                <DropDownPicker
                  style={styles.drop}
                  placeholder="Cinsiyetinizi Seçiniz"
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
              </View>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: COLORS.text,
                    marginTop: 20,
                  },
                ]}
              >
                Doğum Tarihi
              </Text>
              <TouchableOpacity onPress={() => showMode()}>
                <View style={styles.actionss}>
                  <Text style={{ textAlign: "center" }}>{text}</Text>
                </View>
              </TouchableOpacity>
              {/* <Button
                title="Doğum Tarihinizi Giriniz"
                onPress={() => showMode()}
              /> */}
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  locale={"tr"}
                />
              )}
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

export default CreateDriver;
