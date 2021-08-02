import React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

///Screens
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import CorpHomeScreen from "../screens/HomeScreen/CorpHomeScreen";
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

const LoginStack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="SplashScreen" component={SplashScreen} />
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="Kurumsal" component={Kurumsal} />
      <LoginStack.Screen name="Bireysel" component={Bireysel} />
      <HomeStack.Screen name="OtpScreens" component={OtpScreens} />
    </LoginStack.Navigator>
  );
};

const HomeStack = createDrawerNavigator();

const HomeNavigator = () => {
  const dispatch = useDispatch();
  const { shipperLoginResult } = useSelector((x) => x.shipper);
  return (
    <HomeStack.Navigator
      headerMode="none"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{ width: "75%" }}
    >
      <HomeStack.Screen name="CorpHomeScreen" component={CorpHomeScreen} />
      {/* <HomeNavigator.Screen name="DrawerScreen" component={DrawerScreen} /> */}
      <HomeStack.Screen name="DriverScreen" component={DriverScreen} />
      <HomeStack.Screen name="AllCargoScreen" component={AllCargoScreen} />
      <HomeStack.Screen name="AllCargoDetail" component={AllCargoDetail} />

      <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <HomeStack.Screen
        name="ProfileEditScreen"
        component={ProfileEditScreen}
      />
      <HomeStack.Screen name="OffersScreeen" component={OffersScreeen} />
      {shipperLoginResult &&
      shipperLoginResult.data &&
      shipperLoginResult.data.shipper &&
      shipperLoginResult.data.shipper.shipperType == 2 ? (
        <HomeStack.Screen name="MyTaskScreen" component={MyTaskShipperScreen} />
      ) : (
        <HomeStack.Screen name="MyTaskScreen" component={MyTaskDriverScreen} />
      )}

      <HomeStack.Screen name="VehiclesScreen" component={VehiclesScreen} />
      <HomeStack.Screen name="CreateDriver" component={CreateDriver} />
      <HomeStack.Screen name="CreateVehicles" component={CreateVehicles} />
      <HomeStack.Screen
        name="OffersDetailScreen"
        component={OffersDetailScreen}
      />
      <HomeStack.Screen name="StepCargo" component={StepCargo} />
    </HomeStack.Navigator>
  );
};

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginNavigator} />
        <Stack.Screen name="MainScreen" component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const Drawer = createDrawerNavigator();

// const DrawerScreen = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <DrawerContent {...props} />}
//       drawerStyle={{ width: "75%" }}
//     >
//       <Drawer.Screen name="CorpHomeScreen" component={CorpHomeScreen} />
//     </Drawer.Navigator>
//   );
// };
