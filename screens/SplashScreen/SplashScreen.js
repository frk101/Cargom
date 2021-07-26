import React, { useRef } from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
import { Modalize } from "react-native-modalize";
import styles from "./styles";

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
      source={require("../../assets/SplashLogo.png")}
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
            source={require("../../assets/shipgeldiLogo-v03-1.png")}
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
