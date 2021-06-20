import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";

import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../constans/colors";

import { Modalize } from "react-native-modalize";

const SplashhScreen = () => {
  const navigation = useNavigation();
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <ImageBackground
      source={require("../assets/SplashLogo.png")}
      resizeMode="cover"
      style={styles.img}
    >
      <View style={styles.btnContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity style={styles.btnKayit} onPress={onOpen}>
            <Text style={styles.txt}>Kayıt Ol</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnGiris}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.txt}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modalize ref={modalizeRef} snapPoint={350} modalHeight={350}>
        <View style={styles.modalContainer}>
          <Image
            source={require("../assets/shipgeldiLogo-v03-1.png")}
            style={{ width: 200, resizeMode: "cover", marginBottom: 20 }}
          />
          <Text style={styles.modalTxt}>
            KAYIT OLMAK İÇİN BİR{"\n "}SEÇENEĞİ SEÇİNİZ
          </Text>
          <TouchableOpacity
            onPress={onClose}
            onPressIn={() => {
              navigation.navigate("Bireysel");
            }}
            style={styles.btnGonder}
          >
            <Text style={styles.btnText}>BİREYSEL OLARAK KAYIT OL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGonder1}
            onPress={onClose}
            onPressIn={() => {
              navigation.navigate("Kurumsal");
            }}
          >
            <Text style={styles.btnText}>KURUMSAL OLARAK KAYIT OL</Text>
          </TouchableOpacity>
        </View>
      </Modalize>
    </ImageBackground>
  );
};

export default SplashhScreen;

const styles = StyleSheet.create({
  btnKayit: {
    backgroundColor: COLORS.primary,
    width: "35%",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnGiris: {
    padding: 10,
    width: "35%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  txt: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  btnContainer: {
    bottom: 70,
    position: "absolute",
    width: "100%",
  },
  img: { width: "100%", height: "100%" },
  btnGonder: {
    backgroundColor: COLORS.primary,
    width: "90%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  btnGonder1: {
    backgroundColor: COLORS.primary,
    width: "90%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
  },
  btnText: { color: "#ffffff", fontSize: 18, fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    height: 350,
    alignItems: "center",
    justifyContent: "center",
  },
  modalTxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: COLORS.text,
  },
});
