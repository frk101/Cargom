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
import { driverOrdersGetById } from "../../business/actions/driver";
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
import styles from "./styles";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";

const MyTaskDriverDetailScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const modalizeRef = useRef(null);

  const { driverOrdersGetByIdResult, driverOrdersGetByIdLoading } = useSelector(
    (x) => x.driver
  );
  useEffect(() => {
    _getDriverTaskDetail();
    return () => {};
  }, [route.params.orderDetail.orderID]);

  const _getDriverTaskDetail = async () => {
    dispatch(driverOrdersGetById(route.params.orderDetail.orderID));
  };
  console.log(driverOrdersGetByIdResult);
  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  return (
    <Layout title="Görev Detay">
      {driverOrdersGetByIdResult.data == undefined ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
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
                  {driverOrdersGetByIdResult &&
                    driverOrdersGetByIdResult.data.firtname}{" "}
                  {driverOrdersGetByIdResult &&
                    driverOrdersGetByIdResult.data.lastname}{" "}
                </Text>
                <Divider />
                <Text style={styles.baslik}>Cep Telefonu</Text>
                <Text style={styles.title}>
                  {driverOrdersGetByIdResult &&
                    driverOrdersGetByIdResult.data.phoneNumber}
                </Text>

                <Divider />
                <Text style={styles.baslik}>Adres</Text>
                <Text style={styles.title}>
                  {driverOrdersGetByIdResult &&
                    driverOrdersGetByIdResult.data.endAddress}
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
                  {driverOrdersGetByIdResult &&
                    driverOrdersGetByIdResult.data.sellerCompanyName}{" "}
                </Text>
                <Divider />

                <Text style={styles.baslik}>Adres</Text>
                <Text style={styles.title}>
                  {driverOrdersGetByIdResult &&
                    driverOrdersGetByIdResult.data.startAddress}{" "}
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
                  latitude: parseFloat(
                    driverOrdersGetByIdResult &&
                      driverOrdersGetByIdResult.data.startLat
                  ),
                  longitude: parseFloat(
                    driverOrdersGetByIdResult &&
                      driverOrdersGetByIdResult.data.startLng
                  ),
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01 * ASPECT_RATIO,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: parseFloat(
                      driverOrdersGetByIdResult &&
                        driverOrdersGetByIdResult.data.startLat
                    ),
                    longitude: parseFloat(
                      driverOrdersGetByIdResult &&
                        driverOrdersGetByIdResult.data.startLng
                    ),
                  }}
                  title="Gönderici"
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
                    latitude: parseFloat(
                      driverOrdersGetByIdResult &&
                        driverOrdersGetByIdResult.data.endLat
                    ),
                    longitude: parseFloat(
                      driverOrdersGetByIdResult &&
                        driverOrdersGetByIdResult.data.endLng
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
                        driverOrdersGetByIdResult &&
                          driverOrdersGetByIdResult.data.startLat
                      ),
                      longitude: parseFloat(
                        driverOrdersGetByIdResult &&
                          driverOrdersGetByIdResult.data.startLng
                      ),
                    },
                    {
                      latitude: parseFloat(
                        driverOrdersGetByIdResult &&
                          driverOrdersGetByIdResult.data.endLat
                      ),
                      longitude: parseFloat(
                        driverOrdersGetByIdResult &&
                          driverOrdersGetByIdResult.data.endLng
                      ),
                    },
                  ]}
                  strokeColor="#2d3651"
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

export default MyTaskDriverDetailScreen;
