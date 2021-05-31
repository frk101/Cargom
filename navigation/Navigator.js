import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

///Screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import FileUploadScreen from "../screens/FileUploadScreen";
import CorpHomeScreen from "../screens/CorpHomeScreen";
import DriverScreen from "../screens/DrawerDetail/DriverScreen";
import OtpScreens from "../screens/OtpScreens";
import AllCargoScreen from "../screens/DrawerDetail/AllCargo/AllCargoScreen";
import AllCargoDetail from "../screens/DrawerDetail/AllCargo/AllCargoDetail";
import { DrawerContent } from "../screens/Drawer/DrawerContent";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import ProfileEditScreen from "../screens/Profile/ProfileEditScreen";
import OffersScreeen from "../screens/DrawerDetail/OffersScreeen";
import Kurumsal from "../screens/Registrer/Kurumsal";
import Bireysel from "../screens/Registrer/Bireysel";
import MyTaskScreen from "../screens/DrawerDetail/MyTaskScreen";
import StepCargo from "../deneme/StepCargo";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="FileUploadScreen" component={FileUploadScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="CorpHomeScreen" component={CorpHomeScreen} />
        <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
        <Stack.Screen name="DriverScreen" component={DriverScreen} />
        <Stack.Screen name="AllCargoScreen" component={AllCargoScreen} />
        <Stack.Screen name="AllCargoDetail" component={AllCargoDetail} />
        <Stack.Screen name="OtpScreens" component={OtpScreens} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ProfileEditScreen" component={ProfileEditScreen} />
        <Stack.Screen name="OffersScreeen" component={OffersScreeen} />
        <Stack.Screen name="Kurumsal" component={Kurumsal} />
        <Stack.Screen name="Bireysel" component={Bireysel} />
        <Stack.Screen name="MyTaskScreen" component={MyTaskScreen} />
        <Stack.Screen name="StepCargo" component={StepCargo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{ width: "75%" }}
    >
      <Drawer.Screen name="CorpHomeScreen" component={CorpHomeScreen} />
    </Drawer.Navigator>
  );
};
