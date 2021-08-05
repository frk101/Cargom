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
import { MaterialCommunityIcons, Feather } from "react-native-vector-icons";
import Layout from "../../components/Layout";
import { Divider } from "react-native-paper";

import COLORS from "../../constans/colors";

const { width, height } = Dimensions.get("window");
const MyTaskShipperDetailSecreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  console.log(route.params.orderDetail.orderID);

  const navigation = useNavigation();
  const { shipperOrdersGetByIdResult, shipperOrdersGetByIdLoading } =
    useSelector((x) => x.shipper);

  useEffect(() => {
    _getShipperTaskDetail();
    return () => {};
  }, [route.params.orderDetail.orderIDd]);

  const _getShipperTaskDetail = async () => {
    dispatch(shipperOrdersgetById(route.params.orderDetail.orderID));
  };

  if (shipperOrdersGetByIdLoading) return <ActivityIndicator />;
  return (
    <Layout title="Görev Detay">
      <Content style={{ backgroundColor: "#F1F2F4" }}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="account-circle" size={30} />
          <Text style={styles.txtBaslik}>Gönderici Bilgileri</Text>
        </View>
        <View style={styles.list}>
          {/* <View style={{ marginHorizontal: 20 }}>
            <Text>Ad Soyad</Text>
            <Text>
              {shipperOrdersGetByIdResult &&
                shipperOrdersGetByIdResult.data &&
                shipperOrdersGetByIdResult.data.order &&
                shipperOrdersGetByIdResult.data.order.firstname}
              {"  "}
              {shipperOrdersGetByIdResult &&
                shipperOrdersGetByIdResult.data &&
                shipperOrdersGetByIdResult.data.order &&
                shipperOrdersGetByIdResult.data.order.lastname}
            </Text>
            <Divider />
            <Text>E-posta</Text>
            <Text>
              {shipperOrdersGetByIdResult &&
                shipperOrdersGetByIdResult.data &&
                shipperOrdersGetByIdResult.data.order &&
                shipperOrdersGetByIdResult.data.order.email}
            </Text>
            <Divider />
            <Text>Cep Telefonu</Text>
            <Text>
              {shipperOrdersGetByIdResult &&
                shipperOrdersGetByIdResult.data &&
                shipperOrdersGetByIdResult.data.order &&
                shipperOrdersGetByIdResult.data.order.phoneNumber}
            </Text>

            <Divider />
            <Text>Adres</Text>
            <Text>
              {shipperOrdersGetByIdResult &&
                shipperOrdersGetByIdResult.data &&
                shipperOrdersGetByIdResult.data.order &&
                shipperOrdersGetByIdResult.data.order.address}
              {shipperOrdersGetByIdResult &&
                shipperOrdersGetByIdResult.data &&
                shipperOrdersGetByIdResult.data.order &&
                shipperOrdersGetByIdResult.data.order.address}
            </Text>
            <Divider />
          </View> */}
        </View>
      </Content>
    </Layout>
  );
};

export default MyTaskShipperDetailSecreen;

const RenderItem = ({ item }) => {
  return <View style={{ backgroundColor: "yellow" }}></View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
  },
  txtBaslik: {
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.text,
    marginLeft: 20,
  },
  list: {
    width: width - 40,
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
  },
});
