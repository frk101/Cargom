import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { shipperOrdersPıckup } from "../business/actions/shipper";
import { TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const BracodeScanner = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // const { shipperOrdersPickupLoading, shipperOrdersPickupResult } = useSelector(
  //   (x) => x.shipper
  // );

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // useEffect(() => {
  //   _getPickup();
  //   return () => {};
  // }, []);

  // const _getPickup = async () => {
  //   dispatch(shipperOrdersPıckup());
  // };

  return (
    <>
      {/* <LinearGradient style={styles.container} colors={["#f17915", "#f6b042"]}> */}
      {/* <StatusBar hidden /> */}

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
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
