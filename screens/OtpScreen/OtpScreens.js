import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Animated,
  Modal,
  Dimensions,
} from "react-native";
import { Container, Content, Footer, FooterTab, Button } from "native-base";
import COLORS from "../../constans/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { shipperRegisterComplate } from "../../business/actions/shipper";
import { Notifier, NotifierComponents } from "react-native-notifier";
import styles from "./styles";

const OtpScreens = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const [visible, setVisible] = useState(false);

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);
  const input1TextRef = useRef("");
  const input2TextRef = useRef("");
  const input3TextRef = useRef("");
  const input4TextRef = useRef("");
  const input5TextRef = useRef("");
  const input6TextRef = useRef("");

  useEffect(() => {
    setTimeout(() => {
      input1Ref.current.focus();
    }, 500);
    return () => {};
  }, []);

  const onKeyPressInput1 = (e) => {};

  const onKeyPressInput2 = (e) => {
    if (e.nativeEvent.key === "Backspace" && input2TextRef.current.length === 0)
      input1Ref.current.focus();
  };

  const onKeyPressInput3 = (e) => {
    if (e.nativeEvent.key === "Backspace" && input3TextRef.current.length === 0)
      input2Ref.current.focus();
  };

  const onKeyPressInput4 = (e) => {
    if (e.nativeEvent.key === "Backspace" && input4TextRef.current.length === 0)
      input3Ref.current.focus();
  };

  const onKeyPressInput5 = (e) => {
    if (e.nativeEvent.key === "Backspace" && input5TextRef.current.length === 0)
      input4Ref.current.focus();
  };

  const onKeyPressInput6 = (e) => {
    if (e.nativeEvent.key === "Backspace" && input6TextRef.current.length === 0)
      input5Ref.current.focus();
  };

  const onChangeInput1 = (e) => {
    input1TextRef.current = e.nativeEvent.text;
    if (e.nativeEvent.text.length > 0) input2Ref.current.focus();
  };

  const onChangeInput2 = (e) => {
    input2TextRef.current = e.nativeEvent.text;
    if (e.nativeEvent.text.length > 0) input3Ref.current.focus();
  };

  const onChangeInput3 = (e) => {
    input3TextRef.current = e.nativeEvent.text;
    if (e.nativeEvent.text.length > 0) input4Ref.current.focus();
  };

  const onChangeInput4 = (e) => {
    input4TextRef.current = e.nativeEvent.text;
    if (e.nativeEvent.text.length > 0) input5Ref.current.focus();
  };

  const onChangeInput5 = (e) => {
    input5TextRef.current = e.nativeEvent.text;
    if (e.nativeEvent.text.length > 0) input6Ref.current.focus();
  };

  const onChangeInput6 = (e) => {
    input6TextRef.current = e.nativeEvent.text;
    if (
      input1TextRef.current.length === "1" &&
      input2TextRef.current.length === "1" &&
      input3TextRef.current.length === "1" &&
      input4TextRef.current.length === "1" &&
      input5TextRef.current.length === "1" &&
      input6TextRef.current.length === "1"
    ) {
      _handleSubmitCode();
    }
  };

  const _handleSubmitCode = () => {
    let model = route.params;
    model.code = parseInt(
      input1TextRef.current +
        input2TextRef.current +
        input3TextRef.current +
        input4TextRef.current +
        input5TextRef.current +
        input6TextRef.current
    );
    dispatch(shipperRegisterComplate(model)).then(({ payload: { data } }) => {
      if (data.status) {
        setVisible(true);
      } else {
        let message = "İşlem sırasında bir hata oluştu.";
        if (data.message) {
          message += data.message;
        }
        Notifier.showNotification({
          title: "UYARI",
          description: message,
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: "error",
          },
        });
      }
    });
  };

  const _handleSuccessModalButton = () => {
    setVisible(false);
    navigation.navigate("LoginScreen", route.params);
  };

  return (
    <Container>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <TouchableOpacity
          style={styles.back}
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
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text
            style={{ fontSize: 25, fontWeight: "bold", color: COLORS.text }}
          >
            Telefon numarasını doğrulayın
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.headerSubTitle}>
              SMS mesajlarınızı kontrol edin.
            </Text>
          </TouchableOpacity>
        </View>
        <Content>
          <View style={styles.viewPhoneCodes}>
            <PhoneCodeInput
              reference={input1Ref}
              onChange={onChangeInput1}
              onKeyPress={onKeyPressInput1}
            />
            <PhoneCodeInput
              reference={input2Ref}
              onChange={onChangeInput2}
              onKeyPress={onKeyPressInput2}
            />
            <PhoneCodeInput
              reference={input3Ref}
              onChange={onChangeInput3}
              onKeyPress={onKeyPressInput3}
            />
            <PhoneCodeInput
              reference={input4Ref}
              onChange={onChangeInput4}
              onKeyPress={onKeyPressInput4}
            />
            <PhoneCodeInput
              reference={input5Ref}
              onChange={onChangeInput5}
              onKeyPress={onKeyPressInput5}
            />
            <PhoneCodeInput
              reference={input6Ref}
              onChange={onChangeInput6}
              onKeyPress={onKeyPressInput6}
            />
            {/* <PhoneCodeInput
            reference={input5Ref}
            onChange={onChangeInput5}
            onKeyPress={onKeyPressInput5}
          /> */}
          </View>

          <View style={{ width: "100%" }}>
            <TouchableOpacity
              style={styles.btnGonder}
              onPress={_handleSubmitCode}
            >
              <Text style={styles.btnText}>Doğrulayın</Text>
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
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
                  Kaydınız Başarıyla{"\n"}Tamamlandı
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {"\n"}
                  </Text>
                </Text>

                <Footer>
                  <FooterTab style={{ backgroundColor: COLORS.primary }}>
                    <Button full onPress={_handleSuccessModalButton}>
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
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 10,
            }}
          >
            <Text>
              SMS almadınız mı?{" "}
              <Text style={{ color: COLORS.primary }}>Yeniden Gönder</Text>
            </Text>
          </TouchableOpacity>
        </Content>
      </SafeAreaView>
    </Container>
  );
};
const PhoneCodeInput = ({ onChange, reference, onKeyPress }) => {
  return (
    <TextInput
      style={styles.inputPhoneCode}
      placeholder=""
      keyboardType="numeric"
      maxLength={1}
      onChange={onChange}
      ref={reference}
      onKeyPress={onKeyPress}
    />
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

export default OtpScreens;
