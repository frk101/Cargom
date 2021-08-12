import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { Title, Caption, Drawer } from "react-native-paper";
import COLORS from "../../constans/colors";
import { useSelector } from "react-redux";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import {
  Octicons,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
  FontAwesome5,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-elements";
const { height, width } = Dimensions.get("screen");
export function DrawerContent(props) {
  const navigation = useNavigation();
  const { shipperLoginResult } = useSelector((x) => x.shipper);
  const { driverLoginResult } = useSelector((x) => x.driver);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.drawerAccount}>
              <View style={styles.opacitys}>
                <MaterialCommunityIcons
                  name="account-circle"
                  size={30}
                  color={COLORS.gray}
                />
              </View>
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>
                  {shipperLoginResult &&
                    shipperLoginResult.data &&
                    shipperLoginResult.data.shipper &&
                    shipperLoginResult.data.shipper.companyName}
                </Title>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ProfileScreen")}
                >
                  <Caption style={styles.caption}>Profili Düzenle</Caption>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Divider style={{ marginVertical: 20 }} />

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5 name="home" color={color} size={size} />
              )}
              label="Anasayfa"
              labelStyle={styles.labels}
              onPress={() => navigation.navigate("CorpHomeScreen")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome
                  name="drivers-license-o"
                  color={color}
                  size={size}
                />
              )}
              label="Sürücüler"
              labelStyle={styles.labels}
              onPress={() => navigation.navigate("DriverScreen")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="car-multiple"
                  color={color}
                  size={size}
                />
              )}
              label="Araçlar"
              labelStyle={styles.labels}
              onPress={() => navigation.navigate("VehiclesScreen")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="tags" color={color} size={size} />
              )}
              label="Teklifler"
              labelStyle={styles.labels}
              onPress={() => navigation.navigate("OffersScreeen")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5 name="tasks" color={color} size={size} />
              )}
              label="Görevlerim"
              onPress={() => navigation.navigate("MyOffersScreeen")}
              labelStyle={styles.labels}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="package-variant" color={color} size={size} />
              )}
              label="Kargolarım"
              labelStyle={styles.labels}
              onPress={() => navigation.navigate("MyTaskScreen")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo name="wallet" color={color} size={size} />
              )}
              onPress={() => navigation.navigate("PaymentScreen")}
              label="Ödemeler"
              labelStyle={styles.labels}
            />
            <Divider />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="exit-to-app"
                  color={color}
                  size={size}
                />
              )}
              label="Çıkış Yap"
              labelStyle={{
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: -20,
              }}
              onPress={() => navigation.navigate("SplashScreen")}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

//  {shipperLoginResult &&
//             shipperLoginResult.data &&
//             shipperLoginResult.data.shipper &&
//             shipperLoginResult.data.shipper.shipperType == 2 ? () : null}
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
    marginLeft: -20,
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
  drawerAccount: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    marginLeft: 30,
  },
});
