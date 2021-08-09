import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  useNavigation,
  useIsFocused,
  useRoute,
} from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { shipperOrdersGetOrdersIdByQrcode } from "../business/actions/shipper";
import useStateWithCallback from "use-state-with-callback";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

let oncekiKarekod = "";
const BracodeScanner = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [karekodOkunuyor, setKarekodOkunuyor] = useStateWithCallback(
    false,
    (newValue) => {
      if (newValue) {
        setTimeout(() => {
          setKarekodOkunuyor(false);
        }, 3000);
      }
    }
  );

  const {
    shipperOrdersGetOrdersIdByQrCodeResult,
    shipperOrdersGetOrdersIdByQrCodeLoading,
  } = useSelector((x) => x.shipper);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (data && karekodOkunuyor === false && oncekiKarekod !== data) {
      oncekiKarekod = data;
      let qrCode = data;
      setKarekodOkunuyor(true);
      dispatch(
        shipperOrdersGetOrdersIdByQrcode({
          qrcode: data,
        })
      ).then(({ payload: { data } }) => {
        if (data && data.data) {
          navigation.navigate("MyTaskShipperDetailScreen", {
            orderDetail: { orderID: data.data },
            qrCodeScreen: true,
            qrcode: qrCode,
            autoPickUp: route.params.autoPickUp,
          });
        } else {
          alert("Görev Bulunamadı");
        }
      });
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      {/* <LinearGradient style={styles.container} colors={["#f17915", "#f6b042"]}> */}
      {/* <StatusBar hidden /> */}

      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={{ flex: 1 }}
      />

      <View
        style={[
          {
            position: "absolute",
            flex: 1,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            borderTopWidth: windowHeight / 2 - 90,
            borderBottomWidth: windowHeight / 2 - 90,
            borderLeftWidth: windowWidth / 2 - 100,
            borderRightWidth: windowWidth / 2 - 100,
            borderColor: "rgba(52, 52, 52, 0.6)",
          },
        ]}
      >
        <Text
          style={{
            color: "white",
            position: "absolute",
            bottom: -30,
          }}
        >
          Barkodu bu kutu içine getiriniz
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "white",
            position: "absolute",
            bottom: -100,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text>İptal</Text>
        </TouchableOpacity>
      </View>
      {/* </LinearGradient> */}
    </>
  );
};

export default BracodeScanner;

const styles = StyleSheet.create({
  scanContainer: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    borderTopWidth: windowHeight / 2 - 90,
    borderBottomWidth: windowHeight / 2 - 90,
    borderLeftWidth: windowWidth / 2 - 100,
    borderRightWidth: windowWidth / 2 - 100,
    borderColor: "rgba(52, 52, 52, 0.6)",
  },
  scanTxt: {
    color: "white",
    position: "absolute",
    bottom: -30,
  },
});
