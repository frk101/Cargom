import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Modalize } from "react-native-modalize";
import Modal from "react-native-modal";
import { AntDesign } from "react-native-vector-icons";
import COLORS from "../../constans/colors";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import {
  ordersGetPendingOfferDetail,
  ordersAssignGroupDriver,
} from "../../business/actions/driver";
import {
  driverGetByShipper,
  vehiclesGetByShipper,
} from "../../business/actions/shipper";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView as Content } from "native-base";
import Layout from "../../components/Layout";
import styles from "./styles";
import { Notifier, NotifierComponents } from "react-native-notifier";
import StepCargo from "../../deneme/StepCargo";
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from "react-native-maps";
import PagerView from "react-native-pager-view";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / (height * 0.6);

const AllCargoDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const modalizeRef = useRef(null);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [tabState, setTabState] = useState(false);
  const mapRef = useRef(null);
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
        description: "S??r??c?? se??iniz.",
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
        description: "Ara?? se??iniz.",
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: "error",
        },
      });
      return;
    } else {
      setModalVisible(false);
      Notifier.showNotification({
        title: "HAR??KA",
        description: "G??revlerim Sayfas??ndan G??revinize Bakabilirsiniz",
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
            S??r??c??
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder={selectedDriver ? "" : "S??r??c?? Se??iniz"}
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
            Ara??
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder={selectedVehicle ? "" : "Ara?? Se??iniz"}
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
