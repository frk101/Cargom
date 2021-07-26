import React from "react";
import { Text } from "react-native";

const FormErrorText = ({ children }) => {
  return (
    <Text style={{ color: "red", marginHorizontal: 20, marginTop: 5 }}>
      {children}
    </Text>
  );
};

export default FormErrorText;
