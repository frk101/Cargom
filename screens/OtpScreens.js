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
} from "react-native";
import { Container } from "native-base";
import COLORS from "../constans/colors";
import { useNavigation } from "@react-navigation/native";
const OtpScreens = () => {
  const navigation = useNavigation();
  let textInput = useRef(null);
  const [internalVal, setInternalval] = useState("");
  const lengthInput = 4;

  const onChangeText = (val) => {
    setInternalval(val);
  };
  useEffect(() => {
    textInput.focus();
  }, []);
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
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={50}
          style={styles.containerAvoiddingView}
        >
          <View>
            <TextInput
              ref={(input) => (textInput = input)}
              onChangeText={onChangeText}
              style={{ width: 0, height: 0 }}
              value={internalVal}
              maxLength={lengthInput}
              returnKeyType="done"
              keyboardType="numeric"
            />
            <View style={styles.containerInput}>
              {Array(lengthInput)
                .fill()
                .map((data, index) => (
                  <View
                    style={[
                      styles.cellView,
                      {
                        borderColor:
                          index === internalVal.length
                            ? COLORS.gray
                            : COLORS.primary,
                      },
                    ]}
                    key={index}
                  >
                    <Text
                      style={styles.cellText}
                      onPress={() => textInput.focus()}
                    >
                      {internalVal && internalVal.length > 0
                        ? internalVal[index]
                        : ""}
                    </Text>
                  </View>
                ))}
            </View>
          </View>
          <TouchableOpacity>
            <Text style={{ marginTop: 30 }}>
              SMS almadınız mı?{" "}
              <Text style={{ color: COLORS.primary }}>Yeniden Gönder</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnGonder}
            onPress={() => navigation.navigate("DrawerScreen")}
          >
            <Text style={styles.btnText}>Doğrulayın</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Container>
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
});
