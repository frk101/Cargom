import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { shipperOrdersgetById } from "../../business/actions/shipper";
import { Content } from "native-base";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Layout from "../../components/Layout";

import COLORS from "../../constans/colors";

const { width, height } = Dimensions.get("window");
const MyTaskShipperDetailSecreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const { shipperOrdersGetByIdResult, shipperOrdersGetByIdLoading } =
    useSelector((x) => x.shipper);

  console.log("ssssss", shipperOrdersGetByIdResult);
  useEffect(() => {
    _getShipperTaskDetail();
    return () => {};
  }, [route.params.orderDetail.orderIDd]);

  const _getShipperTaskDetail = async () => {
    dispatch(shipperOrdersgetById(route.params.orderDetail.orderID));
  };

  if (shipperOrdersGetByIdLoading) return <ActivityIndicator />;
  return (
    <Layout title="Görev Detay" isBackIcon>
      <Content style={{ backgroundColor: "#F1F2F4" }}>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="account-circle" size={30} />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: COLORS.text,
              marginLeft: 20,
            }}
          >
            Alıcı Bilgileri
          </Text>
        </View>
        <FlatList
          style={{
            width: width - 40,
            marginTop: 30,
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 20,
          }}
        />
      </Content>

      {/* <Text>
        {shipperOrdersGetByIdResult &&
          shipperOrdersGetByIdResult.data &&
          shipperOrdersGetByIdResult.data.city &&
          shipperOrdersGetByIdResult.data.city.cityName}
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("BarCodeScanner")}>
        <Text> Araca Yükle</Text>
      </TouchableOpacity>
      <FlatList
        data={shipperOrdersGetByIdResult && shipperOrdersGetByIdResult.data}
        renderItem={(item) => <RenderItem item={item} />}
      /> */}
    </Layout>
  );
};
const RenderItem = ({ item }) => {
  console.log(item);
  return <View style={{ backgroundColor: "yellow" }}></View>;
};
export default MyTaskShipperDetailSecreen;

const styles = StyleSheet.create({});
//// data.city.cityName
