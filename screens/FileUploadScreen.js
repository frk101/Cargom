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
  Alert,
  Animated,
  Modal,
} from "react-native";
import { Feather, AntDesign } from "react-native-vector-icons/";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../constans/colors";
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  Footer,
  FooterTab,
  Button,
} from "native-base";

const FileUploadScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <TouchableOpacity
          style={{ marginTop: 40, marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/backicon.png")}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", color: COLORS.text }}
          >
            Dosya Yükle
          </Text>
          <Text style={{ fontSize: 12, color: COLORS.gray, marginTop: 10 }}>
            *Simgesi olan belgeler yüklemesi zorunlu olan belgelerdir.
          </Text>
        </View>
        <ScrollView>
          <Text style={[styles.text_footer]}>Sürücü Belgesi*</Text>
          <View style={styles.action}>
            <Text style={styles.textInput}>
              Sürücü Belgenizin fotoğrafını seçiniz
            </Text>

            <Feather name="upload" size={25} color={COLORS.gray} />
          </View>
          <Text style={[styles.text_footer]}>Sürücü Belgesi*</Text>
          <View style={styles.action}>
            <Text style={styles.textInput}>
              Sürücü Belgenizin fotoğrafını seçiniz
            </Text>

            <Feather name="upload" size={25} color={COLORS.gray} />
          </View>
          <Text style={[styles.text_footer]}>Vergi Levhası*</Text>
          <View style={styles.action}>
            <Text style={styles.textInput}>Vergi Levhası</Text>

            <Feather name="upload" size={25} color={COLORS.gray} />
          </View>

          <Text style={[styles.text_footer]}>Sürücü Belgesi*</Text>
          <View style={styles.action}>
            <Text style={styles.textInput}>
              Sürücü Belgenizin fotoğrafını seçiniz
            </Text>

            <Feather name="upload" size={25} color={COLORS.gray} />
          </View>
          <Text style={[styles.text_footer]}>Sürücü Belgesi*</Text>
          <View style={[styles.action]}>
            <Text style={styles.textInput}>
              Sürücü Belgenizin fotoğrafını seçiniz
            </Text>

            <Feather name="upload" size={25} color={COLORS.gray} />
          </View>
          <GonderBtn />
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};
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
const GonderBtn = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.btnGonder}
      >
        <Text style={styles.btnText}>Gönder</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ModalPoup visible={visible}>
          <View style={{ alignItems: "center" }}></View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/correct.png")}
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
            Yükleme Başarılı{"\n"}
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              {"\n"} İşleminiz Onaylandıktan Uygulamayı Kullanmaya
              Başlayabilirsiniz.
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

export default FileUploadScreen;

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    padding: 13,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 20,
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
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
