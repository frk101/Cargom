import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../constans/colors";
import { Container, Content } from "native-base";
import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fff", marginHorizontal: 20 }}
      >
        <View style={styles.topNavBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backBtn}>
              <Image
                source={require("../assets/backicon.png")}
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
            <Text style={styles.name}>Şevket Aydoğdu</Text>
            <Text style={styles.phone}>(555) 555 55 55</Text>
          </View>
        </View>
        <Content>
          <View style={styles.docsWrapper}>
            <Text style={styles.title}>Dosyalar</Text>

            {/* <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: "100%" }}
          > */}
            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>

            <View style={styles.docItemsUpload}>
              <View style={styles.notUploaded}>
                <Feather name="x-circle" size={24} color={COLORS.gray} />
                <Text style={styles.docText}>Sürücü Belgesi</Text>
              </View>
              <Feather name="upload" size={24} color={COLORS.gray} />
            </View>
            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/*  */}
            </View>
            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>

            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>

            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>

            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>
            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>
            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>
            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>
            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>
            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>
            <View style={styles.docItems}>
              <Feather name="check-circle" size={24} color={COLORS.primary} />
              <Text style={styles.docText}>Sürücü Belgesi</Text>
              {/* <Feather name="x-circle" size={24} color={COLORS.gray} /> */}
            </View>
            {/* </ScrollView> */}
          </View>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  topNavBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },

  backBtn: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  opacitys: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    shadowColor: "#000",
    borderRadius: 5,
  },
  nameWrapper: {
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
  },
  phone: {
    fontSize: 12,
    color: COLORS.gray,
  },
  docsWrapper: {
    marginTop: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: COLORS.text,
  },
  docItems: {
    flexDirection: "row",
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    alignItems: "center",
  },
  docText: {
    fontWeight: "500",
    fontWeight: "bold",
    color: COLORS.gray,
    marginLeft: 10,
  },
  docItemsUpload: {
    backgroundColor: COLORS.lightGray,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    padding: 15,
    borderRadius: 10,

    alignItems: "center",
  },
  notUploaded: {
    flexDirection: "row",
    alignItems: "center",
  },
});
