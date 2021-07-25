import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

///Screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/Login/LoginScreen";
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
      <HomeStack.Screen name="MyTaskScreen" component={MyTaskScreen} />
      <HomeStack.Screen name="StepCargo" component={StepCargo} />
    </HomeStack.Navigator>
  );
};

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
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
