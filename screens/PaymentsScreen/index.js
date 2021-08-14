import React ,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Layout from '../../components/Layout'
import { WebView } from 'react-native-webview';
import { Divider } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import {
    shipperMyInvoıcesGetByShipperId,  
  } from "../../business/actions/shipper";
import { TouchableOpacity } from 'react-native';
import COLORS from "../../constans/colors"
import moment from "moment";
import styles from "./styles";
import { useRoute, useNavigation, useTheme } from "@react-navigation/native";


const index = () => {
    const [aktifKey,setAktifKey]=useState(false)
    const PressData = (val) => {
        setAktifKey(val);
      };
      const dispatch = useDispatch();

      const { shipperMyInvoicesGetByShipperIdResult } = useSelector((x) => x.shipper);
      useEffect(() => {
        _handleGetMyOfferDetail();
        ;
        return () => {};
      }, [0]);
    
      
      
    
      const _handleGetMyOfferDetail = () => {
        dispatch(shipperMyInvoıcesGetByShipperId(0))
       
     
      };
     
    return (
        <Layout title='Ödemeler' isBackIcon>

           <View style={{alignItems:"center",justifyContent:"center",marginVertical:30}}>
               <Text>Bakiye</Text>
           </View>
            <FlatList data={shipperMyInvoicesGetByShipperIdResult.data} renderItem={({item})=><RenderList item={item}/>} kkeyExtractor={(item)=>item.id}/>
        
        
        </Layout>
    )
}
const RenderList=({item})=>{
    const navigation = useNavigation();
  
return(
    <View style={{marginHorizontal:20,}}>
         <TouchableOpacity style={{marginVertical:10,padding:5}} onPress={()=>navigation.navigate("WebView",{
                title: "Ödeme Detay",
                url:"?"
              })}>
   <View style={{flexDirection:"row",justifyContent:"space-between"}}>
           <View style={{borderLeftColor:
             
                  item.status === 10
                    ? "#0866C6"
                    : item.status === 20
                    ? "#F49917"
                    : item.status === 30
                    ? "#F49917"
                    : item.status === 31
                    ? "#23BF08" 
                    : item.status === 40
                    ? "#0866C6" 
                    : null,
                  borderLeftWidth:4,borderRadius:3}}>
    <Text style={{marginLeft:5,color:COLORS.text}}> 
                  {item.status === 10
                  ? "Fatura Bekliyor"
                  : item.status === 20
                  ? "İnceleniyor"
                  : item.status === 30
                  ? "Ödenecek"
                  : item.status === 31
                  ? "Ödendi"
                  : item.status === 40
                  ? "İptal"
                  : null}</Text>
                  {item.paymentDate ==null ? <Text></Text>: <Text style={{marginLeft:5,color:COLORS.gray}}> {moment(item.paymentDate).format("DD MMMM YYYY")}</Text>}
   
           </View>
           <View>
            <Text style={{textAlign:"right",color:COLORS.text}}>₺{" "} {item.price}</Text>
               <Text style={{color:COLORS.gray,fontSize:10}}>
                   {moment(item.dateStart).format("DD MMMM YYYY")} - {moment(item.dateEnd).format("DD MMMM YYYY")}
                   </Text>
           </View>
          </View>
    </TouchableOpacity>
    <Divider/>
    </View>
   
)
}
export default index

