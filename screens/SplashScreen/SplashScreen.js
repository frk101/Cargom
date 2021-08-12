import React, { useRef } from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

import COLORS from "../../constans/colors";
import { Modalize } from "react-native-modalize";
import styles from "./styles";
const { width, height } = Dimensions.get("window");
const SplashhScreen = () => {
  const navigation = useNavigation();
  const modalizeRef = useRef(null);
  const modalizeDriverRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };

  const onOpenDriver = () => {
    modalizeDriverRef.current?.open();
  };
  const onCloseDriver = () => {
    modalizeDriverRef.current?.close();
  };
  return (
    <ImageBackground
      source={require("../../assets/SplashLogo.png")}
      resizeMode="cover"
      style={styles.img}
    >
      <View style={styles.btnContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={styles.btnKayit}
            onPressIn={() => {
              navigation.navigate("Bireysel");
            }}
          >
            <Text style={styles.txt}>Kayıt Ol</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnGiris}
            onPressIn={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <Text style={styles.txt}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashhScreen;
