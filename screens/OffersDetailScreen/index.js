import React, { useEffect, useRef, useState } from "react";
import { Text, View, Dimensions, TouchableOpacity, FlatList, TextInput, Image, Platform, ScrollView, Animated, StyleSheet } from "react-native";
import { useRoute, useNavigation, useTheme } from "@react-navigation/native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Modalize } from "react-native-modalize";
import Modal from "react-native-modal";
import { AntDesign } from "react-native-vector-icons";
import COLORS from "../../constans/colors";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { ordersGetPendingOfferDetail, ordersAssignGroupDriver } from "../../business/actions/driver";
import { driverGetByShipper, vehiclesGetByShipper } from "../../business/actions/shipper";
import { useSelector, useDispatch } from "react-redux";
import { Content } from "native-base";
import Layout from "../../components/Layout";

import { Notifier, NotifierComponents } from "react-native-notifier";

import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from "react-native-maps";
import PagerView from "react-native-pager-view";
import { markers, mapDarkStyle, mapStandardStyle } from "../../data/mapData";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 300;
const CARD_WIDTH = width - 40;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const ASPECT_RATIO = width / (height * 0.6);

const initialMapState = {
  markers,
  region: {
    latitude: 22.62938671242907,
    longitude: 88.4354486029795,
    latitudeDelta: 0.04864195044303443,
    longitudeDelta: 0.040142817690068,
  },
};

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
  const [state, setState] = React.useState(initialMapState);
  const [tabState, setTabState] = useState(false);

  const [selectedDriver, setSelectedDriver] = useState(null);
  const [openDriver, setOpenDriver] = useState(false);
  const [driverSearch, setDriverSearch] = useState("");
  const [driverList, setDriverList] = useState([]);

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [openVehicle, setOpenVehicle] = useState(false);
  const [vehicleSearch, setVehicleSearch] = useState("");
  const [vehicleList, setVehicleList] = useState([]);

  const { ordersGetPendingOfferDetailResult, ordersAssignGroupDriverResult } = useSelector((x) => x.driver);
  const { driverGetAllShipperResult, driverGetAllShipperLoading, vehiclesGetByShipperResult, vehiclesGetByShipperLoading, shipperLoginResult } = useSelector((x) => x.shipper);

  useEffect(() => {
    _handleGetOfferDetail();
    _getApprovedShipperList();
    _getVehiclesList();
    return () => {};
  }, [route.params.id]);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinate } = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [(index - 1) * CARD_WIDTH, index * CARD_WIDTH, (index + 1) * CARD_WIDTH];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp",
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === "ios") {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  };

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
          return x.driver.firstname.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || x.driver.lastname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
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
          return x.model.modelName.toLowerCase().indexOf(searchText.toLowerCase()) > -1 && x.vehicle.isApproved;
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
    <Layout title="Teklif Detay" isBackIcon>
      <View style={styles.container}>
        <MapView ref={_map} initialRegion={state.region} style={styles.container} provider={PROVIDER_GOOGLE} customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}>
          {ordersGetPendingOfferDetailResult && ordersGetPendingOfferDetailResult.data && ordersGetPendingOfferDetailResult.data.steps
            ? ordersGetPendingOfferDetailResult.data.steps.map((marker, index) => {
                // const scaleStyle = {
                //   transform: [
                //     {
                //       scale: interpolations[index].scale,
                //     },
                //   ],
                // };
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
            lineJoin="miter"
            strokeWidth={3}
            lineDashPattern={[13, 13]}
          />
        </MapView>

        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={50}
          style={styles.chipsScrollView}
          contentInset={{
            // iOS only
            top: 0,
            left: 0,
            bottom: 0,
            right: 20,
          }}
          contentContainerStyle={{
            paddingRight: Platform.OS === "android" ? 20 : 0,
          }}
        >
          {/* {state.categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.chipsItem}>
          {category.icon}
          <Text>{category.name}</Text>
        </TouchableOpacity>
      ))} */}
        </ScrollView>
        <Animated.ScrollView
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
          contentContainerStyle={{
            paddingHorizontal: Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
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
          {ordersGetPendingOfferDetailResult && ordersGetPendingOfferDetailResult.data && ordersGetPendingOfferDetailResult.data.steps
            ? ordersGetPendingOfferDetailResult.data.steps.map((marker, index) => (
                <View style={styles.card} key={index}>
                  {/* <Image source={marker.image} style={styles.cardImage} resizeMode="cover" /> */}
                  <View style={styles.textContent}>
                    <Text numberOfLines={1} style={styles.cardtitle}>
                      {marker.step.address}
                    </Text>
                    {/* <StarRating ratings={marker.rating} reviews={marker.reviews} /> */}
                    <Text numberOfLines={1} style={styles.cardDescription}>
                      {marker.town.townName}
                    </Text>
                    <View style={styles.button}>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={[
                          styles.signIn,
                          {
                            borderColor: "#FF6347",
                            borderWidth: 1,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.textSign,
                            {
                              color: "#FF6347",
                            },
                          ]}
                        >
                          Order Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))
            : null}
        </Animated.ScrollView>
      </View>
    </Layout>
  );

  return (
    <Layout title="Teklif Detay" isBackIcon>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        horizontal
        data={ordersGetPendingOfferDetailResult && ordersGetPendingOfferDetailResult.data && ordersGetPendingOfferDetailResult.data.steps}
        renderItem={({ item }) => <OffersDesciraption item={item} />}
      />
      {/* <Content>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          horizontal
          data={
            ordersGetPendingOfferDetailResult &&
            ordersGetPendingOfferDetailResult.data &&
            ordersGetPendingOfferDetailResult.data.steps
          }
          renderItem={({ item }) => <OffersDesciraption item={item} />}
        />
        <TouchableOpacity
          onPress={toggleModal}
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text>Teklifi Kabul Et</Text>
        </TouchableOpacity>
      </Content>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            height: height / 2,
            borderRadius: 20,
            backgroundColor: "#ffffff",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 30,
              alignItems: "center",
            }}
          >
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
      </Modal> */}
    </Layout>
  );
};

export default AllCargoDetail;

const OffersDesciraption = ({ item }) => {
  console.log(item);
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Step
      </Text>
      <View style={styles.actionSearch}>
        <Text>{item.step.address}</Text>
      </View>
      <View style={styles.actionSearch}>
        <Text>{item.town.townName}</Text>
      </View>
    </View>
  );
};

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

const renderItem = ({ item }) => {
  return (
    <View style={styles.slide}>
      {/* <Image source={item.image} style={styles.image} /> */}
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
};

const keyExtractor = (item) => item.title;

const renderNextButton = () => {
  return (
    <View style={styles.rightTextWrapper}>
      <Text style={styles.rightText}>Next</Text>
    </View>
  );
};

//  const renderDoneButton = () => {
//    return (
//      <LinearGradient
//        colors={["#A5C8FF", "#23286B"]}
//        style={styles.linearGradient}
//        start={{ x: 0, y: 0.5 }}
//        end={{ x: 1, y: 0.5 }}
//        style={styles.doneButtonWrapper}
//      >
//        <Text style={styles.doneButtonText}>Done</Text>
//      </LinearGradient>
//      // <View style={styles.doneButtonWrapper}>
//      //   <Text style={styles.doneButtonText}>Done</Text>
//      // </View>
//    );
//  };

const renderPrevButton = () => {
  return (
    <View style={styles.leftTextWrapper}>
      <Text style={styles.leftText}>Prev</Text>
    </View>
  );
};

const handleDone = () => {
  props.handleDone();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: "absolute",
    top: Platform.OS === "ios" ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: "center",
    marginTop: 5,
  },
  signIn: {
    width: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
