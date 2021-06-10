import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Left, Right, Body, Title } from "native-base";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Platform,
  SafeAreaView,
} from "react-native";

import { DrawerActions, useNavigation } from "@react-navigation/native";

import Colors from "../constans/colors";

const Layout = ({
  children,
  title,
  left,
  leftOnPress,
  body,
  isBackIcon,
  containerStyle,
  filter,
}) => {
  const navigation = useNavigation();

  return (
    <>
      <Container style={containerStyle}>
        <SafeAreaView style={[styles.headerStyle]}>
          <View style={{ flex: 1, alignItems: "center" }}>
            {
              React.isValidElement(left) ? (
                left
              ) : isBackIcon ? (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
                >
                  <Ionicons
                    name="ios-arrow-back"
                    style={{ paddingHorizontal: 10, color: "black" }}
                    size={24}
                    color={Colors.themeColor}
                  />
                </TouchableOpacity>
              ) : null
              // <TouchableOpacity
              //     onPress={() => {
              //       if (leftOnPress) leftOnPress();
              //       else navigation.dispatch(DrawerActions.toggleDrawer());
              //     }}
              //     hitSlop={{
              //       bottom: 10,
              //       left: 10,
              //       right: 10,
              //       top: 10,
              //     }}
              //   >
              //     <Image
              //       source={require("../assets/logo_mavi.png")}
              //       style={{ width: 30, height: 15 }}
              //       resizeMode="contain"
              //     />
              //   </TouchableOpacity>
            }
          </View>
          <View style={{ flex: 4, alignItems: "center" }}>
            {body && React.isValidElement(body) ? body : <Text>{title}</Text>}
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            {React.isValidElement(left)}
          </View>
        </SafeAreaView>
        {children}
      </Container>
    </>
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
    height: 100,
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
});
