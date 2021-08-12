import React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

///Screens
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import CorpHomeScreen from "../screens/ShipperHomeScreen/CorpHomeScreen";
import DriverHomeScreen from "../screens/DriverHomeScreen/index";
import DriverScreen from "../screens/DriverScreen/DriverScreen";
import OtpScreens from "../screens/OtpScreen/OtpScreens";
import AllCargoScreen from "../screens/AllCargoScreen/AllCargoScreen";
import AllCargoDetail from "../screens/AllCargoScreen/AllCargoDetail";
import { DrawerContent } from "../screens/Drawer/DrawerContent";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import ProfileEditScreen from "../screens/ProfileEditScreen/ProfileEditScreen";
import OffersScreeen from "../screens/OffersScreen/OffersScreeen";
import Kurumsal from "../screens/RegisterKurumsal/Kurumsal";
import Bireysel from "../screens/RegisterBireysel/Bireysel";
import MyTaskDriverScreen from "../screens/MyTaskDriverScreen";
import MyTaskShipperScreen from "../screens/MyTaskShipperScreen";
import StepCargo from "../deneme/StepCargo";
import VehiclesScreen from "../screens/VehiclesScreen";
import CreateDriver from "../screens/CreateDriver/createDriver";
import CreateVehicles from "../screens/CreateVehicles/CreateVehicles";
import OffersDetailScreen from "../screens/OffersDetailScreen";
import MyTaskShipperDetailScreen from "../screens/MyTaskShipperDetailSecreen";
import MyOffersScreeen from "../screens/MyOffersScreen";
import MyOfferDetailScreeen from "../screens/MyOffersDetailScreens";
import PaymentScreen from '../screens/PaymentsScreen'
import BarCodeScanner from "../screens/BracodeScanner";
import DriverLogin from "../screens/LoginDriver";
import QrCodeScreen from "../screens/QrCode";

const LoginStack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="SplashScreen" component={SplashScreen} />
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="DriverLogin" component={DriverLogin} />
      <LoginStack.Screen name="Kurumsal" component={Kurumsal} />
      <LoginStack.Screen name="Bireysel" component={Bireysel} />
      <HomeStack.Screen name="OtpScreens" component={OtpScreens} />
    </LoginStack.Navigator>
  );
};

const HomeStack = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      headerMode="none"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{ width: "75%" }}
    >
      <HomeStack.Screen name="CorpHomeScreen" component={CorpHomeScreen}  />

      <HomeStack.Screen name="DriverScreen" component={DriverScreen} />
      <HomeStack.Screen name="AllCargoScreen" component={AllCargoScreen} />
      <HomeStack.Screen name="AllCargoDetail" component={AllCargoDetail} />

      <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <HomeStack.Screen name="MyOffersScreeen" component={MyOffersScreeen} />
      <HomeStack.Screen name="MyOfferDetailScreeen" component={MyOfferDetailScreeen} />
      <HomeStack.Screen
        name="ProfileEditScreen"
        component={ProfileEditScreen}
      />
      <HomeStack.Screen name="OffersScreeen" component={OffersScreeen} />

      <HomeStack.Screen name="MyTaskScreen" component={MyTaskShipperScreen} />
      <HomeStack.Screen
        name="MyTaskShipperDetailScreen"
        component={MyTaskShipperDetailScreen}
      />
      <HomeStack.Screen name="QrCodeScreen" component={QrCodeScreen} />
      <HomeStack.Screen name="BarCodeScanner" component={BarCodeScanner} />
      <HomeStack.Screen name="VehiclesScreen" component={VehiclesScreen} />
      <HomeStack.Screen name="CreateDriver" component={CreateDriver} />
      <HomeStack.Screen name="CreateVehicles" component={CreateVehicles} />
      <HomeStack.Screen name="PaymentScreen" component={PaymentScreen} />
      <HomeStack.Screen
        name="OffersDetailScreen"
        component={OffersDetailScreen}
      />

      <HomeStack.Screen name="StepCargo" component={StepCargo} />
      {/* <HomeStack.Screen name="DriverHomeScreen" component={DriverHomeScreen} /> */}
    </HomeStack.Navigator>
  );
};

const DriverHome = createStackNavigator();

const DriverHomeNavigator = () => {
  return (
    <DriverHome.Navigator headerMode="none">
      <DriverHome.Screen name="DriverHomeScreen" component={DriverHomeScreen} />
      <DriverHome.Screen
        name="MyTaskShipperDetailScreen"
        component={MyTaskShipperDetailScreen}
      />
      <DriverHome.Screen name="QrCodeScreen" component={QrCodeScreen} />
      <DriverHome.Screen
        name="MyTaskDriverScreen"
        component={MyTaskDriverScreen}
      />
      <DriverHome.Screen name="MyOffersScreeen" component={MyOffersScreeen}/>
      <DriverHome.Screen name="MyOfferDetailScreeen" component={MyOfferDetailScreeen}/>
      <DriverHome.Screen name="BarCodeScanner" component={BarCodeScanner} />
    </DriverHome.Navigator>
  );
};

const Stack = createStackNavigator();

export default function Navigator() {
  const { shipperLoginResult } = useSelector((x) => x.shipper);
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginNavigator} />
        {shipperLoginResult.data && shipperLoginResult.data.userType == 1 ? (
          <Stack.Screen name="MainScreen" component={HomeNavigator} />
        ) : (
          <Stack.Screen name="MainScreen" component={DriverHomeNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
