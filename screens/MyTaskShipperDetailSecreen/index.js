import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, ActivityIndicator, FlatList, TouchableOpacity, View, Dimensions, RefreshControl, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { shipperOrdersgetById, shipperOrdersPıckup } from "../../business/actions/shipper";
import { Container, Content } from "native-base";
import { MaterialCommunityIcons, Feather, Fontisto, Ionicons } from "react-native-vector-icons";
import { Modalize } from "react-native-modalize";
import Layout from "../../components/Layout";
import { Divider } from "react-native-paper";
import mapStyle from "../../MapStyle/style";
import COLORS from "../../constans/colors";
import styles from "./styles";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";

const MyTaskShipperDetailSecreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const modalizeRef = useRef(null);

  const { shipperOrdersGetByIdResult, shipperOrdersGetByIdLoading } = useSelector((x) => x.shipper);
  const { shipperLoginResult } = useSelector((x) => x.shipper);

  useEffect(() => {
    _getShipperTaskDetail();
    return () => {};
  }, [route.params.orderDetail.orderID]);

  const _getShipperTaskDetail = async () => {
    dispatch(shipperOrdersgetById(route.params.orderDetail.orderID)).then(({ payload: { data } }) => {
      if (data && data.data && data.data.status == 10 && route.params.autoPickUp) {
        Alert.alert("UYARI", "Teslim almak istediğinize emin misiniz?", [
          {
            text: "İptal",
            style: "cancel",
          },
          {
            text: "Teslim al",
            onPress: () => {
              let shipperId = 0;
              if (shipperLoginResult && shipperLoginResult.data && shipperLoginResult.data.shipper && shipperLoginResult.data.shipper) {
                shipperId = shipperLoginResult.data.shipper.id;
              }
              dispatch(
                shipperOrdersPıckup({
                  OrderID: route.params.orderDetail.orderID,
                  ShipperID: shipperId,
                  qrcode: route.params.qrcode,
                  //DriverId bu sayfada yok "/Shipper/Orders/GetByID" bu endpointten driverId de gelmeli
                  // DriverID: data.data.driverid
                })
              );
            },
          },
        ]);
      }
    });
  };

  const _handlePickUp = () => {
    if (data && data.data && data.data.status == 10 && route.params.qrCodeScreen && autoPickUp) {
      Alert.alert("UYARI", "Teslim almak istediğinize emin misiniz?", [
        {
          text: "İptal",
          style: "cancel",
        },
        {
          text: "Teslim al",
          onPress: () => {
            let shipperId = 0;
            if (shipperLoginResult && shipperLoginResult.data && shipperLoginResult.data.shipper && shipperLoginResult.data.shipper) {
              shipperId = shipperLoginResult.data.shipper.id;
            }
            dispatch(
              shipperOrdersPıckup({
                OrderID: route.params.orderDetail.orderID,
                ShipperID: shipperId,
                qrcode: route.params.qrcode,
                //DriverId bu sayfada yok "/Shipper/Orders/GetByID" bu endpointten driverId de gelmeli
                // DriverID: data.data.driverid
              })
            );
          },
        },
      ]);
    } else if (data && data.data && data.data.status == 10) {
      navigation.navigate("BarCodeScanner", { autoPickUp: true });
    }
  };

  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;

  // if (shipperOrdersGetByIdLoading) return <ActivityIndicator />;
  return (
    <Layout title="Görev Detay">
      {shipperOrdersGetByIdResult.data == undefined ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <Container>
          <Content style={{ backgroundColor: "#F1F2F4" }}>
            <View style={styles.listPrice}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginHorizontal: 5,
                  color: COLORS.text,
                  fontSize: 20,
                }}
              >
                {shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.price} ₺
              </Text>
              {shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status == 10 ? (
                <TouchableOpacity
                  style={{
                    marginHorizontal: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F1F2F4",
                    padding: 10,
                    borderRadius: 5,
                    flexDirection: "row",
                  }}
                  onPress={_handlePickUp}
                >
                  <MaterialCommunityIcons name="truck-check" size={20} style={{ marginHorizontal: 10 }} />
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: COLORS.text,
                    }}
                  >
                    Teslim Al
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <View style={styles.container}>
              <MaterialCommunityIcons name="tooltip-account" size={30} />
              <Text style={styles.txtBaslik}>Alıcı Bilgileri</Text>
            </View>
            <View style={styles.list}>
              <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.baslik}>Ad Soyad</Text>
                <Text style={styles.title}>
                  {" "}
                  {shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.firtname} {shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.lastname}{" "}
                </Text>
                <Divider />
                <Text style={styles.baslik}>Cep Telefonu</Text>
                <Text style={styles.title}>{shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.phoneNumber}</Text>

                <Divider />
                <Text style={styles.baslik}>Adres</Text>
                <Text style={styles.title}>{shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.endAddress}</Text>
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
                <Text style={styles.title}>{shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.sellerCompanyName} </Text>
                <Divider />

                <Text style={styles.baslik}>Adres</Text>
                <Text style={styles.title}>{shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.startAddress} </Text>
                <Divider />
              </View>
            </View>
          </Content>
          <Modalize
            ref={modalizeRef}
            alwaysOpen={height * 0.1}
            modalHeight={height * 0.7}
            modalStyle={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            handlePosition="inside"
          >
            <View
              style={{
                width: width,
                height: height,
                marginTop: 20,
              }}
            >
              <MapView
                mapPadding={{
                  top: height * 0.3,
                  left: 0.5,
                  right: 0.5,
                  bottom: height * 0.3,
                }}
                provider={PROVIDER_GOOGLE}
                style={StyleSheet.absoluteFillObject}
                initialRegion={{
                  latitude: parseFloat(shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.startLat),
                  longitude: parseFloat(shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.startLng),
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01 * ASPECT_RATIO,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: parseFloat(shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.startLat),
                    longitude: parseFloat(shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.startLng),
                  }}
                  title="Gönderici"
                >
                  <View>
                    <Fontisto name="map-marker-alt" size={30} style={{ color: COLORS.primary }} />
                  </View>
                </Marker>
                <Marker
                  coordinate={{
                    latitude: parseFloat(shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.endLat),
                    longitude: parseFloat(shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.endLng),
                  }}
                  title="Alıcı"
                >
                  <View style={styles.marker}>
                    <Fontisto name="map-marker-alt" size={30} style={{ color: COLORS.primary }} />
                  </View>
                </Marker>
                <Polyline
                  coordinates={[
                    {
                      latitude: parseFloat(shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.startLat),
                      longitude: parseFloat(shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.startLng),
                    },
                    {
                      latitude: parseFloat(shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.endLat),
                      longitude: parseFloat(shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.endLng),
                    },
                  ]}
                  strokeColor="#2d3651"
                  lineJoin="round"
                  strokeWidth={5}
                  lineDashPattern={[40, 40]}
                />
              </MapView>
              <TouchableOpacity
                style={{
                  margin: 20,
                  backgroundColor: COLORS.text,
                  width: 100,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>YoL Tarifi Al</Text>
              </TouchableOpacity>
            </View>
          </Modalize>
        </Container>
      )}
    </Layout>
  );
};

export default MyTaskShipperDetailSecreen;
