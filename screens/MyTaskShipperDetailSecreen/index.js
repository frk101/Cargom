import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, ActivityIndicator, FlatList, TouchableOpacity, View, Dimensions, RefreshControl, Alert, ScrollView, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { shipperOrdersgetById, shipperOrdersPıckup, shipperOrdersDelivery } from "../../business/actions/shipper";
import { Container, Content } from "native-base";
import { MaterialCommunityIcons, Feather, Fontisto, Ionicons, Octicons } from "react-native-vector-icons";
import { Modalize } from "react-native-modalize";
import Layout from "../../components/Layout";
import { Divider } from "react-native-paper";
import mapStyle from "../../MapStyle/style";
import COLORS from "../../constans/colors";
import styles from "./styles";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const MyTaskShipperDetailSecreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const modalizeRef = useRef(null);
  const [openDeliveryInput, setOpenDeliveryInput] = useState(false);
  const [deliveryInputText, setDeliveryInputText] = useState("");

  const { shipperOrdersGetByIdResult, shipperOrdersGetByIdLoading } = useSelector((x) => x.shipper);
  const { shipperLoginResult } = useSelector((x) => x.shipper);

  useEffect(() => {
    _getShipperTaskDetail();
    return () => {};
  }, [route.params.orderDetail.orderID]);

  const _getShipperTaskDetail = async () => {
    dispatch(shipperOrdersgetById(route.params.orderDetail.orderID));
  };
  const _handlePickUp = async () => {
    if (route.params.qrCodeScreen) {
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
            } else if (shipperLoginResult && shipperLoginResult.data && shipperLoginResult.data.driver && shipperLoginResult.data.driver) {
              shipperId = shipperLoginResult.data.driver.id;
            }
            dispatch(
              shipperOrdersPıckup({
                OrderID: route.params.orderDetail.orderID,
                ShipperID: shipperId,
                qrcode: route.params.qrcode,
                //DriverId bu sayfada yok "/Shipper/Orders/GetByID" bu endpointten driverId de gelmeli
                DriverID: shipperOrdersGetByIdResult.data.driverID,
              })
            ).then(({ payload: { data } }) => {
              if (data.status) {
                navigation.navigate("MyTaskScreen");
              }
            });
          },
        },
      ]);
    } else {
      navigation.navigate("BarCodeScanner", { autoPickUp: true });
    }
  };

  const _handleDeliveryInputToggle = async () => {
    if (route.params.qrcode) {
      setOpenDeliveryInput(!openDeliveryInput);
      setDeliveryInputText("");
    } else {
      setOpenDeliveryInput(!openDeliveryInput);
      setDeliveryInputText("");
      navigation.navigate("BarCodeScanner", { autoPickUp: true });
    }
  };

  const _handleDelivery = async () => {
    if (route.params.qrCodeScreen) {
      let shipperId = 0;
      if (shipperLoginResult && shipperLoginResult.data && shipperLoginResult.data.shipper && shipperLoginResult.data.shipper) {
        shipperId = shipperLoginResult.data.shipper.id;
      } else if (shipperLoginResult && shipperLoginResult.data && shipperLoginResult.data.driver && shipperLoginResult.data.driver) {
        shipperId = shipperLoginResult.data.driver.id;
      }
      dispatch(
        shipperOrdersDelivery({
          OrderID: route.params.orderDetail.orderID,
          ShipperID: shipperId,
          qrcode: route.params.qrcode,
          //DriverId bu sayfada yok "/Shipper/Orders/GetByID" bu endpointten driverId de gelmeli
          DriverID: shipperOrdersGetByIdResult.data.driverID,
          deliveryCode: parseInt(deliveryInputText),
        })
      ).then(({ payload: { data } }) => {
        if (data.status) {
          navigation.navigate("MyTaskScreen");
        }
      });
    } else {
      navigation.navigate("BarCodeScanner", { autoPickUp: true });
    }
  };

  return (
    <Layout title="Görev Detay">
      {shipperOrdersGetByIdResult.data == undefined ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <Container>
          <Content style={{ backgroundColor: "#F1F2F4" }} contentContainerStyle={{ paddingBottom: 70 }}>
            <View style={styles.listPrice}>
              {shipperLoginResult.data && shipperLoginResult.data.userType == 1 ? (
                <Text style={styles.detailPrice}>{shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.price} ₺</Text>
              ) : null}

              {shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status == 30 ? (
                <>
                  {openDeliveryInput ? (
                    <>
                      <View>
                        <TextInput placeholder="kodu gir" onChangeText={(e) => setDeliveryInputText(e)} />
                        <TouchableOpacity style={styles.btnArac} onPress={_handleDelivery}>
                          <MaterialCommunityIcons name="truck-check" size={20} color={COLORS.text} style={{ marginHorizontal: 10 }} />
                          <Text style={styles.txtYuk}>Teslim Et</Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  ) : (
                    <>
                      <TouchableOpacity style={styles.btnArac} onPress={_handleDeliveryInputToggle}>
                        <MaterialCommunityIcons name="truck-check" size={20} color={COLORS.text} style={{ marginHorizontal: 10 }} />
                        <Text style={styles.txtYuk}>Teslim Et</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </>
              ) : shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status == 20 ? (
                <TouchableOpacity style={styles.btnTeslim} onPress={_handlePickUp}>
                  <Octicons name="package" color="#fff" size={20} style={{ marginHorizontal: 10 }} />
                  <Text style={styles.txtTeslim}>Araca Yükle</Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <View style={styles.containerss}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <MaterialCommunityIcons name="tooltip-account" size={30} />
                <Text style={styles.txtBaslik}>Alıcı Bilgileri</Text>
              </View>

              <View>
                <View
                  style={[
                    styles.durumColor,
                    {
                      backgroundColor:
                        shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 20
                          ? "#0866C6"
                          : shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 30
                          ? "#F49917"
                          : shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 40
                          ? "#23BF08"
                          : shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 50
                          ? "#DC3545"
                          : "#23BF08",

                      borderColor:
                        shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 20
                          ? "#DC3545"
                          : shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 30
                          ? "#F49917"
                          : shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 40
                          ? "#6c757d"
                          : shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 50
                          ? "#0866C6"
                          : "#23BF08",
                    },
                  ]}
                >
                  <Text style={styles.durum}>
                    {shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 20
                      ? "Bekliyor"
                      : shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 30
                      ? "Yolda"
                      : shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 40
                      ? "Teslim"
                      : shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.status && shipperOrdersGetByIdResult.data.status === 50
                      ? "İptal"
                      : "Boşta"}
                  </Text>
                </View>
              </View>
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
            <View style={styles.container}>
              <MaterialCommunityIcons name="truck-fast" size={30} />
              <Text style={styles.txtBaslik}>Taşıma Bilgileri</Text>
            </View>
            <View style={styles.list}>
              <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.baslik}>Adı Soyadı</Text>
                <Text style={styles.title}>
                  {shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.driverFirstname} {shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.driverLastname}{" "}
                </Text>
                <Divider />

                <Text style={styles.baslik}>Araç Plakası</Text>
                <Text style={styles.title}>{shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data.vehiclePlate} </Text>
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
                  latitudeDelta: 0.2,
                  longitudeDelta: 0.2 * ASPECT_RATIO,
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
                  margin: 10,
                  backgroundColor: COLORS.text,
                  width: 70,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>Yol Tarifi Al</Text>
              </TouchableOpacity>
            </View>
          </Modalize>
        </Container>
      )}
    </Layout>
  );
};

export default MyTaskShipperDetailSecreen;
