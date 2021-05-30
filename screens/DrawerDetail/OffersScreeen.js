import React,{useState} from "react";
import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../../constans/colors";
import { Appbar } from "react-native-paper";
import { ListItem } from "react-native-elements";


import myData from "../../data/FakeData";


const OffersScreeen = () => {
  const [aktif,setAktif]=useState();
  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1, }}>
      <Headers />
        <View style={styles.tabsWrapper}>
        <View style={styles.aktifTabStyle}>
          <Text style={styles.aktifTabText}>Aktif Tab</Text>
        </View>
        <View style={styles.pasifTabStyle}>
        <Text style={styles.pasifTabText}>Pasif Tab</Text>

        </View>

      </View>
      <FlatList
        data={myData}
        renderItem={({ item }) => <RenderList item={item} />}
      />
      
    </View>
  );
};

const RenderList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() => navigation.navigate("AllCargoDetail", item)}
    >
      <ListItem bottomDivider>
        <Image source={item.icon} style={{ width: 40, height: 40 }} />
        <ListItem.Content>
          <ListItem.Title style={{ color: COLORS.text, fontWeight: "bold" }}>
            {item.name}
          </ListItem.Title>
          <ListItem.Title style={{ color: COLORS.text }}>
            {item.km}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={{ color: COLORS.primary, fontWeight: "bold" }}>
          {item.ücret}
        </ListItem.Title>
      </ListItem>
    </TouchableOpacity>
  );
};

const Headers = () => {
  const navigation = useNavigation();
  const _goBack = () => navigation.goBack();
  return (
    <Appbar.Header style={{ backgroundColor: "#ffffff" }}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content
        title="Teklifler"
        titleStyle={{ color: COLORS.text, fontWeight: "500" }}
      />
    </Appbar.Header>
  );
};

export default OffersScreeen;

const styles = StyleSheet.create({
  tabsWrapper:{
    flex:1,
    flexDirection:'row',
    marginTop:20,
    maxHeight:48,
    marginHorizontal:20
  },
  aktifTabStyle:{
    flex:1,
    backgroundColor:COLORS.primary,
    marginRight:8,
    borderRadius:80,
    justifyContent:'center',
    alignItems:'center'
  },
  aktifTabText:{
    color: "#ffffff", 
    fontSize: 20, 
    fontWeight: "bold"
  },
  pasifTabStyle:{
    flex:1,
    backgroundColor:COLORS.lightGray,
    marginLeft:8,
    borderRadius:80,
    justifyContent:'center',
    alignItems:'center'
  },
  pasifTabText:{
    color: COLORS.gray, 
    fontSize: 20, 
    fontWeight: "bold"
  }
});
