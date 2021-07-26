import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import COLORS from "../../constans/colors";
import { Container, Content } from "native-base";

import { MaterialCommunityIcons, AntDesign } from "react-native-vector-icons";
import styles from "./styles";

const ProfileScreen = () => {
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
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileEditScreen")}
          >
            <MaterialCommunityIcons
              name="account-edit"
              size={32}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", color: COLORS.text }}
          >
            Profil
          </Text>
        </View>
        <View style={styles.opacitys}>
          <MaterialCommunityIcons
            name="account-circle"
            size={48}
            color={COLORS.gray}
          />
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>
              {shipperLoginResult &&
                shipperLoginResult.data &&
                shipperLoginResult.data.shipper &&
                shipperLoginResult.data.shipper.companyName}
            </Text>
          </View>
        </View>
        <Content>
          <View style={styles.docsWrapper}>
            <Text style={styles.title}>Dokümanlar</Text>

            {/* <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: "100%" }}
          > 
            <View style={styles.docItems}>
              <AntDesign name="clouduploado" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              <Feather name="x-circle" size={24} color={COLORS.gray} />
            </View>
*/}
            <View style={styles.docItemsUpload}>
              <View style={styles.notUploaded}>
                <AntDesign name="clouduploado" size={24} color={COLORS.gray} />
                <Text style={styles.docText}>Sürücü Belgesi </Text>
              </View>
              {/* <Feather name="upload" size={24} color={COLORS.gray} /> */}
            </View>
            <View style={styles.docItems}>
              <AntDesign name="file1" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/*  */}
            </View>
            <View style={styles.docItems}>
              <AntDesign name="hourglass" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>

            <View style={[styles.docItems, { borderColor: "red" }]}>
              <AntDesign name="closecircleo" size={24} color="red" />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>
            <Text style={styles.error}>
              Döküman resmi kurumlarca doğrulanamadı.s
            </Text>

            {/* </ScrollView> */}
          </View>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default ProfileScreen;
