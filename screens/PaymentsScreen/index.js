import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Layout from '../../components/Layout'
import { WebView } from 'react-native-webview';
import { Divider } from "react-native-elements";
const index = () => {
    return (
        <Layout title='Ödemeler' isBackIcon>
             <Divider/>
           <WebView
      style={styles.container}
      source={{ uri: 'https://expo.dev' }}/>
     
        </Layout>
    )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
