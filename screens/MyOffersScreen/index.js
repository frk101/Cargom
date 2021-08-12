import React, { useState, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  Modal,
  RefreshControl,
  View,
  Text,
} from "react-native";
import Layout from "../../components/Layout";
import { shipperOrdersGetMyOffers } from "../../business/actions/shipper";
import COLORS from "../../constans/colors";
import { useSelector, useDispatch } from "react-redux";
import { ListItem } from "react-native-elements";
import { useRoute, useNavigation, useTheme } from "@react-navigation/native";
import {
    FontAwesome5,
    FontAwesome,
    MaterialCommunityIcons,
    Ionicons,
    AntDesign,
    Entypo
  } from "react-native-vector-icons";
  import styles from "./styles";

const MyOffersScreeen = () => {
    const dispatch = useDispatch();

    const { shipperOrdersGetMyOrdersResult, shipperOrdersGetMyOffersLoading } =
    useSelector((x) => x.shipper);

  useEffect(() => {
    _getMyOfferList();
    return () => {};
  }, []);

  const _getMyOfferList = async () => {
    dispatch(shipperOrdersGetMyOffers());
  };

return(
    <Layout title='Görevlerim' isBackIcon>
 <FlatList
        refreshControl={
          <RefreshControl
            tintColor={COLORS.primary}
            refreshing={shipperOrdersGetMyOffersLoading}
            onRefresh={_getMyOfferList}
          />
        }
        style={{ marginTop: 20 }}
        keyExtractor={(item, index) => index.toString()}
        data={shipperOrdersGetMyOrdersResult.data}
        renderItem={({ item }) => <RenderList item={item} />}
      />
    </Layout>
)
}
const RenderList = ({ item }) => {

  const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={styles.listGrupContainer}
        onPress={() =>
          navigation.navigate("MyOfferDetailScreeen", { id: item.id })
        }
      >
        <ListItem bottomDivider>
          <View>
            <View style={styles.locationContainer}>
              <Ionicons name="ios-location" size={24} color={COLORS.primary} />
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                Çıkış :{" "}
                <Text style={{ color: COLORS.gray }}>
                  {item.startAddress}
                </Text>{" "}
              </Text>
            </View>
            <Ionicons
              name="ios-ellipsis-vertical-outline"
              size={24}
              color={COLORS.primary}
            />
            <View style={styles.address}>
              <Ionicons name="locate-outline" size={24} color={COLORS.primary} />
              <Text style={styles.txt}>
                {" "}
                Varış :{" "}
                <Text style={{ color: COLORS.gray }}>
                  {" "}
                  {item.endAddress}
                </Text>
              </Text>
            </View>
            <View style={[styles.address, { marginTop: 10, marginLeft: 5 }]}>
              <MaterialCommunityIcons name="highway" size={15} color="#404040" />
              <Text style={[styles.txt, { marginLeft: 3}]}>
                <Text style={{ color: COLORS.gray, fontSize: 11 }}>
                  {" "}
                  {(item.distance / 10000).toFixed(1)} Km 
                </Text>
              </Text>
              <Entypo name="wallet" color="#404040" size={15}  style={{marginLeft:10}}/>
              <Text style={[styles.txt, { marginLeft: 3 }]}>
                <Text style={{ color: COLORS.gray, fontSize: 11 }}>
                  {" "}
                  {item.price} ₺
                </Text>
              </Text>
            </View>
          </View>
          <ListItem.Content>
            <Text></Text>
          </ListItem.Content>
  
          <View style={styles.durumContainer}>
            <ListItem.Title style={styles.price}>
            {item.complatedSteps} / {item.totalSteps}
            </ListItem.Title>
          </View>
        </ListItem>
      </TouchableOpacity>
    );
  };
export default MyOffersScreeen;