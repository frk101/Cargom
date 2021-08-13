import React,{useEffect} from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    FlatList,
    TextInput,
    Image,
    Platform,
    ScrollView,
    Animated,
    StyleSheet,
  } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
    shipperOrdersGetMyOfferDetail,  
  } from "../../business/actions/shipper";
  import { useRoute, useNavigation, useTheme } from "@react-navigation/native";
import Layout from '../../components/Layout';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from "react-native-maps";
import {
    AntDesign,
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
    SimpleLineIcons,
  } from "react-native-vector-icons";
  import COLORS from "../../constans/colors";
  import { ScrollView as Content } from "native-base";
  import { Divider } from "react-native-elements";
  import styles from "./styles";
  const { width, height } = Dimensions.get("window");
  
  const CARD_WIDTH = width - 40;
  const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
  const ASPECT_RATIO = width / height;

const index = () => {
    const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    shipperOrdersGetMyOfferDetailResult,
    shipperOrdersGetMyOfferDetailLoading
    
  } = useSelector((x) => x.shipper);
  useEffect(() => {
    _handleGetMyOfferDetail();
    ;
    return () => {};
  }, [route.params.id]);

  
  

  const _handleGetMyOfferDetail = () => {
    dispatch(shipperOrdersGetMyOfferDetail(route.params.id))
 
  };


    
  
  
    return (
        <View style={styles.container}> 
            <View style={{ height: height * 0.4 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: 41.0054958,
            longitude: 28.8720979,
            latitudeDelta: 0.3,
            longitudeDelta: 0.2 * ASPECT_RATIO,
          }}
        >
          {shipperOrdersGetMyOfferDetailResult &&
          shipperOrdersGetMyOfferDetailResult.data &&
          shipperOrdersGetMyOfferDetailResult.data.steps
            ? shipperOrdersGetMyOfferDetailResult.data.steps.map(
                (marker, index) => {
                  const coordinate = {
                    latitude: parseFloat(marker.town.lat),
                    longitude: parseFloat(marker.town.lng),
                  };
                  return (
                    <Marker
                      key={index}
                      coordinate={coordinate}
                      
                    //   image={require("../../assets/Marker.png")}
                    />
                  );
                }
              )
            : null}
          <Polyline
            coordinates={
                shipperOrdersGetMyOfferDetailResult &&
                shipperOrdersGetMyOfferDetailResult.data &&
                shipperOrdersGetMyOfferDetailResult.data.steps
                ? shipperOrdersGetMyOfferDetailResult.data.steps.map((marker) => {
                    const coordinate = {
                      latitude: parseFloat(marker.town.lat),
                      longitude: parseFloat(marker.town.lng),
                    };
                    return coordinate;
                  })
                : []
            }
            strokeColor="#171797"
            lineJoin="round"
            strokeWidth={3}
            lineDashPattern={[13, 13]}
          />
        </MapView>
        <View style={styles.view}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center" }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-circle" size={30} color={COLORS.text} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.views}>
        <View style={styles.btnDetail}>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
            {shipperOrdersGetMyOfferDetailResult &&
              shipperOrdersGetMyOfferDetailResult.data &&
              shipperOrdersGetMyOfferDetailResult.data.group &&
              shipperOrdersGetMyOfferDetailResult.data.group.price}{" "}
            ₺
          </Text>
        </View>
        
      </View>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ padding: 20 }}>
          <View style={styles.row}>
            <Ionicons name="ios-location" size={24} color="#404040" />
            <Text style={styles.txtes}>
              {" "}
              :{" "}
              {shipperOrdersGetMyOfferDetailResult &&
                shipperOrdersGetMyOfferDetailResult.data &&
                shipperOrdersGetMyOfferDetailResult.data.group &&
                shipperOrdersGetMyOfferDetailResult.data.group.startAddress}{" "}
            </Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="locate-outline" size={24} color="#404040" />
            <Text style={styles.txtes}>
              {" "}
              :{" "}
              {shipperOrdersGetMyOfferDetailResult &&
                shipperOrdersGetMyOfferDetailResult.data &&
                shipperOrdersGetMyOfferDetailResult.data.group &&
                shipperOrdersGetMyOfferDetailResult.data.group.endAddress}{" "}
            </Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="pricetag" size={20} color="#404040" />
            <Text style={styles.txtes}>
              {" "}
              :{" "}
              {shipperOrdersGetMyOfferDetailResult &&
                shipperOrdersGetMyOfferDetailResult.data &&
                shipperOrdersGetMyOfferDetailResult.data.group &&
                shipperOrdersGetMyOfferDetailResult.data.group.price} ₺
            </Text>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons name="highway" size={20} color="#404040" />
            <Text style={styles.txtes}>
              {" "}
              :{" "}
              {shipperOrdersGetMyOfferDetailResult &&
                shipperOrdersGetMyOfferDetailResult.data &&
                shipperOrdersGetMyOfferDetailResult.data.group &&
                (shipperOrdersGetMyOfferDetailResult.data.group.distance /
                  1000).toFixed(1)}{" "}
              km
            </Text>
          </View>
        </View>
        <Divider />
        <Content style={{ marginTop: 20 }}>
          <FlatList
            scrollEnabled={false}
            renderItem={(item) => <RenderList item={item} />}
            data={
                shipperOrdersGetMyOfferDetailResult &&
                shipperOrdersGetMyOfferDetailResult.data &&
                shipperOrdersGetMyOfferDetailResult.data.steps
            }
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
              {   shipperOrdersGetMyOfferDetailResult &&
                shipperOrdersGetMyOfferDetailResult.data &&
                shipperOrdersGetMyOfferDetailResult.data.group && shipperOrdersGetMyOfferDetailResult.data.group.status == 2 ?
                <AntDesign
                name="checkcircle"
                color=  "#23BF08"  
                size={25}
                style={{ margin: 5 }}
              />:<View
              style={{
                width: 25,
                height: 25,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor:  
                   COLORS.text,       
                margin: 5,
              }}
            >
             
            </View>}
            
            <Text style={{ fontSize: 15, fontWeight: "bold",  }}>
              Bitiş !
            </Text>
            
          </View>
        </Content>
      </View>
        </View>
    )
}
const RenderList = ({ item }) => {
    
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() =>
            navigation.navigate("MyTaskShipperDetailScreen", {
              orderDetail: item.item.step,
              
            })
          }>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flexDirection: "row" }}>
           
            <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor:  
                item.item.step.status === 10
                  ? COLORS.text
                  : item.item.step.status === 20
                  ? "#F49917"
                  : item.item.step.status === 30
                  ? "#23BF08"
                  : null,
                  backgroundColor:  
                item.item.step.status === 10
                  ? "#fff"
                  : item.item.step.status === 20
                  ? "#F49917"
                  : item.item.step.status === 30
                  ? "#23BF08"
                  : null,
                margin: 5,
              }}
            >
              <Text style={{color:item.item.step.status ==10 ? COLORS.text : '#fff',}}>{item.index + 1}</Text>
            </View>
            <Entypo name="dots-three-vertical" style={{ alignSelf: "center" }} />
          </View>
            
         
          <View style={{ margin: 5, alignItems: "center" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                color: COLORS.text,
                fontWeight: "bold",
                marginTop: 3,
              }}
            >
              {item.item.step.address}
            </Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    );
  };
export default index

