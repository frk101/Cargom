import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
  Dimensions,
  RefreshControl,
  ScroolView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { shipperOrdersgetById } from "../../business/actions/shipper";
import { Container, Content } from "native-base";
import {
  MaterialCommunityIcons,
  Feather,
  Fontisto,
  Ionicons,
} from "react-native-vector-icons";
import { Modalize } from "react-native-modalize";
import Layout from "../../components/Layout";
import { Divider } from "react-native-paper";
import mapStyle from "../../MapStyle/style";
import COLORS from "../../constans/colors";

import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const MyTaskShipperDetailSecreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };

  const { shipperOrdersGetByIdResult, shipperOrdersGetByIdLoading } =
    useSelector((x) => x.shipper);
  useEffect(() => {
    _getShipperTaskDetail();
    return () => {};
  }, [route.params.orderDetail.orderID]);

  const _getShipperTaskDetail = async () => {
    dispatch(shipperOrdersgetById(route.params.orderDetail.orderID));
  };

  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;

  if (shipperOrdersGetByIdLoading) return <ActivityIndicator />;
  return (
    <Layout title="Görev Detay">
      {shipperOrdersGetByIdResult.data == undefined ? (
        <ActivityIndicator size="large" />
      ) : (
        <Container>
          <Content style={{ backgroundColor: "#F1F2F4" }}>
            <View style={styles.container}>
              <MaterialCommunityIcons name="tooltip-account" size={30} />
              <Text style={styles.txtBaslik}>Alıcı Bilgileri</Text>
            </View>
            <View style={styles.list}>
              <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.baslik}>Ad Soyad</Text>
                <Text style={styles.title}>
                  {" "}
                  {shipperOrdersGetByIdResult &&
                    shipperOrdersGetByIdResult.data.firtname}{" "}
                  {shipperOrdersGetByIdResult &&
                    shipperOrdersGetByIdResult.data.lastname}{" "}
                </Text>
                <Divider />
                <Text style={styles.baslik}>Cep Telefonu</Text>
                <Text style={styles.title}>
                  {shipperOrdersGetByIdResult &&
                    shipperOrdersGetByIdResult.data.phoneNumber}
                </Text>

                <Divider />
                <Text style={styles.baslik}>Adres</Text>
                <Text style={styles.title}>
                  {shipperOrdersGetByIdResult &&
                    shipperOrdersGetByIdResult.data.endAddress}
                </Text>
                <Divider />
              </View>
            </View>

            <View style={styles.container}>
              <MaterialCommunityIcons name="account-circle" size={30} />
              <Text style={styles.txtBaslik}>Gönderici Bilgileri</Text>
            </View>
            <View style={styles.list}>
              <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.baslik}>Şirket Ünvanı</Text>
                <Text style={styles.title}>
                  {shipperOrdersGetByIdResult &&
                    shipperOrdersGetByIdResult.data.sellerCompanyName}{" "}
                </Text>
                <Divider />

                <Text style={styles.baslik}>Adres</Text>
                <Text style={styles.title}>
                  {shipperOrdersGetByIdResult &&
                    shipperOrdersGetByIdResult.data.startAddress}{" "}
                </Text>
                <Divider />
              </View>
            </View>
          </Content>
          <Modalize
            ref={modalizeRef}
            alwaysOpen={height * 0.1}
            modalHeight={height * 0.7}
            modalStyle={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderWidth: 1,
              borderColor: COLORS.text,
            }}
            handlePosition="inside"
          >
            <View style={{ width: width, height: height, marginTop: 5 }}>
              <MapView
                mapPadding={{
                  left: 50,
                  right: 50,
                  bottom: 50,
                  top: 50,
                }}
                provider={PROVIDER_GOOGLE}
                style={StyleSheet.absoluteFillObject}
                initialRegion={{
                  latitude: parseFloat(
                    shipperOrdersGetByIdResult &&
                      shipperOrdersGetByIdResult.data.startLat
                  ),
                  longitude: parseFloat(
                    shipperOrdersGetByIdResult &&
                      shipperOrdersGetByIdResult.data.startLng
                  ),
                  latitudeDelta: 0.2,
                  longitudeDelta: 0.01,
                }}
                // customMapStyle={mapStyle}
              >
                <Marker
                  coordinate={{
                    latitude: parseFloat(
                      shipperOrdersGetByIdResult &&
                        shipperOrdersGetByIdResult.data.startLat
                    ),
                    longitude: parseFloat(
                      shipperOrdersGetByIdResult &&
                        shipperOrdersGetByIdResult.data.startLng
                    ),
                  }}
                  title="Gönderici"
                >
                  <View>
                    <Ionicons
                      name="navigate"
                      size={30}
                      style={{ color: COLORS.primary }}
                    />
                  </View>
                </Marker>
                <Marker
                  coordinate={{
                    latitude: parseFloat(
                      shipperOrdersGetByIdResult &&
                        shipperOrdersGetByIdResult.data.endLat
                    ),
                    longitude: parseFloat(
                      shipperOrdersGetByIdResult &&
                        shipperOrdersGetByIdResult.data.endLng
                    ),
                  }}
                  title="Alıcı"
                >
                  <View style={styles.marker}>
                    <Fontisto
                      name="map-marker-alt"
                      size={30}
                      style={{ color: COLORS.primary }}
                    />
                  </View>
                </Marker>
                <Polyline
                  coordinates={[
                    {
                      latitude: parseFloat(
                        shipperOrdersGetByIdResult &&
                          shipperOrdersGetByIdResult.data.startLat
                      ),
                      longitude: parseFloat(
                        shipperOrdersGetByIdResult &&
                          shipperOrdersGetByIdResult.data.startLng
                      ),
                    },
                    {
                      latitude: parseFloat(
                        shipperOrdersGetByIdResult &&
                          shipperOrdersGetByIdResult.data.endLat
                      ),
                      longitude: parseFloat(
                        shipperOrdersGetByIdResult &&
                          shipperOrdersGetByIdResult.data.endLng
                      ),
                    },
                  ]}
                  strokeColor={COLORS.primary}
                  lineJoin="round"
                  strokeWidth={5}
                  lineDashPattern={[40, 40]}
                />
              </MapView>
            </View>
          </Modalize>
        </Container>
      )}
    </Layout>
  );
};

export default MyTaskShipperDetailSecreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
  },
  txtBaslik: {
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.text,
    marginLeft: 20,
  },
  list: {
    width: width - 40,
    marginTop: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
    paddingVertical: 20,
  },
  baslik: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
    color: COLORS.text,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    marginVertical: 8,
  },
});
