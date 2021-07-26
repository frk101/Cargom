import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constans/colors";
import { ListItem } from "react-native-elements";
import { Container, Content, Footer, FooterTab, Button } from "native-base";
import myData from "../../data/FakeData";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import { FontAwesome5, FontAwesome } from "react-native-vector-icons";
import Layout from "../../components/Layout";
import Filter from "../../components/Filter";
import styles from "./styles";
const OffersScreeen = () => {
  const _goBack = () => navigation.goBack();
  const [openModal, setOpenModal] = useState(false);
  const [aktifKey, setAktifKey] = useState(null);

  const PressData = (val) => {
    setAktifKey(val);
  };
  const navigation = useNavigation();
  return (
    <Layout
      title="Teklifler"
      isBackIcon
      right={<LayoutLeft1 setOpenModal={setOpenModal} />}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            aktifKey
              ? { backgroundColor: COLORS.primary }
              : { backgroundColor: "#ffffff" },
            styles.leftButton,
          ]}
          onPress={() => PressData(true)}
        >
          <View style={{ alignSelf: "center" }}>
            <Text
              style={[
                aktifKey ? { color: "#ffffff" } : { color: COLORS.primary },
                styles.leftText,
              ]}
            >
              Grup
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            aktifKey
              ? { backgroundColor: "#ffffff" }
              : { backgroundColor: COLORS.primary },
            styles.rightButton,
          ]}
          onPress={() => PressData(false)}
        >
          <Text
            style={[
              aktifKey ? { color: COLORS.primary } : { color: "#ffffff" },
              styles.textColor,
            ]}
          >
            Tüm
          </Text>
        </TouchableOpacity>
      </View>
      <Content>
        {aktifKey == true ? (
          <FlatList
            style={{ marginTop: 20 }}
            data={myData}
            renderItem={({ item }) => <GrupCargo item={item} />}
          />
        ) : (
          <FlatList
            style={{ marginTop: 20 }}
            data={myData}
            renderItem={({ item }) => <AllCargo item={item} />}
          />
        )}
      </Content>
      <Modal visible={openModal} animationType="slide">
        <Filter setOpenModal={setOpenModal} />
      </Modal>
    </Layout>
  );
};

const GrupCargo = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.listGrupContainer}
      onPress={() => navigation.navigate("AllCargoDetail", item)}
    >
      <ListItem bottomDivider>
        <FontAwesome5 name={item.icon} size={24} color={item.color} />
        <ListItem.Content>
          <ListItem.Title style={{ color: COLORS.text, fontWeight: "bold" }}>
            {item.name}
          </ListItem.Title>
          <ListItem.Title style={{ color: COLORS.text }}>
            {item.km}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={{ color: COLORS.primary, fontWeight: "bold" }}>
          {item.ücret}
        </ListItem.Title>
      </ListItem>
    </TouchableOpacity>
  );
};
const AllCargo = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() => navigation.navigate("AllCargoDetail", item)}
    >
      <ListItem bottomDivider>
        <FontAwesome5 name={item.icon} size={24} color={item.color} />
        <ListItem.Content>
          <ListItem.Title style={{ color: COLORS.text, fontWeight: "bold" }}>
            {item.name}
          </ListItem.Title>
          <ListItem.Title style={{ color: COLORS.text }}>
            {item.km}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={{ color: COLORS.primary, fontWeight: "bold" }}>
          {item.ücret}
        </ListItem.Title>
      </ListItem>
    </TouchableOpacity>
  );
};
const LayoutLeft1 = ({ setOpenModal }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => setOpenModal(true)}>
      <FontAwesome name="filter" size={20} />
    </TouchableOpacity>
  );
};

export default OffersScreeen;