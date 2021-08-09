import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch, useStore } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
import { FAB } from "react-native-paper";
import { FlatList } from "react-native";
import { List } from "react-native-paper";
import { ListItem } from "react-native-elements";
import Layout from "../../components/Layout";
import styles from "./styles";
import {
  Fontisto,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { driverGetByShipper } from "../../business/actions/shipper";
import { Divider } from "react-native-paper";
import { Modalize } from "react-native-modalize";
import moment from "moment";

const { width, height } = Dimensions.get("window");
const DriverScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const modalizeRef = useRef(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
  const { driverGetAllShipperResult, driverGetAllShipperLoading } = useSelector(
    (x) => x.shipper
  );

  useEffect(() => {
    _getDriverList();
    return () => {};
  }, []);

  const _getDriverList = async () => {
    dispatch(driverGetByShipper());
  };

  return (
    <Layout isBackIcon title="Sürücüler">
      <View style={{ flex: 1 }}>
        {driverGetAllShipperResult.data == "" ? (
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            Sürücünüz Bulunmamaktadır
          </Text>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                tintColor={COLORS.primary}
                refreshing={driverGetAllShipperLoading}
                onRefresh={_getDriverList}
              />
            }
            data={driverGetAllShipperResult.data}
            keyExtractor={(item, index) => item.driver.id.toString()}
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
        onPress={() => navigation.navigate("CreateDriver", { driver: null })}
      />
    </Layout>
  );
};

const RenderList = ({ item, modalizeRef, onOpen, onClose }) => {
  const navigation = useNavigation();
  return (
    // <List.Section style={styles.listContainer}>
    //   <List.Accordion
    //     title={`${item.driver.firstname} ${item.driver.lastname}`}
    //     titleStyle={{ color: COLORS.text, fontWeight: "bold", fontSize: 15 }}
    //     left={(props) => (
    //       <Image
    //         style={{ width: 40, height: 40, borderRadius: 40, marginRight: 5 }}
    //         source={{
    //           uri: "https://my.inetrum.com/Home/GetImage?Text=T",
    //         }}
    //       />
    //     )}
    //     right={(props) => (
    //       <View
    //         style={{
    //           flexDirection: "row",
    //           alignItems: "center",
    //           padding: 5,
    //           borderRadius: 5,
    //           backgroundColor:
    //             item.driver.status === 20
    //               ? "#F49917"
    //               : item.driver.status === 30
    //               ? "#23BF08"
    //               : item.driver.status === 40
    //               ? "#DC3545"
    //               : item.driver.status === 50
    //               ? "#DC3545" === 10
    //               : "#0866C6",
    //         }}
    //       >
    //         <View>
    //           <Text style={{ color: "#fff", fontWeight: "500" }}>
    //             {item.driver.status === 20
    //               ? "İnceleniyor"
    //               : item.driver.status === 30
    //               ? "Aktif"
    //               : item.driver.status === 40
    //               ? "Reddedildi"
    //               : item.driver.status === 50
    //               ? "Pasif"
    //               : item.driver.status === 10
    //               ? "Tamamlayınız"
    //               : null}
    //           </Text>
    //         </View>
    //       </View>
    //     )}
    //   >
    //     <Divider />
    //     <View>
    //       <Text>sdsdasasa</Text>
    //     </View>
    //   </List.Accordion>
    // </List.Section>
    <View>
      <TouchableOpacity
        style={styles.listContainer}
        activeOpacity={0.8}
        onPress={onOpen}
      >
        <View style={styles.card}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 40 }}
              source={{
                uri: "https://my.inetrum.com/Home/GetImage?Text=T",
              }}
            />
            <Text style={{ marginLeft: 10, color: COLORS.text }}>
              {item.driver.firstname} {item.driver.lastname}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              borderRadius: 5,
              backgroundColor:
                item.driver.status === 20
                  ? "#F49917"
                  : item.driver.status === 30
                  ? "#23BF08"
                  : item.driver.status === 40
                  ? "#DC3545"
                  : item.driver.status === 50
                  ? "#DC3545" === 10
                  : "#0866C6",
            }}
          >
            <View>
              <Text style={{ color: "#fff", fontWeight: "500" }}>
                {item.driver.status === 20
                  ? "İnceleniyor"
                  : item.driver.status === 30
                  ? "Aktif"
                  : item.driver.status === 40
                  ? "Reddedildi"
                  : item.driver.status === 50
                  ? "Pasif"
                  : item.driver.status === 10
                  ? "Tamamlayınız"
                  : null}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        modalHeight={height * 0.8}
        modalStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,

          backgroundColor: "#F1F2F4",
        }}
        handlePosition="inside"
        handleStyle={{ height: 15 }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <Image
              style={styles.img}
              source={{
                uri: "https://my.inetrum.com/Home/GetImage?Text=T",
              }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <View style={styles.listes}>
              <Text style={styles.baslik}>
                Adı Soyadı :{" "}
                <Text style={styles.title}>
                  {item.driver.firstname} {item.driver.lastname}
                </Text>
              </Text>
            </View>
            <View style={styles.listes}>
              <Text style={styles.baslik}>
                mail :{" "}
                <Text style={styles.title}> {item.driver.emailAddress}</Text>
              </Text>
            </View>
            <View style={styles.listes}>
              <Text style={styles.baslik}>
                Doğum Tarihi :{" "}
                <Text style={styles.title}>
                  {" "}
                  {moment(item.driver.birthdate).format("DD MMMM YYYY")}
                </Text>
              </Text>
            </View>
            <View style={styles.listes}>
              <Text style={styles.baslik}>
                Cinsiyet:{" "}
                <Text style={styles.title}>
                  {item.driver.gender ? "Erkek" : "Kadın"}
                </Text>
              </Text>
            </View>
            <View style={styles.listes}>
              <Text style={styles.baslik}>
                Telefon Numarası:{" "}
                <Text style={styles.title}>{item.driver.phoneNumber}</Text>
              </Text>
            </View>
            <View style={styles.docView}>
              <Ionicons
                name="ios-document-text-sharp"
                size={20}
                color={COLORS.text}
              />
              <Text style={styles.documents}>Dökümanlar</Text>
            </View>
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
                {/* <Feather name="upload" size={24} color={COLORS.gray} /> */}
              </View>
              <View style={styles.docItems}>
                <AntDesign name="file1" size={24} color={COLORS.primary} />
                <Text style={styles.docText}>Fotoğraf</Text>
                {/*  */}
              </View>
            </View>
          </View>
        </View>
      </Modalize>
    </View>
  );
};

export default DriverScreen;
