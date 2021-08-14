import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
import { FAB } from "react-native-paper";
import { FlatList } from "react-native";
import Layout from "../../components/Layout";
import styles from "./styles";
import { AntDesign, Ionicons } from "react-native-vector-icons";
import { driverGetByShipper } from "../../business/actions/shipper";
import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import moment from "moment";
import { ScrollView as Content } from "native-base";                                 
import { initialWindowMetrics } from "react-native-safe-area-context";

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
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}> 
          <FontAwesome
                  name="drivers-license-o"
                  size={100}
                  color={COLORS.lightGray}
                 
                />
          <Text style={{ justifyContent: "center", alignItems: "center",color:COLORS.gray }}>
          Sürücünüz Bulunmamaktadır
        </Text> 
      
        </View>     
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

const RenderList = ({ item }) => {
  const navigation = useNavigation();
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 40 }}
              source={{
                uri: item.driver.photoUrl,
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
                  ? "Onaylı"
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
      <Modal
        isVisible={isModalVisible}
        swipeDirection={["down"]}
        style={styles.view}
        onSwipeComplete={() => setModalVisible(false)}
        backdropColor={
          item.driver.status === 20
            ? "#F49917"
            : item.driver.status === 30
            ? "#23BF08"
            : item.driver.status === 40
            ? "#DC3545"
            : item.driver.status === 50
            ? "#DC3545" === 10
            : "#0866C6"
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
            <View style={styles.modaltxtContainer}>
              <Text style={styles.modaltxt}>Sürücü Detay</Text>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
          <View style={styles.modalRds}>
            <Content>
              <View style={{ alignItems: "center", marginTop: 40 }}>
                <Image
                  style={styles.img}
                  source={{
                    uri: item.driver.photoUrl,
                  }}
                />
              </View>
              <View style={{ marginHorizontal: 20 }}>
                <View style={styles.listes}>
                  <Text style={styles.baslik}>
                    Ad Soyad :{" "}
                    <Text style={styles.title}>
                      {item.driver.firstname} {item.driver.lastname}
                    </Text>
                  </Text>
                </View>
                <View style={styles.listes}>
                  <Text style={styles.baslik}>
                    Telefon :{" "}
                    <Text style={styles.title}>{item.driver.phoneNumber}</Text>
                  </Text>
                </View>
                <View style={styles.listes}>
                  <Text style={styles.baslik}>
                    E-posta :{" "}
                    <Text style={styles.title}>
                      {" "}
                      {item.driver.emailAddress}
                    </Text>
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
            
                <View style={styles.docView}>
                  <Ionicons
                    name="ios-document-text-sharp"
                    size={20}
                    color={COLORS.text}
                  />
                  <Text style={styles.documents}>Dokümanlar</Text>
                </View>
              
                <View style={{ backgroundColor: "#fff", paddingBottom: 20 }}>
                {item.documents.map(x=>{
                  
                  return  (
                  <View style={styles.docItemsUpload}> 
                  
 <Text>{x.type.description}</Text>
 {x.document == null ?  <TouchableOpacity onPress={() => {
  toggleModal();
    }}
    onPressIn={() => {
      navigation.navigate("WebView", {
        title: "Sürücü Detay",  url:"?"
       
      })
    }}>
  <AntDesign
                        name="clouduploado"
                        size={24}
                        color={COLORS.gray}
                      />
 </TouchableOpacity> :   <AntDesign
                      name="checkcircle"
                      color=  "#23BF08"  
                      size={25}
                      style={{ margin: 5 }}
                    />}
                       
                  </View>
                  
                 
                  )})}
         
                </View>
              </View>
            </Content>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DriverScreen;
