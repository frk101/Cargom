import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { Title, Caption, Drawer } from "react-native-paper";
import COLORS from "../constans/colors";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar } from "react-native-elements";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("screen");
export function DrawerContent(props) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.opacitys}>
                <MaterialCommunityIcons
                  name="account-circle"
                  size={30}
                  color={COLORS.gray}
                />
                {/* <Avatar
                  rounded
                  title="A.L"
                  titleStyle={{ color: COLORS.gray }}
                /> */}
              </View>

              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Albayraklar Lojistik</Title>
                <Caption style={styles.caption}>Profili Düzenle</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              //   icon={({ color, size }) => (
              //     <Icon name="home-outline" color={color} size={size} />
              //   )}
              label="Sürücüler"
              labelStyle={styles.labels}
              onPress={() => navigation.navigate("DriverScreen")}
            />
            <DrawerItem
              //   icon={({ color, size }) => (
              //     <Icon name="account-outline" color={color} size={size} />
              //   )}
              label="Araçlar"
              labelStyle={styles.labels}
            />
            <DrawerItem
              //   icon={({ color, size }) => (
              //     <Icon name="bookmark-outline" color={color} size={size} />
              //   )}
              label="Bekleyen Kargolar"
              labelStyle={styles.labels}
            />
            <DrawerItem
              //   icon={({ color, size }) => (
              //     <Icon name="settings-outline" color={color} size={size} />
              //   )}
              label="Aktif Kargolar"
              labelStyle={styles.labels}
            />
            <DrawerItem
              //   icon={({ color, size }) => (
              //     <Icon name="account-check-outline" color={color} size={size} />
              //   )}
              label="Tüm Kargolar"
              labelStyle={styles.labels}
              onPress={() => navigation.navigate("AllCargoScreen")}
            />
            <DrawerItem
              //   icon={({ color, size }) => (
              //     <Icon name="account-check-outline" color={color} size={size} />
              //   )}
              label="Teslimat"
              labelStyle={styles.labels}
            />
            <DrawerItem
              //   icon={({ color, size }) => (
              //     <Icon name="account-check-outline" color={color} size={size} />
              //   )}
              label="Ödemeler"
              labelStyle={styles.labels}
            />
            <DrawerItem
              label="Çıkış Yap"
              labelStyle={{ fontSize: 15, fontWeight: "bold" }}
              onPress={() => navigation.navigate("SplashScreen")}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    marginTop: 30,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: COLORS.primary,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 30,
    marginLeft: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  labels: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  opacitys: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginTop: 0,
    // paddingBottom: 10,
    shadowColor: "#000",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 30,
  },
});
