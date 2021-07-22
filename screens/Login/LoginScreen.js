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
import { Feather, AntDesign } from "react-native-vector-icons/";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthContext } from "../../components/context";
import COLORS from "../../constans/colors";
import { Container, Content } from "native-base";
import { TextInputMask } from "react-native-masked-text";

const LoginScreen = () => {
  const navigation = useNavigation();

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
              keyboardType="email-address"
              style={[
                styles.textInput,
                {
                  color: COLORS.text,
                },
              ]}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("OtpScreens")}
            style={styles.btnGonder}
          >
            <Text style={styles.btnText}>Giriş Yap</Text>
          </TouchableOpacity>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  headerWrapper: { marginHorizontal: 20, marginTop: 20 },
  headerTitle: { fontSize: 30, fontWeight: "bold", color: COLORS.text },
  headerSubTitle: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 10,
  },
  back: { marginTop: 40, marginLeft: 20 },

  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
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
    marginVertical: 20,
    borderRadius: 10,
  },
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
  forgetButton: { height: 48, justifyContent: "center", alignItems: "center" },
  forgetPass: { color: COLORS.primary, fontWeight: "bold", fontSize: 15 },
  forgetPassWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    marginHorizontal: 20,
  },
});
