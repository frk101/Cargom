import React from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import COLORS from "../../constans/colors";
import { Container, Content } from "native-base";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import FormErrorText from "../../components/FormErrorText";
import { shipperRegisterBeginRequest } from "../../business/actions/shipper";
import { Notifier, NotifierComponents } from "react-native-notifier";
import { CheckBox } from "react-native-elements";


import styles from "./styles";

const RegisterScheme = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
  lastName: Yup.string()
    .min(1, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
  phone: Yup.string()
    .min(15, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
  // companyName: Yup.string()
  //   .min(1, "Boş geçilemez!")
  //   .max(250, "Hatalı giriş yaptınız!")
  //   .required("Boş geçilemez"),
});
const Kurumsal = () => {
  
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const _handleRegister = (values) => {
    
    values.phone = values.phone
      .replace("(", "")
      .replace(")", "")
      .replace("-", "")
      .replace(/\s/g, "")
      .trim();
    values.shipperType = 2;
    values.ipAddress = "127.0.0.1";
    values.taxNumber=parseFloat(values.taxNumber)
    dispatch(shipperRegisterBeginRequest(values)).then(
      ({ payload: { data } }) => {
        if (data.status) {
          console.log(data.status)
          navigation.navigate("OtpScreens", values);
        } else {
          let message = "Kayıt işlemi sırasında bir hata oluştu."
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
      }
    );
  };
  return (
    <Container>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.backBtn}>
            <Image
              source={require("../../assets/backicon.png")}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>Hesabınızı Oluşturun</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.headerSubTitle}>
              Zaten Hesabın var mı ?
              <Text style={{ color: COLORS.primary }}>Giriş Yap</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <Content>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              companyName: "",
              isTaxPlayer: false,
             taxOffice:"",
             taxNumber:""
            }}
            onSubmit={(values) => _handleRegister(values)}
            validationSchema={RegisterScheme}
          >
            {({
              handleChange,
              handleBlur,
              setFieldValue,
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
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                  />
                </View>
                
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
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                  />
                </View>
                
                {/* <Text
                  style={[
                    styles.text_footer,
                    {
                      color: COLORS.text,
                      marginTop: 35,
                    },
                  ]}
                >
                  Şirket Unvanı
                </Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Şirket Unvanınızı Giriniz"
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    style={[
                      styles.textInput,
                      {
                        color: COLORS.text,
                      },
                    ]}
                    onChangeText={handleChange("companyName")}
                    onBlur={handleBlur("companyName")}
                    value={values.companyName}
                  />
                </View>
                {errors.companyName && touched.companyName ? (
                  <FormErrorText>* {errors.companyName}</FormErrorText>
                ) : null} */}
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
                    style={styles.textInput}
                    type={"cel-phone"}
                    options={{
                      maskType: "BRL",
                      withDDD: true,
                      dddMask: "(999) 999 99-99 ",
                    }}
                    maxLength={15}
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                    value={values.phone}
                  />
                </View>
                
                 <View style={styles.checkedAction}>
                <CheckBox
                  title="Vergi Mükellefiyim"
                  checkedColor={COLORS.primary}
                  onPress={() =>
                    handleChange("isTaxPlayer", !values.isTaxPlayer, true)
                  }
                  checked={values.isTaxPlayer}
                 
                />
                </View>
                {!values.isTaxPlayer ? null : (
               <View>
                   <Text
                  style={[
                    styles.text_footer,
                    {
                      color: COLORS.text,
                      marginTop: 35,
                    },
                  ]}
                >
                  Şirket Unvanı
                </Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Şirket Unvanınızı Giriniz"
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    style={[
                      styles.textInput,
                      {
                        color: COLORS.text,
                      },
                    ]}
                    onChangeText={handleChange("companyName")}
                    onBlur={handleBlur("companyName")}
                    value={values.companyName}
                  />
                </View>
                
                 <Text
                  style={[
                    styles.text_footer,
                    {
                      color: COLORS.text,
                      marginTop: 35,
                    },
                  ]}
                >
                  Vergi Dairesi
                </Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Şirket Unvanınızı Giriniz"
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    style={[
                      styles.textInput,
                      {
                        color: COLORS.text,
                      },
                    ]}
                    onChangeText={handleChange("taxOffice")}
                    onBlur={handleBlur("taxOffice")}
                    value={values.taxOffice}
                  />
                </View>
               
                        <Text
                  style={[
                    styles.text_footer,
                    {
                      color: COLORS.text,
                      marginTop: 35,
                    },
                  ]}
                >
                  Vergi Numarası
                </Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Şirket Unvanınızı Giriniz"
                    placeholderTextColor="#666666"
                    keyboardType='number-pad'
                    style={[
                      styles.textInput,
                      {
                        color: COLORS.text,
                      },
                    ]}
                    onChangeText={handleChange("taxNumber")}
                    onBlur={handleBlur("taxNumber")}
                    value={values.taxNumber}
                  />
                </View>
              
              
               </View>
               )}
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.btnGonder}
                >
                  <Text style={styles.btnText}>Kayıt Ol</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default Kurumsal;
