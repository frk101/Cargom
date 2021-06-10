import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Animated,
  Modal,
  BackHandler,
} from "react-native";
import {
  Container,
  Tab,
  Content,
  ScrollableTab,
  Footer,
  FooterTab,
  Button,
} from "native-base";
import COLORS from "../constans/colors";
import { useNavigation } from "@react-navigation/native";
import PopupButton from "../components/Button/PopupButton";
const OtpScreens = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
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
    if (
      e.nativeEvent.key === "Backspace" &&
      input5TextRef.current.length === 0
    ) {
      input4Ref.current.focus();
    }
  };
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input1TextRef = useRef("");
  const input2TextRef = useRef("");
  const input3TextRef = useRef("");
  const input4TextRef = useRef("");
  const input5TextRef = useRef("");
  const modalTextRef = useRef("");
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
    if (
      input1TextRef.current.length === "1" &&
      input2TextRef.current.length === "1" &&
      input3TextRef.current.length === "1" &&
      input4TextRef.current.length === "1"
    ) {
    }
  };

  // const onChangeInput5 = (e) => {
  //   input5TextRef.current = e.nativeEvent.text;
  //   if (
  //     input1TextRef.current.length === "1" &&
  //     input2TextRef.current.length === "1" &&
  //     input3TextRef.current.length === "1" &&
  //     input4TextRef.current.length === "1" &&
  //     input5TextRef.current.length === "1"
  //   ) {
  //   }
  // };

  return (
    <Container>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <TouchableOpacity
          style={styles.back}
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
          {/* <PhoneCodeInput
            reference={input5Ref}
            onChange={onChangeInput5}
            onKeyPress={onKeyPressInput5}
          /> */}
        </View>
        <PopupButton register />
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

export default OtpScreens;

const styles = StyleSheet.create({
  container: { flex: 1 },

  containerAvoiddingView: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginTop: 50,
  },
  textTitle: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 16,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cellView: {
    paddingVertical: 25,
    width: 70,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 70,
  },
  cellText: {
    textAlign: "center",
    fontSize: 16,
  },
  back: { marginTop: 40, marginLeft: 20 },
  backBtn: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  headerSubTitle: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 10,
  },
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
  btnGonder: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    padding: 15,
    width: "90%",
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
