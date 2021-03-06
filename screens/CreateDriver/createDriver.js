import React, { useState, useEffect, useRef } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Layout from "../../components/Layout";
import { AntDesign } from "react-native-vector-icons";
import { Notifier, NotifierComponents } from "react-native-notifier";
import DriverScheme from "../../ValidationScheme/DriverScheme";
import { useDispatch } from "react-redux";
import { TextInputMask } from "react-native-masked-text";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView as Content } from "native-base";
import { Formik, useFormikContext } from "formik";
import { driverCraete } from "../../business/actions/shipper";
import COLORS from "../../constans/colors";
import moment from "moment";
import "moment/locale/tr";
moment.locale("tr");

import styles from "./styles";
import FormErrorText from "../../components/FormErrorText";
import { Menu } from "react-native-paper";

const FormikSubmitToken = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();

  const isFocused = useIsFocused();
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (route.params && route.params.driver) {
      setFieldValue("Id", route.params.driver.id);
      setFieldValue("EmailAddress", route.params.driver.emailAddress);
      setFieldValue("PhoneNumber", route.params.driver.phoneNumber);
      setFieldValue("Firstname", route.params.driver.firstname);
      setFieldValue("Lastname", route.params.driver.lastname);
      setFieldValue("IdentityNumber", route.params.driver.identityNumber);
      setFieldValue("Gender", route.params.driver.gender);
    } else {
      setFieldValue("Id", 0);
      setFieldValue("EmailAddress", "");
      setFieldValue("PhoneNumber", "");
      setFieldValue("Firstname", "");
      setFieldValue("Lastname", "");
      setFieldValue("IdentityNumber", "");
      setFieldValue("Gender", null);
    }
  }, [isFocused]);

  return null;
};

const CreateDriver = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const _handleRegister = (values) => {
    values.PhoneNumber = values.PhoneNumber.replace("(", "")
      .replace(")", "")
      .replace("-", "")
      .replace(/\s/g, "")
      .trim();
    values.Birthdate = moment(date).format("YYYY-MM-DD");
    dispatch(driverCraete(values)).then(({ payload: { data } }) => {
      if (data.status) {
        navigation.navigate("DriverScreen");
        Notifier.showNotification({
          title: "UYARI",
          description: "Yeni s??r??c?? ekleme i??lemi ba??ar??l??.",
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: "success",
          },
        });
      } else {
        let message = "Kay??t i??lemi s??ras??nda bir hata olu??tu.";
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
      title="S??r??c?? Ekle"
      left={
        <TouchableOpacity
          onPress={() => {
            navigation.setParams({});
            navigation.navigate("DriverScreen");
          }}
        >
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
            Gender: null,
            Id: 0,
          }}
          validationSchema={DriverScheme}
          onSubmit={(values) => _handleRegister(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
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
                E-posta
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="E-posta adresini giriniz"
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
                Telefon Numaras??
              </Text>
              <View style={styles.action}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
                    +90
                  </Text>
                </View>

                <TextInputMask
                  placeholder="Telefon numaras??n?? giriniz"
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
                  placeholder="Ad??n?? giriniz"
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
                  placeholder="Soyad??n?? giriniz"
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
                TC Kimlik Numaras??
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="TC kimlik numaras??n?? giriniz"
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
              <View style={styles.action}>
                <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  anchor={
                    <>
                      <TouchableOpacity
                        onPress={openMenu}
                        placeholder="Cinsiyet se??iniz"
                        placeholderTextColor="#666666"
                        style={[
                          styles.textInput,
                          {
                            color: COLORS.text,
                          },
                        ]}
                      >
                        <Text>
                          {values.Gender == null
                            ? "Cinsiyet se??iniz"
                            : values.Gender
                            ? "Erkek"
                            : "Kad??n"}
                        </Text>
                      </TouchableOpacity>
                    </>
                  }
                >
                  <Menu.Item
                    onPress={() => {
                      setFieldValue("Gender", true);
                      closeMenu();
                    }}
                    title="Erkek"
                  />
                  <Menu.Item
                    onPress={() => {
                      setFieldValue("Gender", false);
                      closeMenu();
                    }}
                    title="Kad??n"
                  />
                </Menu>
                {errors.Gender && touched.Gender ? (
                  <FormErrorText>* {errors.Gender}</FormErrorText>
                ) : null}
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
                Do??um Tarihi
              </Text>
              <TouchableOpacity onPress={showDatePicker}>
                <View style={styles.actionss}>
                  <Text style={{ textAlign: "center" }}>
                    {moment(date).format("DD MMMM YYYY")}
                  </Text>
                </View>
              </TouchableOpacity>

              {/* <DateTimePickerModal
                pickerContainerStyleIOS={{ backgroundColor: "#fff" }}
                textColor="black"
                isVisible={isDatePickerVisible}
                value={date}
                mode="date"
                // onChange={onChange}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                locale="tr-TR"
                cancelTextIOS="Vazge??"
                confirmTextIOS="Tamam"
              /> */}
              {/* <TouchableOpacity onPress={() => showMode()}>
                <View style={styles.actionss}>
                  <Text style={{ textAlign: "center" }}>{text}</Text>
                </View>
              </TouchableOpacity>
             
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
              )} */}
              <TouchableOpacity style={styles.btnGonder} onPress={handleSubmit}>
                <Text style={styles.btnText}>
                  {route.params && route.params.driver
                    ? "G??ncelle"
                    : !route.params
                    ? "Ekle"
                    : route.params.driver == null
                    ? "Ekle"
                    : null}
                </Text>
              </TouchableOpacity>
              <FormikSubmitToken />
            </>
          )}
        </Formik>
      </Content>
    </Layout>
  );
};

export default CreateDriver;
