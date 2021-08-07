import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Image,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import COLORS from "../../constans/colors";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "react-native-vector-icons";

import { ListItem, Divider } from "react-native-elements";
import Layout from "../../components/Layout";
import { driverOrdersGetAllMyOrders } from "../../business/actions/driver";
import styles from "./styles";

const MyTaskScreen = () => {
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
      _getDriverTask();
    }
    return () => {};
  }, [isFocus]);

  const _getDriverTask = async () => {
    const nextPage = pageNumber.current + 1;
    pageNumber.current = nextPage;
    dispatch(driverOrdersGetAllMyOrders(nextPage)).then(
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
  const { driverOrdersGetAllMyOrdersLoading } = useSelector((x) => x.driver);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={styles.menu}>
        <View></View>
        <Image
          source={require("../../assets/shipgeldiLogo-v03-1.png")}
          style={{ width: 140, resizeMode: "contain" }}
        />
        <TouchableOpacity>
          <MaterialCommunityIcons name="qrcode-scan" size={20} />
        </TouchableOpacity>
      </View>
      <Divider />
      <FlatList
        refreshControl={
          <RefreshControl
            tintColor={COLORS.primary}
            refreshing={driverOrdersGetAllMyOrdersLoading}
            onRefresh={_getDriverTask}
          />
        }
        data={dataList}
        keyExtractor={(item) => item.orderID.toString()}
        renderItem={({ item }) => <RenderList item={item} />}
        onEndReached={_getDriverTask}
      />
    </SafeAreaView>
  );
};

const RenderList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.listGrupContainer}
        onPress={() =>
          navigation.navigate("MyTaskDriverDetailScreen", {
            orderDetail: item,
          })
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
              <Ionicons
                name="locate-outline"
                size={24}
                color={COLORS.primary}
              />
              <Text style={styles.txt}>
                {" "}
                Varış :{" "}
                <Text style={{ color: COLORS.gray }}>{item.endAddress}</Text>
              </Text>
            </View>
          </View>

          <ListItem.Content>
            <Text></Text>
          </ListItem.Content>
          <View style={styles.durumContainer}>
            <View
              style={[
                styles.durumColor,
                {
                  backgroundColor:
                    item.status === 20
                      ? "#0866C6"
                      : item.status === 30
                      ? "#F49917"
                      : item.status === 40
                      ? "#23BF08"
                      : item.status === 50
                      ? "#DC3545"
                      : "#23BF08",

                  borderColor:
                    item.status === 20
                      ? "#DC3545"
                      : item.status === 30
                      ? "#F49917"
                      : item.status === 40
                      ? "#6c757d"
                      : item.status === 50
                      ? "#0866C6"
                      : "#23BF08",
                },
              ]}
            >
              <Text style={styles.durum}>
                {item.status === 20
                  ? "Bekliyor"
                  : item.status === 30
                  ? "Yolda"
                  : item.status === 40
                  ? "Teslim"
                  : item.status === 50
                  ? "İptal"
                  : "Boşta"}
              </Text>
            </View>
            {/* <ListItem.Title style={styles.price}>{item.price} ₺</ListItem.Title> */}
          </View>
        </ListItem>
      </TouchableOpacity>
    </View>
  );
};
export default MyTaskScreen;
