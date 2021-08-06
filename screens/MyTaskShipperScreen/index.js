import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import COLORS from "../../constans/colors";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { ListItem } from "react-native-elements";
import { shipperOrdersGetAllMyOrders } from "../../business/actions/shipper";
import Layout from "../../components/Layout";
import styles from "./styles";
const index = () => {
  const isFocus = useIsFocused();
  const pageNumber = useRef(-1);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (!isFocus) {
      pageNumber.current = -1;
      setDataList([]);
    } else {
      _getShipperTask();
    }
    return () => {};
  }, [isFocus]);

  const _getShipperTask = async () => {
    const nextPage = pageNumber.current + 1;
    pageNumber.current = nextPage;
    dispatch(shipperOrdersGetAllMyOrders(nextPage)).then(
      ({ payload: { data } }) => {
        if (
          data &&
          data.data &&
          data.data.length != undefined &&
          data.data.length > 0
        ) {
          setDataList([...dataList, ...data.data]);
        }
      }
    );
  };
  const { shipperOrdersGetAllMyOrdersLoading } = useSelector((x) => x.shipper);
  return (
    <Layout title="Görevlerim" isBackIcon right={<LayoutRight1 />}>
      <FlatList
        refreshControl={
          <RefreshControl
            tintColor={COLORS.primary}
            refreshing={shipperOrdersGetAllMyOrdersLoading}
            onRefresh={_getShipperTask}
          />
        }
        data={dataList}
        keyExtractor={(item) => item.orderID.toString()}
        renderItem={({ item }) => <RenderList item={item} />}
        onEndReached={_getShipperTask}
      />
    </Layout>
  );
};

const RenderList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.listGrupContainer}
        onPress={() =>
          navigation.navigate("MyTaskShipperDetailScreen", {
            orderDetail: item,
          })
        }
      >
        <ListItem bottomDivider>
          <FontAwesome5 name="box-open" size={24} color={COLORS.primary} />
          <ListItem.Content>
            <ListItem.Title style={{ color: COLORS.text, fontWeight: "bold" }}>
              {item.startAddress}
            </ListItem.Title>
            <ListItem.Subtitle>{item.endAddress}</ListItem.Subtitle>
            <ListItem.Title style={{ color: COLORS.text }}>
              {item.orderNumber}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Title style={{ color: COLORS.primary, fontWeight: "bold" }}>
            {item.price} ₺
          </ListItem.Title>
        </ListItem>
      </TouchableOpacity>

      {/* <TouchableOpacity
        onPress={() =>
          navigation.navigate("MyTaskShipperDetailScreen", {
            orderDetail: item,
          })
        }
      >
        <Text>Detayı Gör</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const LayoutRight1 = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("BarCodeScanner")}>
      <MaterialCommunityIcons name="qrcode-scan" size={20} />
    </TouchableOpacity>
  );
};
export default index;
