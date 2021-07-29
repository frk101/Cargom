import React, { useState } from "react";

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

import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import COLORS from "../../constans/colors";
import { Container, Content } from "native-base";
import { TextInputMask } from "react-native-masked-text";
import { Formik } from "formik";
import LoginScheme from "../../ValidationScheme/LoginScheme";
import { shipperLogin } from "../../business/actions/shipper";
import axios from "axios";
import { Notifier, NotifierComponents } from "react-native-notifier";
import FormErrorText from "../../components/FormErrorText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { Ionicons } from "react-native-vector-icons";

const LoginScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const _handleLogin = (values) => {
    dispatch(shipperLogin(values)).then(async ({ payload: { data } }) => {
      if (data.status) {
        try {
          await AsyncStorage.setItem("@token", data.data.token);
        } catch (e) {
          // saving error
        }
        navigation.navigate("MainScreen");
      } else {
        let message = "Giriş işlemi sırasında bir hata oluştu.";
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
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", color: COLORS.text }}
          >
            Tekrar Hoş Geldiniz
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.headerSubTitle}>
              Henüz Hesabınız Yok mu ?
              <Text style={{ color: COLORS.primary }}>Kayıt Ol</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <Content>
          <Formik
            initialValues={{
              email: __DEV__ ? "faruk@deneme.com" : "",
              password: __DEV__ ? "150169223" : "",
            }}
            onSubmit={(values) => _handleLogin(values)}
            validationSchema={LoginScheme}
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
                  Telefon Numarası veya E-mail
                </Text>
                <View style={styles.action}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
                      +90
                    </Text>
                  </View>
                  <TextInput
                    placeholder="Telefon Numaranızı Giriniz"
                    style={styles.textInput}
                    keyboardType="email-address"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />

                  {/* <TextInputMask
              placeholder="Telefon Numaranızı Giriniz"
              style={styles.textInput}
              type={"cel-phone"}
              options={{
                maskType: "BRL",
                withDDD: true,
                dddMask: "(999) 999 99-99 ",
              }}
              value={cell}
              onChangeText={(text) => setCell(text)}
            /> */}
                </View>
                {errors.email && touched.email ? (
                  <FormErrorText>* {errors.email}</FormErrorText>
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
                  Parola
                </Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Parolanızı giriniz"
                    placeholderTextColor="#666666"
                    secureTextEntry={secureTextEntry}
                    style={[
                      styles.textInput,
                      {
                        color: COLORS.text,
                      },
                    ]}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  {secureTextEntry == true ? (
                    <Ionicons
                      name="eye"
                      size={25}
                      color="#666666"
                      style={{ color: "#666666" }}
                      onPress={() => setSecureTextEntry(!secureTextEntry)}
                    />
                  ) : (
                    <Ionicons
                      size={25}
                      name="eye-off"
                      color="#666666"
                      style={{ color: "#666666" }}
                      onPress={() => setSecureTextEntry(!secureTextEntry)}
                    />
                  )}
                </View>
                {errors.password && touched.password ? (
                  <FormErrorText>* {errors.password}</FormErrorText>
                ) : null}
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.btnGonder}
                >
                  <Text style={styles.btnText}>Giriş Yap</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default LoginScreen;
