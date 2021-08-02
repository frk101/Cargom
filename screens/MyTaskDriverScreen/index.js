import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import COLORS from "../../constans/colors";
import { ListItem } from "react-native-elements";
import Layout from "../../components/Layout";
import { driverOrdersGetAllMyOrders } from "../../business/actions/driver";
import styles from "./styles";

const MyTaskScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    driverOrdersGetAllMyOrdersResult,
    driverOrdersGetAllMyOrdersLoading,
  } = useSelector((x) => x.driver);

  useEffect(() => {
    _getShipperTask();
    return () => {};
  }, []);

  const _getShipperTask = async () => {
    dispatch(driverOrdersGetAllMyOrders()).then((x) => {
      console.log(x);
    });
  };

  return (
    <Layout isBackIcon title="Görevlerim">
      <Text>Driver</Text>

      <FlatList
        data={driverOrdersGetAllMyOrdersResult}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <RenderList item={item} />}
      />
    </Layout>
  );
};
const renderItem = ({ item }) => {
  return (
    <View style={styles.itemWrapperStyle}>
      <Text>dsasdasa</Text>
      {/* <Image
        style={styles.itemImageStyle}
        source={{ uri: item.picture.large }}
      />
      <View style={styles.contentWrapperStyle}>
        <Text
          style={styles.txtNameStyle}
        >{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
        <Text style={styles.txtEmailStyle}>{item.email}</Text>
      </View> */}
    </View>
  );
};

const RenderList = ({ item }) => {
  console.log("sss", item);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() => navigation.navigate("CreateDriver", item)}
    >
      <ListItem bottomDivider>
        {/* {item.driver.isApproved ? (
          item.driver.gender == true ? (
            <Fontisto name="male" color={COLORS.gray} size={30} />
          ) : (
            <Fontisto name="female" color={COLORS.gray} size={30} />
          )
        ) : (
          <AntDesign name="hourglass" size={24} color={COLORS.primary} />
        )} */}

        <ListItem.Content>
          <ListItem.Title>
            {/* {item.driver.firstname} {item.driver.lastname}{" "} */}
            {/* {item.driver.isApproved ? "Onaylı" : "Onaysız"} */}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
};
export default MyTaskScreen;
