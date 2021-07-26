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
import Modal from "react-native-modal";
import { AntDesign } from "react-native-vector-icons";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import LoginScheme from "../../ValidationScheme/LoginScheme";
import { Formik } from "formik";
import FormErrorText from "../../components/FormErrorText";
import CreateVehicles from "../../components/createVehicles";
const { width, height } = Dimensions.get("window");
const index = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <Layout isBackIcon title="Araçlar">
      <FAB
        style={styles.fab}
        medium
        icon="plus"
        color="#fff"
        onPress={toggleModal}
      />
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        style={{ margin: 0, padding: 0, justifyContent: "flex-end" }}
      >
        <CreateVehicles setModalVisible={setModalVisible} />
      </Modal>
    </Layout>
  );
};

export default index;
