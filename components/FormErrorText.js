import React from "react";
import { Text } from "react-native";

const FormErrorText = ({ children }) => {
  return <Text style={{ color: "red" }}>{children}</Text>;
};

export default FormErrorText;
