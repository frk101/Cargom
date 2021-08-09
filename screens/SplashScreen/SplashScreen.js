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
              navigation.navigate("Kurumsal");
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
      {/* <Modalize ref={modalizeRef} snapPoint={350} modalHeight={height * 0.5}>
        <View style={styles.modalContainer}>
          <Image
            source={require("../../assets/shipgeldiLogo-v03-1.png")}
            style={{ width: 200, resizeMode: "cover", marginVertical: 20 }}
          />
          <Text style={styles.modalTxt}>
          
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
      </Modalize> */}
      {/* <Modalize
        ref={modalizeDriverRef}
        snapPoint={350}
        modalHeight={height * 0.5}
      >
        <View style={styles.modalContainer}>
          <Image
            source={require("../../assets/shipgeldiLogo-v03-1.png")}
            style={{ width: 200, resizeMode: "cover", marginVertical: 20 }}
          />
          <Text style={styles.modalTxt}>
           
          </Text>
          <TouchableOpacity
            onPress={onClose}
            onPressIn={() => {
              navigation.navigate("DriverLogin");
            }}
            style={styles.btnGonder}
          >
            <Text style={styles.btnText}>Sürücü Olarak Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnGonder1}
            onPress={onClose}
            onPressIn={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <Text style={styles.btnText}>Taşıyıcı Olarak Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </Modalize> */}
    </ImageBackground>
  );
};

export default SplashhScreen;
