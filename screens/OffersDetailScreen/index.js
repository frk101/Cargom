import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  Platform,
  ScrollView,
  Animated,
  StyleSheet,
} from "react-native";
import { useRoute, useNavigation, useTheme } from "@react-navigation/native";

import Modal from "react-native-modal";
import { AntDesign } from "react-native-vector-icons";
import COLORS from "../../constans/colors";

import {
  ordersGetPendingOfferDetail,
  ordersAssignGroupDriver,
} from "../../business/actions/driver";
import {
  driverGetByShipper,
  vehiclesGetByShipper,
} from "../../business/actions/shipper";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { Notifier, NotifierComponents } from "react-native-notifier";
import styles from "./styles";
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from "react-native-maps";

import Ionicons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const CARD_WIDTH = width - 40;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const ASPECT_RATIO = width / height;
// const initialMapState = {
//   markers,
//   region: {
//     latitude: 22.62938671242907,
//     longitude: 88.4354486029795,
//     latitudeDelta: 0.04864195044303443,
//     longitudeDelta: 0.040142817690068,
//   },
// };

const AllCargoDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const modalizeRef = useRef(null);
  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);
  const mapRef = useRef(null);
  const theme = useTheme();
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  const [isModalVisible, setModalVisible] = useState(false);
  // const [state, setState] = useState(initialMapState);

  const [selectedDriver, setSelectedDriver] = useState(null);
  const [openDriver, setOpenDriver] = useState(false);
  const [driverSearch, setDriverSearch] = useState("");
  const [driverList, setDriverList] = useState([]);

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [openVehicle, setOpenVehicle] = useState(false);
  const [vehicleSearch, setVehicleSearch] = useState("");
  const [vehicleList, setVehicleList] = useState([]);

  const { ordersGetPendingOfferDetailResult, ordersAssignGroupDriverResult } =
    useSelector((x) => x.driver);
  const {
    driverGetAllShipperResult,
    driverGetAllShipperLoading,
    vehiclesGetByShipperResult,
    vehiclesGetByShipperLoading,
    shipperLoginResult,
  } = useSelector((x) => x.shipper);

  useEffect(() => {
    _handleGetOfferDetail();
    _getApprovedShipperList();
    _getVehiclesList();
    return () => {};
  }, [route.params.id]);

  // useEffect(() => {
  //   mapAnimation.addListener(({ value }) => {
  //     if (
  //       ordersGetPendingOfferDetailResult &&
  //       ordersGetPendingOfferDetailResult.data &&
  //       ordersGetPendingOfferDetailResult.data.steps
  //     ) {
  //     } else {
  //       return;
  //     }
  //     let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
  //     if (index >= ordersGetPendingOfferDetailResult.data.steps.length) {
  //       index = ordersGetPendingOfferDetailResult.data.steps.length - 1;
  //     }
  //     if (index <= 0) {
  //       index = 0;
  //     }

  //     clearTimeout(regionTimeout);

  //     const regionTimeout = setTimeout(() => {
  //       if (mapIndex !== index) {
  //         mapIndex = index;
  //         const data = ordersGetPendingOfferDetailResult.data.steps[index].town;
  //         const coordinate = {
  //           latitude: parseFloat(marker.town.lat),
  //           longitude: parseFloat(marker.town.lng),
  //         };
  //         _map.current.animateToRegion(
  //           {
  //             ...coordinate,
  //             latitudeDelta: coordinate.latitude,
  //             longitudeDelta: coordinate.longitude,
  //           },
  //           350
  //         );
  //       }
  //     }, 10);
  //   });
  // });

  // const interpolations = state.markers.map((marker, index) => {
  //   const inputRange = [
  //     (index - 1) * CARD_WIDTH,
  //     index * CARD_WIDTH,
  //     (index + 1) * CARD_WIDTH,
  //   ];

  //   const scale = mapAnimation.interpolate({
  //     inputRange,
  //     outputRange: [1, 1.5, 1],
  //     extrapolate: "clamp",
  //   });

  //   return { scale };
  // });

  // const onMarkerPress = (mapEventData) => {
  //   const markerID = mapEventData._targetInst.return.key;

  //   let x = markerID * CARD_WIDTH + markerID * 20;
  //   if (Platform.OS === "ios") {
  //     x = x - SPACING_FOR_CARD_INSET;
  //   }

  //   _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  // };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const _handleGetOfferDetail = () => {
    dispatch(ordersGetPendingOfferDetail(route.params.id));
  };

  const _getApprovedShipperList = async () => {
    dispatch(driverGetByShipper(true));
  };

  const _getVehiclesList = async () => {
    dispatch(vehiclesGetByShipper());
  };

  const _handleSearchDriver = (searchText) => {
    setSelectedDriver(null);
    if (searchText) {
      if (driverGetAllShipperResult.data) {
        let searchDrivers = driverGetAllShipperResult.data.filter((x) => {
          return (
            x.driver.firstname.toLowerCase().indexOf(searchText.toLowerCase()) >
              -1 ||
            x.driver.lastname.toLowerCase().indexOf(searchText.toLowerCase()) >
              -1
          );
        });
        setDriverList(searchDrivers);
      }
    }
    setOpenDriver(true);
    setDriverSearch(searchText);
  };

  const _handleChooseDriver = (item) => {
    setSelectedDriver(item);
    setOpenDriver(false);
    setDriverSearch(item.driver.firstname + " " + item.driver.lastname);
  };

  const _handleSearchVehicle = (searchText) => {
    setSelectedVehicle(null);
    if (searchText) {
      if (vehiclesGetByShipperResult.data) {
        let searchVehicles = vehiclesGetByShipperResult.data.filter((x) => {
          return (
            x.model.modelName.toLowerCase().indexOf(searchText.toLowerCase()) >
              -1 && x.vehicle.isApproved
          );
        });
        setVehicleList(searchVehicles);
      }
    }
    setOpenVehicle(true);
    setVehicleSearch(searchText);
  };

  const _handleChooseVehicle = (item) => {
    setSelectedVehicle(item);
    setOpenVehicle(false);
    setVehicleSearch(item.model.modelName + " " + item.type.typeName);
  };

  const _handleApprovedContract = async () => {
    if (selectedDriver == null) {
      Notifier.showNotification({
        title: "UYARI",
        description: "Sürücü seçiniz.",
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: "error",
        },
      });
      return;
    }
    if (selectedVehicle == null) {
      Notifier.showNotification({
        title: "UYARI",
        description: "Araç seçiniz.",
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: "error",
        },
      });
      return;
    } else {
      setModalVisible(false);
      Notifier.showNotification({
        title: "HARİKA",
        description: "Görevlerim Sayfasından Görevinize Bakabilirsiniz",
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: "success",
        },
      });
    }
    let model = {
      DriverID: selectedDriver.driver.id,
      ShipperID: shipperLoginResult.data.shipper.id,
      OrderGroupID: route.params.id,
      VehicleID: selectedVehicle.vehicle.id,
    };
    // dispatch(ordersAssignGroupDriver(model)).then((x) => {
    //   console.log(x);
    // });
  };

  return (
    // <Layout title="Teklif Detay" isBackIcon>
    <View style={styles.container}>
      <View style={{ height: height * 0.4 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: 41.0054958,
            longitude: 28.8720979,
            latitudeDelta: 0.3,
            longitudeDelta: 0.2 * ASPECT_RATIO,
          }}
        >
          {ordersGetPendingOfferDetailResult &&
          ordersGetPendingOfferDetailResult.data &&
          ordersGetPendingOfferDetailResult.data.steps
            ? ordersGetPendingOfferDetailResult.data.steps.map(
                (marker, index) => {
                  const coordinate = {
                    latitude: parseFloat(marker.town.lat),
                    longitude: parseFloat(marker.town.lng),
                  };
                  return (
                    <Marker
                      key={index}
                      coordinate={coordinate}
                      onPress={(e) => onMarkerPress(e)}
                      image={require("../../assets/Marker.png")}
                    />
                  );
                }
              )
            : null}
          <Polyline
            coordinates={
              ordersGetPendingOfferDetailResult &&
              ordersGetPendingOfferDetailResult.data &&
              ordersGetPendingOfferDetailResult.data.steps
                ? ordersGetPendingOfferDetailResult.data.steps.map((marker) => {
                    const coordinate = {
                      latitude: parseFloat(marker.town.lat),
                      longitude: parseFloat(marker.town.lng),
                    };
                    return coordinate;
                  })
                : []
            }
            strokeColor="#171797"
            lineJoin="miter"
            strokeWidth={3}
            lineDashPattern={[13, 13]}
          />
        </MapView>
        <View style={styles.view}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center" }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-circle" size={30} color={COLORS.text} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.view}>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-circle" size={30} color={COLORS.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.views}>
        <View style={styles.btnDetail}>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
            {ordersGetPendingOfferDetailResult &&
              ordersGetPendingOfferDetailResult.data &&
              ordersGetPendingOfferDetailResult.data.group &&
              ordersGetPendingOfferDetailResult.data.group.price}{" "}
            ₺
          </Text>
        </View>
        <TouchableOpacity onPress={toggleModal} style={styles.openModal}>
          <AntDesign name="checkcircle" color="#fff" size={20} />
          <Text style={styles.offer}>Teklifi Kabul Et</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.price}>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
          {ordersGetPendingOfferDetailResult &&
            ordersGetPendingOfferDetailResult.data &&
            ordersGetPendingOfferDetailResult.data.group &&
            ordersGetPendingOfferDetailResult.data.group.price}{" "}
          ₺
        </Text>
      </View> */}
      {/* <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{z
          paddingHorizontal:
            Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {ordersGetPendingOfferDetailResult &&
        ordersGetPendingOfferDetailResult.data &&
        ordersGetPendingOfferDetailResult.data.steps
          ? ordersGetPendingOfferDetailResult.data.steps.map(
              (marker, index) => (
                <View style={styles.card} key={index}>
                  <View style={styles.textContent}>
                    <Text numberOfLines={1} style={styles.cardtitle}>
                      Step {""}
                      {marker.step.stepNumber}
                    </Text>

                    <View style={styles.divider} />

                    <Text numberOfLines={1} style={styles.cardDescription}>
                      {marker.step.address}
                    </Text> */}

      {/* <TouchableOpacity
                        style={styles.action1}
                        onPress={toggleModal}
                      >
                        <Text style={styles.btnText}>Teklifi Al</Text>
                      </TouchableOpacity> */}
      {/* </View>
                </View>
              )
            )
          : null}
      </Animated.ScrollView> */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.mdl}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="closecircleo" size={30} />
            </TouchableOpacity>

            <Image
              source={require("../../assets/shipgeldiLogo-v03-1.png")}
              style={{ width: 200, resizeMode: "cover" }}
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                color: COLORS.text,
                marginTop: 35,
              },
            ]}
          >
            Sürücü
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder={selectedDriver ? "" : "Sürücü Seçiniz"}
              placeholderTextColor="#666666"
              returnKeyType="done"
              style={[
                styles.textInput,
                {
                  color: COLORS.text,
                },
              ]}
              value={driverSearch}
              onChangeText={(text) => _handleSearchDriver(text)}
            />
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            data={openDriver && driverList}
            renderItem={({ item }) => (
              <DriverItem item={item} onPress={_handleChooseDriver} />
            )}
          />
          <Text
            style={[
              styles.text_footer,
              {
                color: COLORS.text,
              },
            ]}
          >
            Araç
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder={selectedVehicle ? "" : "Araç Seçiniz"}
              placeholderTextColor="#666666"
              returnKeyType="done"
              style={[
                styles.textInput,
                {
                  color: COLORS.text,
                },
              ]}
              value={vehicleSearch}
              onChangeText={(text) => _handleSearchVehicle(text)}
            />
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={openVehicle && vehicleList}
            renderItem={({ item }) => (
              <VehicleItem item={item} onPress={_handleChooseVehicle} />
            )}
          />

          <TouchableOpacity
            onPress={_handleApprovedContract}
            style={styles.btnGonder}
          >
            <Text style={styles.btnText}>Teklifi Kabul Et</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>

    //  </Layout>
  );
};

export default AllCargoDetail;

const DriverItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      key={item.driver.id.toString()}
      onPress={() => onPress(item)}
      style={styles.actionSearch}
    >
      <Text>
        {item.driver.firstname} {item.driver.lastname}
      </Text>
    </TouchableOpacity>
  );
};

const VehicleItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      key={item.model.id.toString()}
      onPress={() => onPress(item)}
      style={styles.actionSearch}
    >
      <Text>
        {item.model.modelName} {item.type.typeName}
      </Text>
    </TouchableOpacity>
  );
};
