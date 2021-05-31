import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Animated,
  Modal,
  Image,
} from "react-native";
import { Footer, FooterTab, Button } from "native-base";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather, Fontisto, Ionicons } from "react-native-vector-icons";
import COLORS from "../constans/colors";
import mapStyle from "../MapStyle/style";
import MapViewDirections from "react-native-maps-directions";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;

const StepCargo = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ width: width, height: height / 2 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: 37.0038013,
            longitude: 35.3340379,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01 * ASPECT_RATIO,
          }}
          customMapStyle={mapStyle}
        >
          <Marker
            coordinate={{
              latitude: 37.0038013,
              longitude: 35.3340379,
            }}
            title="Kargo"
          >
            <View>
              <Fontisto
                name="map-marker-alt"
                size={30}
                style={{ color: COLORS.primary }}
              />
            </View>
          </Marker>

          <Marker
            coordinate={{
              latitude: 37.0026353,
              longitude: 35.3279566,
            }}
            title="Sürücü"
          >
            <View style={styles.marker}>
              <Ionicons name="navigate" size={20} style={{ color: "#fff" }} />
            </View>
          </Marker>
          {/* <MapViewDirections
            mode="WALKING"
            strokeWidth={4}
            strokeColor="#2186B3"
            origin={{
              latitude: 37.0038013,
              longitude: 35.3340379,
            }}
            destination={{
              latitude: 37.0026353,
              longitude: 35.3279566,
            }}
          /> */}
        </MapView>

        <TouchableOpacity
          style={{ marginTop: 40, marginLeft: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.opacitys}>
        <Text
          style={[
            styles.baslik,
            {
              color: COLORS.text,
              fontSize: 22,
              padding: 15,
              textDecorationLine: "underline",
            },
          ]}
        >
          Kütahya Adana
        </Text>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 10,
            },
          ]}
        >
          <Text style={styles.baslik1}>Alıcı Adı :</Text>
          <Text style={styles.title}>Faruk Albayrak</Text>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 10,
            },
          ]}
        >
          <Text style={styles.baslik1}>Alınacak Adres :</Text>
          <Text style={styles.title}>30</Text>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 10,
            },
          ]}
        >
          <Text style={styles.baslik1}>Ücret :</Text>
          <Text style={styles.title}>271 ₺</Text>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 10,
            },
          ]}
        >
          <Text style={styles.baslik1}>Sürücü Adı :</Text>
          <Text style={styles.title}>Kadir Güloğlu</Text>
        </View>
        <TouchableOpacity style={styles.btnGonder}>
          <Text style={styles.btnText}>Teslim Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StepCargo;

const styles = StyleSheet.create({
  pim: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  toolTip: {
    width: 220,
    backgroundColor: "#fff",
    position: "relative",
    flexDirection: "row",
    borderLeftWidth: 6,
    justifyContent: "space-between",
    padding: 10,
  },
  opacitys: {
    marginHorizontal: 10,

    backgroundColor: "#ffffff",
    padding: 10,
    marginTop: 10,
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
    borderRadius: 10,
  },
  baslik: {
    fontSize: 15,
    color: COLORS.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
  baslik1: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: "bold",
    textAlign: "left",
  },
  title: {
    fontSize: 15,
    color: COLORS.gray,
    fontWeight: "bold",
  },
  btnGonder: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
});
