import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

import COLORS from "../constans/colors";
const OtpScreens = () => {
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
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={50}
        style={styles.containerAvoiddingView}
      >
        <Text style={styles.textTitle}>{"Input Otp code sent via SMS"}</Text>
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
      </KeyboardAvoidingView>
    </View>
  );
};

export default OtpScreens;

const styles = StyleSheet.create({
  container: { flex: 1 },

  containerAvoiddingView: {
    flex: 1,
    alignItems: "center",
    padding: 10,
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
});
