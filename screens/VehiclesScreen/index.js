import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import Layout from "../../components/Layout";
import { FAB } from "react-native-paper";
import COLORS from "../../constans/colors";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { vehiclesGetByShipper } from "../../business/actions/shipper";
import { useNavigation } from "@react-navigation/native";

import {
  FontAwesome5,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import Modal from "react-native-modal";
import { Content } from "native-base";

const index = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const modalizeRef = useRef(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
  const { vehiclesGetByShipperResult, vehiclesGetByShipperLoading } =
    useSelector((x) => x.shipper);

  useEffect(() => {
    _getVehiclesList();
    return () => {};
  }, []);

  const _getVehiclesList = async () => {
    dispatch(vehiclesGetByShipper());
  };

  return (
    <Layout title="Araçlar" isBackIcon>
      <View style={{ flex: 1 }}>
        {vehiclesGetByShipperResult.data == "" ? (
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            Sürücünüz Bulunmamaktadır
          </Text>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                tintColor={COLORS.primary}
                refreshing={vehiclesGetByShipperLoading}
                onRefresh={_getVehiclesList}
              />
            }
            keyExtractor={(item, index) => index.toString()}
            data={vehiclesGetByShipperResult.data}
            renderItem={({ item }) => (
              <RenderList
                item={item}
                modalizeRef={modalizeRef}
                onOpen={onOpen}
                onClose={onClose}
              />
            )}
          />
        )}
      </View>
      <FAB
        style={styles.fab}
        medium
        icon="plus"
        color="#fff"
        onPress={() => navigation.navigate("CreateVehicles")}
      />
    </Layout>
  );
};

const RenderList = ({ item }) => {
  // console.log(item.vehicle.status);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.listContainer}
        activeOpacity={0.8}
        onPress={toggleModal}
      >
        <View style={styles.card}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <View style={styles.iconModel}>
              <MaterialCommunityIcons
                    name="card-account-details-star"
                    size={20}
                  />
                <Text style={{ marginLeft: 10, color: COLORS.text,fontWeight: 'bold', }}>
                  {item.vehicle.plate}
                </Text>
              </View>
              <View style={styles.modelNames}>
              <MaterialCommunityIcons name="car-info" size={20} />
                <Text style={{ marginRight: 5 }}>  {item.brand.brandName}</Text>
                <Text>{item.model.modelName}</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor:
                  item.vehicle.status === 20
                    ? "#F49917"
                    : item.vehicle.status === 30
                    ? "#23BF08"
                    : item.vehicle.status === 40
                    ? "#DC3545"
                    : item.vehicle.status === 50
                    ? "#DC3545"
                    : item.vehicle.status === 10
                    ? "#0866C6"
                    : null,
                justifyContent: "center",
                alignItems: "center",
                width: 90,
                height: 40,
                borderRadius: 4,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                {item.vehicle.status === 20
                  ? "İnceleniyor"
                  : item.vehicle.status === 30
                  ? "Onaylı"
                  : item.vehicle.status === 40
                  ? "Reddedildi"
                  : item.vehicle.status === 50
                  ? "Pasif"
                  : item.vehicle.status === 10
                  ? "Tamamlayınız"
                  : null}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        swipeDirection={["down"]}
        style={styles.view}
        backdropColor={
          item.vehicle.status === 20
            ? "#F49917"
            : item.vehicle.status === 30
            ? "#23BF08"
            : item.vehicle.status === 40
            ? "#DC3545"
            : item.vehicle.status === 50
            ? "#DC3545"
            : item.vehicle.status === 10
            ? "#0866C6"
            : null
        }
      >
        <View style={{ flex: 1 }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                // alignItems: "center",
              }}
              onPress={toggleModal}
            >
              <AntDesign name="closecircle" color="#fff" size={20} />
            </TouchableOpacity>
            <View style={styles.modelTxt}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                Araç Detay
              </Text>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
          <View style={styles.modalRds}>
            <Content>
              <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <View style={styles.container}>
                  <MaterialCommunityIcons name="car-info" size={20} />
                  <Text style={styles.subtitle}>{item.brand.brandName}</Text>
                </View>

                <View style={styles.container}>
                  <MaterialCommunityIcons name="tag-text" size={20} />
                  <Text style={styles.subtitle}>{item.model.modelName}</Text>
                </View>
                <View style={styles.container}>
                  <MaterialCommunityIcons
                    name="card-account-details-star"
                    size={20}
                  />
                  <Text style={styles.subtitle}>{item.vehicle.plate}</Text>
                </View>
                <View style={styles.container}>
                  <Text style={styles.title}>
                    Hacim :{" "}
                    <Text style={styles.subtitle}> {item.model.desi}</Text>
                  </Text>
                </View>
                <View style={styles.docView}>
                  <Ionicons
                    name="ios-document-text-sharp"
                    size={20}
                    color={COLORS.text}
                  />
                  <Text style={styles.documents}>Dokümanlar</Text>
                </View>
                <View tyle={styles.container}>
                  <View style={{ backgroundColor: "#fff", paddingBottom: 20 }}>
                    <View style={styles.docItemsUpload}>
                      <View style={styles.notUploaded}>
                        <AntDesign
                          name="clouduploado"
                          size={24}
                          color={COLORS.gray}
                        />
                        <Text style={styles.docText}>Ehliyet</Text>
                      </View>
                    </View>
                    <View style={styles.docItems}>
                      <AntDesign
                        name="file1"
                        size={24}
                        color={COLORS.primary}
                      />
                      <Text style={styles.docText}>Fotoğraf</Text>
                      {/*  */}
                    </View>
                  </View>
                </View>
              </View>
            </Content>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default index;
