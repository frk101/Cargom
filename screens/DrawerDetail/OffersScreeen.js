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
import AllCargoScreen from "../../screens/DrawerDetail/AllCargo/AllCargoScreen";
import COLORS from "../../constans/colors";
import { Appbar } from "react-native-paper";
import { ListItem } from "react-native-elements";
import { Container, Content, Footer, FooterTab, Button } from "native-base";
import myData from "../../data/FakeData";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const OffersScreeen = () => {
  const _goBack = () => navigation.goBack();
  const [openModal, setOpenModal] = useState(false);
  const [aktifKey, setAktifKey] = useState(null);
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const PressData = (val) => {
    setAktifKey(val);
  };
  const navigation = useNavigation();
  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "#ffffff" }}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content
          title="Teklifler"
          titleStyle={{ color: COLORS.text, fontWeight: "500" }}
        />
        <Appbar.Action
          icon="filter"
          color={COLORS.primary}
          onPress={() => setOpenModal(true)}
        />
      </Appbar.Header>
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
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          <HeadersModal setOpenModal={setOpenModal} />
          <Content>
            <Text
              style={[
                styles.text_footer,
                {
                  color: COLORS.text,
                  marginTop: 35,
                },
              ]}
            >
              Nereden
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Başlangıç Adresinizi Giriniz"
                placeholderTextColor="#666666"
                keyboardType="email-address"
                returnKeyType="done"
                style={[
                  styles.textInput,
                  {
                    color: COLORS.text,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.text_footer,
                {
                  color: COLORS.text,
                  marginTop: 35,
                },
              ]}
            >
              Nereye
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Bitiş Adresinizi Giriniz"
                placeholderTextColor="#666666"
                keyboardType="email-address"
                returnKeyType="done"
                style={[
                  styles.textInput,
                  {
                    color: COLORS.text,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.text_footer,
                {
                  color: COLORS.text,
                  marginTop: 50,
                },
              ]}
            >
              Fiyat Aralığı Seçiniz
            </Text>
            <RangeSlider
              min={0}
              max={1000}
              fromValueOnChange={(value) => setFromValue(value)}
              toValueOnChange={(value) => setToValue(value)}
              initialFromValue={11}
              knobColor={COLORS.primary}
              valueLabelsBackgroundColor="black"
              inRangeBarColor={COLORS.primary}
              outOfRangeBarColor="gray"
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Min Fiyat:{" "}
                <Text style={{ fontWeight: "400" }}>{fromValue} ₺ </Text>
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Min Fiyat:{" "}
                <Text style={{ fontWeight: "400" }}>{toValue} ₺ </Text>
              </Text>
            </View>
          </Content>
          <Footer>
            <FooterTab style={{ backgroundColor: COLORS.primary }}>
              <Button full onPress={() => setOpenModal(false)}>
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                >
                  UYGULA
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </Modal>
    </Container>
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
        <FontAwesome5 name={item.icon} size={24} color={COLORS.gray} />
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
        <FontAwesome5 name={item.icon} size={24} color={COLORS.gray} />
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
const HeadersModal = ({ setOpenModal }) => {
  const navigation = useNavigation();
  const _goBack = () => navigation.goBack();
  return (
    <Appbar.Header style={{ backgroundColor: "#ffffff" }}>
      <Appbar.Action icon="close" onPress={() => setOpenModal(false)} />
      <Appbar.Content
        title="Filtrele"
        titleStyle={{ color: COLORS.text, fontWeight: "500" }}
      />
    </Appbar.Header>
  );
};

export default OffersScreeen;

const styles = StyleSheet.create({
  tabsWrapper: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    maxHeight: 48,
    marginHorizontal: 20,
  },
  aktifTabStyle: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginRight: 8,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  aktifTabText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  pasifTabStyle: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    marginLeft: 8,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  pasifTabText: {
    color: COLORS.gray,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  leftButton: {
    width: "50%",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  leftText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textContainer: { alignItems: "center" },
  textColor: { fontSize: 15, fontWeight: "bold" },
  rightButton: {
    width: "50%",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 10,
  },
  listContainer: {
    marginVertical: 10,

    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    // paddingBottom: 10,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  listGrupContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    // paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  action: {
    flexDirection: "row",
    marginTop: 5,

    borderColor: "#979797",
    padding: 13,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: COLORS.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  text_footer: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 20,
  },
});
