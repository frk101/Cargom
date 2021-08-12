import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, FlatList } from "react-native";
import { Appbar } from "react-native-paper";
import { Notifier, NotifierComponents } from "react-native-notifier";
import COLORS from "../constans/colors";
import styles from "../screens/OffersScreen/styles";
import { Content, Footer, FooterTab, Button } from "native-base";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import { addressSearchByKeword } from "../business/actions/general";
import { ordersGetAllPendingOffers } from "../business/actions/driver";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import {AntDesign} from 'react-native-vector-icons'

const Filter = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const [selectedOriginTown, setSelectedOriginTown] = useState(null);
  const [openOriginTown, setOpenOriginTown] = useState(false);
  const [originTownSearch, setOriginTownSearch] = useState("");
  const [selectedDestinationTown, setSelectedDestinationTown] = useState(null);
  const [openDestinationTown, setOpenDestinationTown] = useState(false);
  const [DestinationTownSearch, setDestinationTownSearch] = useState("");
  const [fromPrice, setFormPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const { addressSearchByKewordResult, addressSearchByKewordLoading } =
    useSelector((x) => x.general);

  const _handleSearchOriginTown = (searchText) => {
    setSelectedOriginTown(null);
    if (searchText) {
      dispatch(addressSearchByKeword(searchText));
    }
    setOpenOriginTown(true);
    setOriginTownSearch(searchText);
  };

  const _handleChooseOriginTown = (town) => {
    setSelectedOriginTown(town);
    setOpenOriginTown(false);
    setOriginTownSearch(town.fullName);
  };

  const _handleSearchDestinationTown = (searchText) => {
    setSelectedDestinationTown(null);
    if (searchText) {
      dispatch(addressSearchByKeword(searchText));
    }
    setOpenDestinationTown(true);
    setDestinationTownSearch(searchText);
  };

  const _handleChooseDestinationTown = (town) => {
    setSelectedDestinationTown(town);
    setOpenDestinationTown(false);
    setDestinationTownSearch(town.fullName);
  };

  const _handleSearchOffer = () => {
    let searchParams = "?";
    if (selectedOriginTown) {
      searchParams += "OriginTownID=" + selectedOriginTown.townID;
    }
    if (selectedDestinationTown) {
      searchParams += "&DestinationTownID=" + selectedDestinationTown.townID;
    }
    if (fromPrice > 0) {
      searchParams += "&Price1=" + fromPrice;
    }
    if (toPrice > 0) {
      searchParams += "&Price2=" + toPrice;
    }
    if (searchParams.length > 1) {
      dispatch(ordersGetAllPendingOffers(searchParams)).then(
        ({ payload: { data } }) => {
          if (data.length == undefined || data.length == 0) {
            setOpenModal(false);
            alert("Sonuç bulunamadı.");
            Notifier.showNotification({
              title: "UYARI",
              description: "sss",
              Component: NotifierComponents.Alert,
              componentProps: {
                alertType: "error",
              },
            });
          } else {
            setOpenModal(false);
          }
        }
      );
    }
  };

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
            placeholder={selectedOriginTown ? "" : "İlçe Seçiniz"}
            placeholderTextColor="#666666"
            returnKeyType="done"
            style={[
              styles.textInput,
              {
                color: COLORS.text,
              },
            ]}
            value={originTownSearch}
            onChangeText={(text) => _handleSearchOriginTown(text)}
          />
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={openOriginTown && addressSearchByKewordResult.data}
          renderItem={({ item }) => (
            
                <OriginTown
              item={item}
              _handleChooseOriginTown={_handleChooseOriginTown}
            />
          
          
          )}
        />
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
            placeholder={selectedDestinationTown ? "" : "İlçe Seçiniz"}
            placeholderTextColor="#666666"
            returnKeyType="done"
            style={[
              styles.textInput,
              {
                color: COLORS.text,
              },
            ]}
            value={DestinationTownSearch}
            onChangeText={(text) => _handleSearchDestinationTown(text)}
          />


          <AntDesign name='closecircle' size={20}/>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={openDestinationTown && addressSearchByKewordResult.data}
          renderItem={({ item }) => (
            <DestinationTown
              item={item}
              _handleChooseDestinationTown={_handleChooseDestinationTown}
            />
          )}
        />

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
            max={100}
            fromValueOnChange={(value) => setFormPrice(value)}
            toValueOnChange={(value) => setToPrice(value)}
            initialFromValue={11}
            knobColor={COLORS.primary}
            valueLabelsBackgroundColor="black"
            inRangeBarColor={COLORS.primary}
            outOfRangeBarColor="gray"
          />
        </View>
      </Content>
      <Footer>
        <FooterTab style={{ backgroundColor: COLORS.primary }}>
          <Button full onPress={() => _handleSearchOffer()}>
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

const OriginTown = ({ item, _handleChooseOriginTown }) => {
  return (
    
    <TouchableOpacity
      key={item.id.toString()}
      onPress={() => _handleChooseOriginTown(item)}
      style={styles.actionSearch}
    >
      <Text>{item.fullName}</Text>
    </TouchableOpacity>
  );
};
const DestinationTown = ({ item, _handleChooseDestinationTown }) => {
  return (
    <TouchableOpacity
      key={item.id.toString()}
      onPress={() => _handleChooseDestinationTown(item)}
      style={styles.actionSearch}
    >
      <Text>{item.fullName}</Text>
    </TouchableOpacity>
  );
};

export default Filter;
