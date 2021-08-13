import React, { useEffect, useRef, useState } from "react";
import { Text, View, Dimensions, TouchableOpacity, FlatList, TextInput, Image, Platform, ScrollView, Animated, StyleSheet } from "react-native";
import { useRoute, useNavigation, useTheme } from "@react-navigation/native";

import Modal from "react-native-modal";
import { AntDesign, Entypo, MaterialCommunityIcons, Ionicons, SimpleLineIcons } from "react-native-vector-icons";
import COLORS from "../../constans/colors";

import { ordersGetPendingOfferDetail, ordersAssignGroupDriver } from "../../business/actions/driver";
import { driverGetByShipper, vehiclesGetByShipper } from "../../business/actions/shipper";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { Notifier, NotifierComponents } from "react-native-notifier";
import styles from "./styles";
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from "react-native-maps";

import { Divider } from "react-native-elements";

import { ScrollView as Content, Select } from "native-base";
import { ActivityIndicator } from "react-native";

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
  const [selectedDriverText, setSelectedDriverText] = useState(null);
  const [selectedVehicleText, setSelectedVehicleText] = useState(null);

  const [isModalVisible, setModalVisible] = useState(false);

  const [selectedDriver, setSelectedDriver] = useState(null);
  const [openDriver, setOpenDriver] = useState(false);
  const [driverSearch, setDriverSearch] = useState("");
  const [driverList, setDriverList] = useState([]);

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [openVehicle, setOpenVehicle] = useState(false);
  const [vehicleSearch, setVehicleSearch] = useState("");
  const [vehicleList, setVehicleList] = useState([]);

  const { ordersGetPendingOfferDetailResult, ordersGetPendingOfferDetailLoading } = useSelector((x) => x.driver);

  const { driverGetAllShipperResult, driverGetAllShipperLoading, vehiclesGetByShipperResult, vehiclesGetByShipperLoading, shipperLoginResult } = useSelector((x) => x.shipper);

  useEffect(() => {
    _handleGetOfferDetail();
    _getApprovedShipperList();
    _getVehiclesList();
    return () => {};
  }, [route.params.id]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
          return x.driver.firstname.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || x.driver.lastname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        });
        setDriverList(searchDrivers);
      }
    }
    setOpenDriver(true);
    setDriverSearch(searchText);
  };

  const _handleChooseDriver = (item) => {
    setSelectedDriverText(item.driver.firstname + " " + item.driver.lastname);
    setSelectedDriver(item);
    setOpenDriver(false);
    setDriverSearch(item.driver.firstname + " " + item.driver.lastname);
  };

  const _handleSearchVehicle = (searchText) => {
    setSelectedVehicle(null);
    if (searchText) {
      if (vehiclesGetByShipperResult.data) {
        let searchVehicles = vehiclesGetByShipperResult.data.filter((x) => {
          return x.model.modelName.toLowerCase().indexOf(searchText.toLowerCase()) > -1 && x.vehicle.isApproved;
        });
        setVehicleList(searchVehicles);
      }
    }
    setOpenVehicle(true);
    setVehicleSearch(searchText);
  };

  const _handleChooseVehicle = (item) => {
    setSelectedVehicleText(item.model.modelName + " " + item.type.typeName);
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
      navigation.goBack();
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
    dispatch(ordersAssignGroupDriver(model)).then((x) => {
      // console.log(x);
    });
  };

  // console.log(
  //   ordersGetPendingOfferDetailResult &&
  //     ordersGetPendingOfferDetailResult.data

  // );
  return (
    <>
      {ordersGetPendingOfferDetailLoading ? (
        <ActivityIndicator />
      ) : (
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
              {ordersGetPendingOfferDetailResult && ordersGetPendingOfferDetailResult.data && ordersGetPendingOfferDetailResult.data.steps
                ? ordersGetPendingOfferDetailResult.data.steps.map((marker, index) => {
                    const coordinate = {
                      latitude: parseFloat(marker.town.lat),
                      longitude: parseFloat(marker.town.lng),
                    };
                    return <Marker key={index} coordinate={coordinate} onPress={(e) => onMarkerPress(e)} image={require("../../assets/Marker.png")} />;
                  })
                : null}
              <Polyline
                coordinates={
                  ordersGetPendingOfferDetailResult && ordersGetPendingOfferDetailResult.data && ordersGetPendingOfferDetailResult.data.steps
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
                lineJoin="round"
                strokeWidth={3}
                lineDashPattern={[13, 13]}
              />
            </MapView>
            <View style={styles.view}>
              <TouchableOpacity style={{ flex: 1, justifyContent: "center" }} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle" size={30} color={COLORS.text} />
              </TouchableOpacity>
            </View>
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
            {shipperLoginResult && shipperLoginResult.data && shipperLoginResult.data.shipper && shipperLoginResult.data.shipper.status == 30 ? (
              <TouchableOpacity onPress={toggleModal} style={styles.openModal}>
                <AntDesign name="checkcircle" color="#fff" size={20} />
                <Text style={styles.offer}>Teklifi Kabul Et</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => navigation.navigate("ProfileEditScreen")} style={styles.openModal}>
                <Text style={styles.btnText}>Teklifi Kabul Et</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ padding: 20 }}>
              <View style={styles.row}>
                <Ionicons name="ios-location" size={24} color="#404040" />
                <Text style={styles.txtes}>
                  {" "}
                  :{" "}
                  {ordersGetPendingOfferDetailResult &&
                    ordersGetPendingOfferDetailResult.data &&
                    ordersGetPendingOfferDetailResult.data.group &&
                    ordersGetPendingOfferDetailResult.data.group.startAddress}{" "}
                </Text>
              </View>

              <View style={styles.row}>
                <Ionicons name="locate-outline" size={24} color="#404040" />
                <Text style={styles.txtes}>
                  {" "}
                  :{" "}
                  {ordersGetPendingOfferDetailResult &&
                    ordersGetPendingOfferDetailResult.data &&
                    ordersGetPendingOfferDetailResult.data.group &&
                    ordersGetPendingOfferDetailResult.data.group.endAddress}{" "}
                </Text>
              </View>

              <View style={styles.row}>
                <Ionicons name="pricetag" size={20} color="#404040" />
                <Text style={styles.txtes}>
                  {" "}
                  :{" "}
                  {ordersGetPendingOfferDetailResult &&
                    ordersGetPendingOfferDetailResult.data &&
                    ordersGetPendingOfferDetailResult.data.group &&
                    ordersGetPendingOfferDetailResult.data.group.price}{" "}
                  ₺
                </Text>
              </View>

              <View style={styles.row}>
                <MaterialCommunityIcons name="highway" size={20} color="#404040" />
                <Text style={styles.txtes}>
                  {" "}
                  :{" "}
                  {ordersGetPendingOfferDetailResult &&
                    ordersGetPendingOfferDetailResult.data &&
                    ordersGetPendingOfferDetailResult.data.group &&
                    (ordersGetPendingOfferDetailResult.data.group.distance / 1000).toFixed(1)}{" "}
                  km
                </Text>
              </View>
            </View>
            <Divider />
            <Content style={{ marginTop: 20 }}>
              <FlatList
                scrollEnabled={false}
                renderItem={(item) => <RenderList item={item} />}
                data={ordersGetPendingOfferDetailResult && ordersGetPendingOfferDetailResult.data && ordersGetPendingOfferDetailResult.data.steps}
              />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="checkcircle" color="#23BF08" size={25} style={{ margin: 5 }} />
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "red" }}>Tamamlandı !</Text>
                <SimpleLineIcons name="emotsmile" size={23} color="#404040" style={{ marginLeft: 5 }} />
              </View>
            </Content>
          </View>

          <Modal isVisible={isModalVisible} coverScreen={false}>
            <View style={styles.mdl}>
              <View style={styles.modalHeader}>
                <TouchableOpacity onPress={toggleModal}>
                  <AntDesign name="closecircleo" size={30} />
                </TouchableOpacity>

                <Image source={require("../../assets/shipgeldiLogo-v03-1.png")} style={{ width: 200, resizeMode: "cover" }} />
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
                <Select
                  selectedValue={selectedDriverText}
                  minWidth={200}
                  accessibilityLabel={selectedDriverText ? selectedDriverText : "Sürücü Seçiniz"}
                  placeholder={selectedDriverText ? selectedDriverText : "Sürücü Seçiniz"}
                  onValueChange={(itemValue) => {
                    _handleChooseDriver(itemValue);
                  }}
                >
                  {driverGetAllShipperResult.data &&
                    driverGetAllShipperResult.data.map((item, index) => {
                      return <Select.Item label={item.driver.firstname + " " + item.driver.lastname} value={item} />;
                    })}
                </Select>
              </View>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
                data={openDriver && driverList}
                renderItem={({ item }) => <DriverItem item={item} onPress={_handleChooseDriver} />}
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
                <Select
                  selectedValue={selectedVehicleText}
                  minWidth={200}
                  accessibilityLabel={selectedVehicleText ? selectedVehicleText : "Araç Seçiniz"}
                  placeholder={selectedVehicleText ? selectedVehicleText : "Araç Seçiniz"}
                  onValueChange={(itemValue) => {
                    _handleChooseVehicle(itemValue);
                  }}
                >
                  {vehiclesGetByShipperResult.data &&
                    vehiclesGetByShipperResult.data.map((item, index) => {
                      return <Select.Item label={item.model.modelName + " " + item.type.typeName} value={item} />;
                    })}
                </Select>

                {/* <TextInput
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
                /> */}
              </View>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={openVehicle && vehicleList}
                renderItem={({ item }) => <VehicleItem item={item} onPress={_handleChooseVehicle} />}
              />
              <TouchableOpacity onPress={_handleApprovedContract} style={styles.btnGonder}>
                <Text style={styles.btnText}>Teklifi Kabul Et</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      )}
    </>
  );
};

export default AllCargoDetail;

const DriverItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity key={item.driver.id.toString()} onPress={() => onPress(item)} style={styles.actionSearch}>
      <Text>
        {item.driver.firstname} {item.driver.lastname}
      </Text>
    </TouchableOpacity>
  );
};

const VehicleItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity key={item.model.id.toString()} onPress={() => onPress(item)} style={styles.actionSearch}>
      <Text>
        {item.model.modelName} {item.type.typeName}
      </Text>
    </TouchableOpacity>
  );
};

const RenderList = ({ item }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              width: 25,
              height: 25,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: COLORS.text,
              margin: 5,
            }}
          >
            <Text>{item.index + 1}</Text>
          </View>
          <Entypo name="dots-three-vertical" style={{ alignSelf: "center" }} />
        </View>
        <View style={{ margin: 5, alignItems: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              color: COLORS.text,
              fontWeight: "bold",
              marginTop: 3,
            }}
          >
            {item.item.step.address}
          </Text>
        </View>
      </View>
    </View>
  );
};
