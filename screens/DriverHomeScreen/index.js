import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BottomNavigation } from "react-native-paper";
import HomeScreen from "./HomeScreen";
import MyTaskScreen from "../MyTaskDriverScreen";
import ProfileEditScreen from "../ProfileEditScreen/ProfileEditScreen";
import MyOffersScreeen from "../MyOffersScreen/index"
const MusicRoute = () => <HomeScreen />;

const AlbumsRoute = () => <MyTaskScreen />;
const Task=()=><MyOffersScreeen/>
const RecentsRoute = () => <ProfileEditScreen />;



const DriverHomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "music", title: "Anasayfa", icon: "home" },
    {
      key: "albums",
      title: "Kargolarım",
      icon:'content-copy'
      // icon: "checkbox-marked-circle",
     
    },
    {key:'task',title:'Görevlerim',icon:"checkbox-marked-circle"},
    { key: "recents", title: "Profil", icon: "account-circle" },
   
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    task:Task,
    recents: RecentsRoute,
   
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: "#2d3651" }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default DriverHomeScreen;

const styles = StyleSheet.create({});
