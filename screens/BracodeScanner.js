import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useSelector, useDispatch } from "react-redux";
import { shipperOrdersPıckup } from "../business/actions/shipper";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const BracodeScanner = () => {
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // const { shipperOrdersPickupLoading, shipperOrdersPickupResult } = useSelector(
  //   (x) => x.shipper
  // );

  useEffect(() => {
    // _getPickup();
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
    return <Text>Kamerayı Kullanmak İçin Lütfen İzin Veriniz</Text>;
  }
  if (hasPermission === false) {
    return <Text>Kameraya erişim yok</Text>;
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
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />

      <View style={styles.scanContainer}>
        <Text style={styles.scanTxt}>Karekodu bu kutu içine getiriniz</Text>
      </View>
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
