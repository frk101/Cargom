import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather, AntDesign } from "react-native-vector-icons/";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../constans/colors";
import { Container, Content, Label, Form,Item,Input} from "native-base";
import { Colors } from "react-native/Libraries/NewAppScreen";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <TouchableOpacity style={{ marginTop: 40, marginLeft: 20 }}>
          <View style={{ width:48,height:48, justifyContent: 'center', alignItems:'center'}}>
          <Image
            source={require("../assets/backicon.png")}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
          </View>
        </TouchableOpacity>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: COLORS.text }}>
            Tekrar Hoş Geldiniz
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")} >

          <Text style={styles.headerSubTitle}>
            Henüz Hesabınız Yok mu ? 

              <Text style={{color: COLORS.primary}}>Kayıt Ol</Text>
            </Text>
            </TouchableOpacity>
        </View>

        <ScrollView>
          <Text style={styles.inputHeader}>E-mail *</Text>
          <View style={styles.inputView}>
            <Item style={styles.inputWrapper}>
              <Input placeholder="E-mail adresiniz" style={styles.input} />
            </Item>
          </View>         
          <Text style={styles.inputHeader}>Şifre *</Text>
          <View style={styles.inputView}>
            <Item style={styles.inputWrapper}>
              <Input secureTextEntry placeholder="Şifreniz" style={styles.input} />
              <Feather name="eye-off" size={25} color={COLORS.gray} />

            </Item>
          </View>
          <View style={styles.forgetPassWrapper}>
            <TouchableOpacity style={styles.forgetButton}>
              <Text style={styles.forgetPass}>Şifremi Unuttum</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("CorpHomeScreen")}
            style={styles.btnGonder}
          >
            <Text style={styles.btnText}>Giriş Yap</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  inputWrapper:{
    width:'100%'
    },
    input:{borderWidth: 1,
      borderBottomColor:4,borderRadius:8,paddingLeft:20,
     borderColor:COLORS.lightGray,fontSize:14,},
  headerSubTitle:{
    fontSize: 12, color: COLORS.gray, marginTop: 10
  },
  inputView:{marginHorizontal:20,marginTop:5},
  forgetPassWrapper:{
    flexDirection:"row",justifyContent: 'flex-end',marginTop:20,marginHorizontal:20
  },
  forgetButton:{height:48,justifyContent:'center',alignItems:'center'},
  forgetPass:{color:COLORS.primary,fontWeight:"bold",fontSize:15},
  action: {
    flexDirection: "row",
    marginTop: 5,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  placeholder: {
    flex: 1,
    paddingLeft: 10,
    color: COLORS.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  inputHeader: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 20,
  },
  btnGonder: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 20,
  },
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
});
