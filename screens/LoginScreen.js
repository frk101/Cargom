import React from "react";

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
import { useNavigation } from "@react-navigation/native";

import COLORS from "../constans/colors";
import { Container } from "native-base";

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
              source={require("../assets/backicon.png")}
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

        <ScrollView>
          <Text
            style={[
              styles.text_footer,
              {
                color: COLORS.text,
                marginTop: 35,
              },
            ]}
          >
            E-Mail*
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Email Adresinizi Giriniz"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: COLORS.text,
                },
              ]}
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
            Şifre*
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Şifrenizi Giriniz"
              placeholderTextColor="#666666"
              style={[styles.textInput]}
            />

            <Feather name="eye" color="grey" size={20} />
          </View>

          <View style={styles.forgetPassWrapper}>
            <TouchableOpacity style={styles.forgetButton}>
              <Text style={styles.forgetPass}>Şifremi Unuttum</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("DrawerScreen")}
            style={styles.btnGonder}
          >
            <Text style={styles.btnText}>Giriş Yap</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  headerSubTitle: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 10,
  },
  headerWrapper: { marginHorizontal: 20, marginTop: 20 },
  headerTitle: { fontSize: 30, fontWeight: "bold", color: COLORS.text },
  headerSubTitle: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 10,
  },
  back: { marginTop: 40, marginLeft: 20 },
  btnGonder: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 20,
  },
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
    borderRadius: 20,
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
