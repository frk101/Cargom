import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useNavigation, DrawerActions } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { Feather, Fontisto, Ionicons } from "react-native-vector-icons";
import COLORS from "../../constans/colors";
import mapStyle from "../../MapStyle/style";
import PopupButton from "../../components/Button/PopupButton";
import styles from "./styles";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;

const AllCargoDetail = ({ route }) => {
  const item = route.params;
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
          <Polyline
            coordinates={[
              { latitude: 37.0038013, longitude: 35.3340379 },
              { latitude: 37.0026353, longitude: 35.3279566 },
            ]}
            strokeColor={COLORS.primary}
            lineJoin="miter"
            strokeWidth={5}
            lineDashPattern={[13, 13]}
          />
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
          {item.name}
        </Text>
        <View style={styles.card}>
          <View style={styles.txtContainer1}>
            <Text style={styles.baslik1}>Alıcı Adı :</Text>
          </View>
          <View style={styles.txtContainer2}>
            <Text style={styles.title}> {item.aliciAdi}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.txtContainer1}>
            <Text style={styles.baslik1}>Alınacak Adres :</Text>
          </View>
          <View style={styles.txtContainer2}>
            <Text style={styles.title}> {item.alinacakAdres}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.txtContainer1}>
            <Text style={styles.baslik1}>Ücret :</Text>
          </View>
          <View style={styles.txtContainer2}>
            <Text style={styles.title}> {item.ücret}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.txtContainer1}>
            <Text style={styles.baslik1}>Sürücü Adı :</Text>
          </View>
          <View style={styles.txtContainer2}>
            <Text style={styles.title}> {item.surucuAdi}</Text>
          </View>
        </View>
        <PopupButton gorev />
      </View>
    </View>
  );
};

export default AllCargoDetail;
