import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

///Screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import FileUploadScreen from "../screens/FileUploadScreen";
import CorpHomeScreen from "../screens/CorpHomeScreen";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        headerMode="screen"
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="FileUploadScreen" component={FileUploadScreen} />
        <Stack.Screen name="CorpHomeScreen" component={CorpHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
