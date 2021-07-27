import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Layout from "../../components/Layout";
import { FAB } from "react-native-paper";
import COLORS from "../../constans/colors";
import { Content } from "native-base";
import { AntDesign } from "react-native-vector-icons";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import LoginScheme from "../../ValidationScheme/LoginScheme";
import { Formik } from "formik";
import FormErrorText from "../../components/FormErrorText";

import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const index = () => {
  const navigation = useNavigation();

  return (
    <Layout isBackIcon title="Araçlar">
      <FAB
        style={styles.fab}
        medium
        icon="plus"
        color="#fff"
        onPress={() => navigation.navigate("CreateVehicles")}
      />
    </Layout>
  );
};

export default index;
