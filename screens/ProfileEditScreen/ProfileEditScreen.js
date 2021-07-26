import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import COLORS from "../../constans/colors";
import { TextInputMask } from "react-native-masked-text";
import { Container, Content } from "native-base";
import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";
import PopupButton from "../../components/Button/PopupButton";
import styles from "./styles";

const ProfileEditScreen = () => {
  const navigation = useNavigation();
  const { shipperLoginResult } = useSelector((x) => x.shipper);
  return (
    <Container>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fff", marginHorizontal: 20 }}
      >
        <View style={styles.topNavBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backBtn}>
              <Image
                source={require("../../assets/backicon.png")}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", color: COLORS.text }}
          >
            Profili Düzenle
          </Text>
        </View>

        <Content>
          <View style={styles.profile}>
            <MaterialCommunityIcons
              name="account-circle"
              size={60}
              color={COLORS.gray}
            />
            <Text
              style={[
                styles.text_footer,
                {
                  color: COLORS.text,
                  marginTop: 5,
                },
              ]}
            >
              Profil Fotoğrafı
            </Text>
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
            Ad
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholderTextColor="#666666"
              keyboardType="email-address"
              value={
                shipperLoginResult &&
                shipperLoginResult.data &&
                shipperLoginResult.data.shipper &&
                shipperLoginResult.data.shipper.companyName
              }
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
                marginTop: 10,
              },
            ]}
          >
            Telefon Numarası
          </Text>
          <View style={styles.action}>
            <TextInputMask
              placeholder="Telefon Numaranızı Giriniz"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: COLORS.text,
                },
              ]}
              type={"cel-phone"}
              options={{
                maskType: "BRL",
                withDDD: true,
                dddMask: "(999) 999 99-99 ",
              }}
              value={
                shipperLoginResult &&
                shipperLoginResult.data &&
                shipperLoginResult.data.shipper &&
                shipperLoginResult.data.shipper.phoneNumber
              }
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                color: COLORS.text,
                marginTop: 10,
              },
            ]}
          >
            E-Mail
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="faruk@gmail.com"
              placeholderTextColor="#666666"
              keyboardType="email-address"
              value={
                shipperLoginResult &&
                shipperLoginResult.data &&
                shipperLoginResult.data.shipper &&
                shipperLoginResult.data.shipper.email
              }
              style={[
                styles.textInput,
                {
                  color: COLORS.text,
                },
              ]}
            />
          </View>
          <PopupButton />
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default ProfileEditScreen;
