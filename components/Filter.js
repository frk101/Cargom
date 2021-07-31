import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

import { Appbar } from "react-native-paper";
import COLORS from "../constans/colors";
import styles from "../screens/OffersScreen/styles";
import { Content, Footer, FooterTab, Button } from "native-base";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import SearchableDropdown from "searchable-dropdown-react-native";
const Filter = ({ setOpenModal }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  return (
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
            placeholder="İlçe Seçiniz"
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
            placeholder="İlçe Seçiniz"
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
          Fiyat aralığı seçiniz
        </Text>
        <View
          style={{
            marginHorizontal: 18,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
        </View>
        <View style={styles.actiond}>
          <SearchableDropdown
            selectedValues={selectedValues}
            setSelectedValues={setSelectedValues}
            label="test dropdown"
            placeholder="Test placeholder"
            inputSize={300}
          />
        </View>

        {/* <View
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
            </View> */}
      </Content>
      <Footer>
        <FooterTab style={{ backgroundColor: COLORS.primary }}>
          <Button full onPress={() => setOpenModal(false)}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
              UYGULA
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
};
const HeadersModal = ({ setOpenModal }) => {
  return (
    <Appbar.Header style={{ backgroundColor: "#ffffff" }}>
      <Appbar.Action
        icon="close"
        onPress={() => setOpenModal(false)}
        style={{ flex: 1 }}
      />
      <Appbar.Content
        style={{ flex: 4 }}
        title="Filtrele"
        titleStyle={{ color: COLORS.text, fontWeight: "500" }}
      />
      <Appbar.Action style={{ flex: 1 }} />
    </Appbar.Header>
  );
};

export default Filter;
