import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Animated,
  Modal,
} from "react-native";
  import { useNavigation } from "@react-navigation/native";


import COLORS from "../../constans/colors";
import {
    Container,
    Tab,
    Content,
    ScrollableTab,
    Footer,
    FooterTab,
    Button,
  } from "native-base";
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
              source={require("../../assets/backicon.png")}
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

        <Content>
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
              onChange="(555) 555 55 55"
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
          <GuncelleBtn/>
          </Content>
           
          </SafeAreaView>
        </Container>

    )
}


const ModalPoup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

  const GuncelleBtn = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
  
    return (
      <View>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={styles.btnGonder}
        >
          <Text style={styles.btnText}>Bilgilerimi Güncelle</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ModalPoup visible={visible}>
            <View style={{ alignItems: "center" }}></View>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/okey.png")}
                style={{ height: 50, width: 50, marginVertical: 10 }}
              />
            </View>
  
            <Text
              style={{
                marginVertical: 10,
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Güncelleme Başarılı{"\n"}
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                {"\n"} 
              </Text>
            </Text>
  
            <Footer>
              <FooterTab style={{ backgroundColor: COLORS.primary }}>
                <Button
                  full
                  onPress={() => {
                    setVisible(false);
                  }}
                  onPressIn={() => {
                    navigation.navigate("DrawerScreen");
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    TAMAM
                  </Text>
                </Button>
              </FooterTab>
            </Footer>
          </ModalPoup>
        </View>
      </View>
    );
  };

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
      textInput: {
        flex: 1,
        paddingLeft: 10,
        color: COLORS.gray,
        alignItems: "center",
        justifyContent: "center",
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
      },
      btnGonder: {
        backgroundColor: COLORS.primary,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        borderRadius: 20,
      },
      btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
      modalBackGround: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
      },
      modalContainer: {
        width: "80%",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
      },

})
