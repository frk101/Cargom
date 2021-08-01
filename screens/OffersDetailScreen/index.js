import React, { useEffect, useRef, useState } from "react";
import { Text, View, Dimensions, TouchableOpacity, Animated, FlatList, TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Modalize } from "react-native-modalize";
import COLORS from "../../constans/colors";
import { ordersGetPendingOfferDetail, ordersAssignGroupDriver } from "../../business/actions/driver";
import { driverGetByShipper, vehiclesGetByShipper } from "../../business/actions/shipper";
import { useSelector, useDispatch } from "react-redux";
import { Content } from "native-base";
import Layout from "../../components/Layout";
import styles from "./styles";
import { Notifier, NotifierComponents } from "react-native-notifier";

const AllCargoDetail = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const modalizeRef = useRef(null);

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
          return x.model.modelName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
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
    }
    let model = {
      DriverID: selectedDriver.driver.id,
      ShipperID: shipperLoginResult.data.shipper.id,
      OrderGroupID: route.params.id,
      VehicleID: selectedVehicle.vehicle.id,
    };
    dispatch(ordersAssignGroupDriver(model)).then((x) => {
      console.log(x);
    });
  };

  return (
    <Layout title="Teklif Detay" isBackIcon>
      <Content>
        <FlatList
          data={ordersGetPendingOfferDetailResult && ordersGetPendingOfferDetailResult.data && ordersGetPendingOfferDetailResult.data.steps}
          renderItem={({ item }) => <OffersDesciraption item={item} />}
        />
        <TouchableOpacity
          onPress={onOpen}
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text>Teklifi Kabul Et</Text>
        </TouchableOpacity>
      </Content>
      <Modalize
        ref={modalizeRef}
        modalStyle={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        modalHeight={500}
      >
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
        <FlatList data={openDriver && driverList} renderItem={({ item }) => <DriverItem item={item} onPress={_handleChooseDriver} />} />

        <Text
          style={[
            styles.text_footer,
            {
              color: COLORS.text,
              marginTop: 35,
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
        <FlatList data={openVehicle && vehicleList} renderItem={({ item }) => <VehicleItem item={item} onPress={_handleChooseVehicle} />} />

        <TouchableOpacity onPress={_handleApprovedContract}>
          <Text>Sex</Text>
        </TouchableOpacity>
      </Modalize>
    </Layout>
  );
};

export default AllCargoDetail;

const OffersDesciraption = ({ item }) => {
  return (
    <View>
      <Text>{item.step.address}</Text>
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
