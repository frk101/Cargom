import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Layout from '../../components/Layout'
import { WebView } from 'react-native-webview';
import { ScrollView } from 'native-base';
import { useRoute, useNavigation, useTheme } from "@react-navigation/native";
const index = () => {
    const route = useRoute();

   
    return (
        <Layout title={route.params.title}>
     
      <WebView 
           
           style={styles.container}
           source={{ uri: `https://mobileweb.shipgeldi.com/${route.params.url}` }}
         />
     
          
        </Layout>
    )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
