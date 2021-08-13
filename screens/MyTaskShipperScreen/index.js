import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
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
import { ListItem } from "react-native-elements";
import { shipperOrdersGetAllMyOrders } from "../../business/actions/shipper";
import Layout from "../../components/Layout";
import styles from "./styles";
import {ScrollView as Content } from "native-base";

const myData = [
  {
    id: 1,
    name: "Hepsi",
  },
  {
    id: 2,
    name: "Yolda",
  },
  {
    id: 3,
    name: "Teslim Edildi",
  },
  {
    id: 4,
    name: "Bekliyor",
  },
];

const index = () => {
  const isFocus = useIsFocused();

  const [filters, setFilters] = useState([
    { id: 1, name: "Hepsi" },
    { id: 2, name: "Yolda" },
    { id: 3, name: "Teslim Edildi" },
    { id: 4, name: "Bekliyor" },
  ]);
  const [selected, setSelected] = useState(filters[0]);

  const callback = (data) => {
    if (selected === data) return setSelected(filters[0]);
    setSelected(data);
  };

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
  // 
  return (
    <Layout title="Kargolarım" isBackIcon right={<LayoutRight1 />}>

<View style={{ flex: 1 }}>
{dataList == "" ? (
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}> 
           <MaterialCommunityIcons name="package-variant" color={COLORS.lightGray} size={100} />

          <Text style={{ justifyContent: "center", alignItems: "center",color:COLORS.gray }}>
          Kargonuz Bulunmamaktadır
        </Text> 
      
        </View>     
        ) : (
<Content    refreshControl={
    <RefreshControl
      tintColor={COLORS.primary}
      refreshing={shipperOrdersGetAllMyOrdersLoading}
      onRefresh={_getShipperTask}
    />
  }>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={70}
        style={styles.chipsScrollView}
        contentInset={{
          // iOS only
          top: 0,
          left: 0,
          bottom: 0,
          right: 20,
        }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingRight: Platform.OS === "android" ? 20 : 0,
        }}
      >
        {filters.map((filter) => (
          <FilterButton
            selected={filter === selected}
            data={filter}
            callback={callback}
            key={filter.id}
          />
        ))}
      </ScrollView>
      <FlatList
        style={{ marginTop: 10 }}
     scrollEnabled={false}
        data={dataList}
        keyExtractor={(item) => item.orderID.toString()}
        renderItem={({ item }) => <RenderList item={item} />}
        onEndReached={_getShipperTask}
      />
      
      </Content>
     )}
</View>
     
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
            qrCodeScreen: false,
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
            <View style={[styles.address, { marginTop: 10, marginLeft: 5 }]}>
              <FontAwesome name="drivers-license-o" size={15} color="#404040" />
              <Text style={[styles.txt, { marginLeft: 5 }]}>
                <Text style={{ color: COLORS.gray, fontSize: 11 }}>
                  {item.driverFirstname} {item.driverLastname}
                </Text>
              </Text>
              <View style={[styles.address, { marginLeft: 20 }]}>
                <FontAwesome5 name="truck-pickup" size={15} color="#404040" />
                <Text style={[styles.txt, { marginLeft: 5 }]}>
                  <Text
                    style={{
                      color: COLORS.gray,
                      fontSize: 11,
                      textAlign: "center",
                    }}
                  >
                    {item.vehiclePlate}
                  </Text>
                </Text>
              </View>
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
                      : item.statusy === 30
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
            <ListItem.Title style={styles.price}>{item.price} ₺</ListItem.Title>
          </View>
        </ListItem>
      </TouchableOpacity>
    </View>
  );
};
const FilterButton = ({ callback, selected, disabled, data }) => {
  return (
    <TouchableOpacity
      style={[
        styles.filterButton,
        {
          backgroundColor: disabled
            ? "lightgrey"
            : selected
            ? COLORS.primary
            : "#fff",
        },
      ]}
      onPress={() => {
        if (callback && !disabled) {
          callback(data);
        }
      }}
    >
      <Text style={[{ color: selected ? "white" : "black" }, styles.kategori]}>
        {data.name}
      </Text>
    </TouchableOpacity>
  );
};
const LayoutRight1 = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("BarCodeScanner", {
          autoPickUp: false,
          qrCodeScreen: false,
        })
      }
    >
      <MaterialCommunityIcons name="qrcode-scan" size={20} />
    </TouchableOpacity>
  );
};
export default index;
