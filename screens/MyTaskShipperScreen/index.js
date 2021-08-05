import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { shipperOrdersGetAllMyOrders } from "../../business/actions/shipper";
import Layout from "../../components/Layout";
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

  return (
    <Layout title="Görevlerim" isBackIcon>
      <FlatList
        data={dataList}
        keyExtractor={(item) => item.order.id.toString()}
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
      <Text>{item.order.firstname}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("MyTaskShipperDetailScreen", {
            orderDetail: item,
          })
        }
      >
        <Text>Detayı Gör</Text>
      </TouchableOpacity>
    </View>
  );
};
export default index;

const styles = StyleSheet.create({});
