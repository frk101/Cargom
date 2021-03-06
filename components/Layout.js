import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "native-base";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";

import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../constans/colors";
import { Platform } from "react-native";
import { Box, ScrollView } from "native-base";

const Layout = ({
  children,
  title,
  left,
  leftOnPress,
  body,
  isBackIcon,
  containerStyle,
  filter,
  right,
  closeModal,
}) => {
  const navigation = useNavigation();
  const { shipperLoginResult } = useSelector((x) => x.shipper);

  return (
    <View style={{backgroundColor:"#fff"}}>
      <View style={[{height:'100%'},containerStyle]}>
        <SafeAreaView style={[styles.headerStyle]}>
          {shipperLoginResult.data && shipperLoginResult.data.shipper ? (
            <View style={{ flex: 1, alignItems: "center" }}>
              {React.isValidElement(left) ? (
                left
              ) : isBackIcon ? (
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.openDrawer())
                  }
                  hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
                >
                  <MaterialIcons
                    name="menu"
                    style={{ paddingHorizontal: 10, color: "black" }}
                    size={27}
                    color={Colors.themeColor}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign
                    name="left"
                    style={{ paddingHorizontal: 10, color: "black" }}
                    size={24}
                    color={Colors.themeColor}
                  />
                </TouchableOpacity>
              )}
            </View>
          ) : (
            <View style={{ flex: 1, alignItems: "center" }}>
              
            </View>
          )}

          <View style={{ flex: 4, alignItems: "center" }}>
            {body && React.isValidElement(body) ? (
              body
            ) : (
              <Text style={styles.baslik}>{title}</Text>
            )}
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            {React.isValidElement(right) ? right : isBackIcon ? <View /> : null}
          </View>
        </SafeAreaView>
        {children}
      </View>
    </View>
  );
};

Layout.propTypes = {
  searchBar: PropTypes.bool,
  title: PropTypes.string,
  left: PropTypes.element,
  right: PropTypes.element,
  leftOnPress: PropTypes.func,
  headerBackgroundColor: PropTypes.string,
  headerIconColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  customHeader: PropTypes.bool,
  searchText: PropTypes.string,
  body: PropTypes.element,
  isBackIcon: PropTypes.bool,
  closeModal: PropTypes.bool,
  filter: PropTypes.bool,
};

Layout.defaultProps = {
  searchBar: false,
  left: null,
  right: null,
  leftOnPress: null,
  headerBackgroundColor: Colors.themeColor,
  headerIconColor: "white",
  headerTextColor: "white",
  customHeader: false,
  searchText: "Ara",
  body: null,
  isBackIcon: false,
  closeModal: false,
  filter: false,
  containerStyle: {},
};

export default Layout;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchBarInput: {
    flex: 1,
    color: "#878787",
    marginLeft: 10,
    // height: RFValue(30),
  },
  headerStyle: {
    backgroundColor: "#ffffff",
    height: Platform.OS == "ios" ? 100 : 80,
    borderBottomColor: "#ffffff",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  headerStyle1: {},
  headerBodyText: {
    color: "white",
  },
  badge: {
    position: "absolute",
    left: -5,
    top: -5,
    width: 16,
    height: 16,
    backgroundColor: "red",
    borderRadius: 100,
    borderColor: "transparent",
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    padding: 0,
    margin: 0,
    lineHeight: 12,
  },
  baslik: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
  },
});
