import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
} from "react-native";
  import { useNavigation } from "@react-navigation/native";

import COLORS from "../constans/colors";
import { Container,Content } from "native-base";
import {
    Feather,
    MaterialCommunityIcons,
  } from "react-native-vector-icons";
const ProfileEditScreen = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <SafeAreaView style={{flex:1,backgroundColor:'#fff',marginHorizontal:20}}>
            <View style={styles.topNavBar}>
            <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={styles.backBtn}>
            <Image
              source={require("../assets/backicon.png")}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
          </View>        
          </TouchableOpacity>   
          </View>
          <View style={{  marginTop: 20 }}>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", color: COLORS.text }}
          >
            Profili Düzenle
          </Text>
        </View>

        <ScrollView>
<View style={styles.profile}>
        <MaterialCommunityIcons
                  name="account-circle"
                  size={60}
                  color={COLORS.gray}
                />
                <Text
            style={[
              styles.text_footer,
              {
                color: COLORS.text,
                marginTop: 5    ,
              },
            ]}
          >
            Profil Fotoğrafı
          </Text>
          </View>
        <Text
            style={[
              styles.text_footer,
              {
                color: COLORS.text,
                marginTop: 20,
              },
            ]}
          >
            İsim Soyisim
          </Text>
        <View style={styles.action}>
            <TextInput
              placeholder="Faruk Albayrak"
              placeholderTextColor="#666666"
              keyboardType="email-address"
              style={[
                styles.textInput,
                {
                  color: COLORS.text,
                },
              ]}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                color: COLORS.text,
                marginTop: 10,
              },
            ]}
          >
            Telefon
          </Text>
        <View style={styles.action}>
            <TextInput
              placeholder="(555) 555 55 55"
              placeholderTextColor="#666666"
              keyboardType="numeric"
              style={[
                styles.textInput,
                {
                  color: COLORS.text,
                },
              ]}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                color: COLORS.text,
                marginTop: 10,
              },
            ]}
          >
            E-Mail
          </Text>
        <View style={styles.action}>
            <TextInput
              placeholder="faruk@gmail.com"
              placeholderTextColor="#666666"
              keyboardType="email-address"
              style={[
                styles.textInput,
                {
                  color: COLORS.text,
                },
              ]}
            />
          </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate("FileUploadScreen")}
            style={styles.btnGonder}
          >
            <Text style={styles.btnText}>Bilgilerimi Güncelle</Text>
          </TouchableOpacity>
          </SafeAreaView>
        </Container>

    )
}

export default ProfileEditScreen

const styles = StyleSheet.create({
    topNavBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: 40,
    },
    backBtn: {
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
    },
    action: {
        flexDirection: "row",
        marginTop: 5,
        borderColor: "#979797",
        padding: 13,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
      },
      text_footer: {
        color: COLORS.text,
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 20,
      },
      btnGonder: {
        backgroundColor: COLORS.primary,
        padding: 18,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        borderRadius: 20,
      },
      btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
      profile: {
          justifyContent:'center',
          alignItems: 'center',
          marginTop:20
      }

})
