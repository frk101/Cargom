import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import COLORS from "../../constans/colors";
import { ScrollView as Content } from "native-base";

import { MaterialCommunityIcons, AntDesign } from "react-native-vector-icons";
import styles from "./styles";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { shipperLoginResult } = useSelector((x) => x.shipper);
 
  return (
    <>
    
      <SafeAreaView
      
        style={{ flex: 1, backgroundColor: "#fff",}}
      >
        <View style={styles.topNavBar} >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backBtn}>
              <Image
                source={require("../../assets/backicon.png")}
                style={{ width: 30, height: 30,marginHorizontal: 20, }}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("ProfileEditScreen")}
          >
            <MaterialCommunityIcons
              name="account-edit"
              size={32}
              color={COLORS.gray}
            />
          </TouchableOpacity> */}
        </View>
        <View style={{ marginTop: 20 ,marginHorizontal: 20,}}>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", color: COLORS.text }}
          >
            Profil
          </Text>
        </View>
        <View style={styles.opacitys}>
        <Image 
        style={{width:50,height:50,borderRadius:50}}
        source={{
          
          uri: shipperLoginResult&&shipperLoginResult.data&&shipperLoginResult.data.shipper&&shipperLoginResult.data.shipper.logoUrl,
        }}/>

          <View style={styles.nameWrapper}>
            <Text style={styles.name}>
              {shipperLoginResult &&
                shipperLoginResult.data &&
                shipperLoginResult.data.shipper &&
                shipperLoginResult.data.shipper.companyName}
            </Text>
            
          <View style={styles.durumContainer}>
            <View
              style={[
                styles.durumColor,
                {
                  backgroundColor:
                  shipperLoginResult &&
                    shipperLoginResult.data &&
                    shipperLoginResult.data.shipper &&
                    shipperLoginResult.data.shipper.status === 10
                      ? "#0866C6"
                      : shipperLoginResult &&
                      shipperLoginResult.data &&
                      shipperLoginResult.data.shipper &&
                      shipperLoginResult.data.shipper.status === 20
                      ? "#F49917"
                      : shipperLoginResult &&
                      shipperLoginResult.data &&
                      shipperLoginResult.data.shipper &&
                      shipperLoginResult.data.shipper.status === 40
                      ? "#DC3545"
                      : null,

                 
                },
              ]}
            >
              <Text style={styles.durum}>
                {shipperLoginResult &&
                    shipperLoginResult.data &&
                    shipperLoginResult.data.shipper &&
                    shipperLoginResult.data.shipper.status === 10
                  ? "Profilinzi Tamamlayın"
                  : shipperLoginResult &&
                  shipperLoginResult.data &&
                  shipperLoginResult.data.shipper &&
                  shipperLoginResult.data.shipper.status === 20
                  ? "İnceleniyor"
                  : shipperLoginResult &&
                  shipperLoginResult.data &&
                  shipperLoginResult.data.shipper &&
                  shipperLoginResult.data.shipper.status === 40
                  ? "Askıya Alındı"
                  : ""}
              </Text>
            </View>
          
          </View>
          </View>

        </View>
        <Content>
          <View style={styles.docsWrapper}>
          
            <View style={styles.listes}>
                  <Text style={styles.baslik}>
                    Ad Soyad :{" "}
                    <Text style={styles.title}>
                    {shipperLoginResult &&
                shipperLoginResult.data &&
                shipperLoginResult.data.shipper &&
                shipperLoginResult.data.shipper.contactPerson}
                    </Text>
                  </Text>
                </View>
                <View style={styles.listes}>
                  <Text style={styles.baslik}>
                    E-posta :{" "}
                    <Text style={styles.title}>
                    {shipperLoginResult &&
                shipperLoginResult.data &&
                shipperLoginResult.data.shipper &&
                shipperLoginResult.data.shipper.email}
                    </Text>
                  </Text>
                </View>
                <View style={styles.listes}>
                  <Text style={styles.baslik}>
                    Telefon :{" "}
                    <Text style={styles.title}>
                    {shipperLoginResult &&
                shipperLoginResult.data &&
                shipperLoginResult.data.shipper &&
                shipperLoginResult.data.shipper.phoneNumber}
                    </Text>
                  </Text>
                </View>
                <View style={styles.listes}>
                  <Text style={styles.baslik}>
                    Vergi dairesi :{" "}
                    <Text style={styles.title}>
                    {shipperLoginResult &&
                shipperLoginResult.data &&
                shipperLoginResult.data.shipper &&
                shipperLoginResult.data.shipper.taxOffice}
                    </Text>
                  </Text>
                </View>
                <View style={styles.listes}>
                  <Text style={styles.baslik}>
                    Vergi numarası :{" "}
                    <Text style={styles.title}>
                    {shipperLoginResult &&
                shipperLoginResult.data &&
                shipperLoginResult.data.shipper &&
                shipperLoginResult.data.shipper.number}
                    </Text>
                  </Text>
                </View>
               <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginVertical:40,backgroundColor:COLORS.primary,padding: 20,borderRadius:10}} 
               onPress={()=>navigation.navigate("WebView",{
                title: "Profili Güncelle",
                url:"?"
              })}>
                 <Text style={{ fontSize:16,fontWeight:"bold",color:"#fff"  }}>
                   {shipperLoginResult &&
                    shipperLoginResult.data &&
                    shipperLoginResult.data.shipper &&
                    shipperLoginResult.data.shipper.status === 10
                  ? "Profilinzi Tamamlayın"
                  : 
                   "Profili Güncelle"
                 }</Text>
               </TouchableOpacity>
          </View>
        </Content>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
