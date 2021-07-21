import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Modal,
} from "react-native";
import { Footer, FooterTab, Button } from "native-base";
import PropTypes from "prop-types";
import COLORS from "../../constans/colors";
import { useNavigation } from "@react-navigation/native";

const PopupButton = ({ register, gorev }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <View>
      {register ? (
        <></>
      ) : gorev ? (
        <View>
          <TouchableOpacity
            style={styles.btnGonder}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.btnText}>Görevi Al</Text>
          </TouchableOpacity>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ModalPoup visible={visible}>
              <View style={{ alignItems: "center" }}></View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../assets/correct.png")}
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
                Görev Alma Başarılı{"\n"}
                <Text style={{ fontSize: 15, fontWeight: "500" }}>{"\n"}</Text>
              </Text>

              <Footer>
                <FooterTab style={{ backgroundColor: COLORS.primary }}>
                  <Button
                    full
                    onPress={() => {
                      setVisible(false);
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "700",
                      }}
                    >
                      TAMAM
                    </Text>
                  </Button>
                </FooterTab>
              </Footer>
            </ModalPoup>
          </View>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => setVisible(true)}
            style={styles.btnGonders}
          >
            <Text style={styles.btnText}>Bilgilerimi Güncelle</Text>
          </TouchableOpacity>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ModalPoup visible={visible}>
              <View style={{ alignItems: "center" }}></View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../assets/correct.png")}
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
                <Text style={{ fontSize: 15, fontWeight: "500" }}>{"\n"}</Text>
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
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "700",
                      }}
                    >
                      TAMAM
                    </Text>
                  </Button>
                </FooterTab>
              </Footer>
            </ModalPoup>
          </View>
        </View>
      )}
    </View>
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
PopupButton.propTypes = {
  title: PropTypes.string,
  register: PropTypes.bool,
  gorev: PropTypes.bool,
};

PopupButton.defaultProps = {
  register: false,
  gorev: false,
};
export default PopupButton;

const styles = StyleSheet.create({
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
  btnGonder: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    padding: 15,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnGonders: {
    backgroundColor: COLORS.primary,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
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
  viewPhoneCodes: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  inputPhoneCode: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    marginHorizontal: 6,
    textAlign: "center",
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 50,
    padding: 20,
    borderRadius: 40,
  },
});
