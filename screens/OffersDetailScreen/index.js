import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ordersGetPendingOfferDetail } from "../../business/actions/driver";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import COLORS from "../../constans/colors";
import styles from "./styles";

const AllCargoDetail = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const { ordersGetPendingOfferDetailResult } = useSelector((x) => x.driver);

  useEffect(() => {
    _handleGetOfferDetail();
    return () => {};
  }, [route.params.id]);

  const _handleGetOfferDetail = () => {
    dispatch(ordersGetPendingOfferDetail(route.params.id));
  };

  return (
    <Layout title="Teklif Detay" isBackIcon>
      <FlatList
        data={
          ordersGetPendingOfferDetailResult &&
          ordersGetPendingOfferDetailResult.data &&
          ordersGetPendingOfferDetailResult.data.steps
        }
        renderItem={({ item }) => <OffersDesciraption item={item} />}
      />
    </Layout>
  );
};

export default AllCargoDetail;

const OffersDesciraption = ({ item }) => {
  console.log(item);
  return <View></View>;
};
