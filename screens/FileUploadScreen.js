import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather, AntDesign } from "react-native-vector-icons/";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../constans/colors";
import { Container, Content, Label } from "native-base";

const FileUploadScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <TouchableOpacity style={{ marginTop: 40, marginLeft: 20 }}>
          <Image
            source={require("../assets/backicon.png")}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", color: COLORS.text }}
          >
            Dosya Yükle
          </Text>
          <Text style={{ fontSize: 12, color: COLORS.gray, marginTop: 10 }}>
            *Simgesi olan belgeler yüklemesi zorunlu olan belgelerdir.
          </Text>
        </View>
        <ScrollView>
          <Text style={[styles.text_footer]}>Sürücü Belgesi*</Text>
          <View style={styles.action}>
            <Text style={styles.textInput}>
              Sürücü Belgenizin fotoğrafını seçiniz
            </Text>

            <Feather name="upload" size={25} color={COLORS.gray} />
          </View>
          <Text style={[styles.text_footer]}>Sürücü Belgesi*</Text>
          <View style={styles.action}>
            <Text style={styles.textInput}>
              Sürücü Belgenizin fotoğrafını seçiniz
            </Text>

            <Feather name="upload" size={25} color={COLORS.gray} />
          </View>
          <Text style={[styles.text_footer]}>Vergi Levhası*</Text>
          <View style={styles.action}>
            <Text style={styles.textInput}>Vergi Levhası</Text>

            <Feather name="upload" size={25} color={COLORS.gray} />
          </View>

          <Text style={[styles.text_footer]}>Sürücü Belgesi*</Text>
          <View style={styles.action}>
            <Text style={styles.textInput}>
              Sürücü Belgenizin fotoğrafını seçiniz
            </Text>

            <Feather name="upload" size={25} color={COLORS.gray} />
          </View>
          <Text style={[styles.text_footer]}>Sürücü Belgesi*</Text>
          <View style={[styles.action]}>
            <Text style={styles.textInput}>
              Sürücü Belgenizin fotoğrafını seçiniz
            </Text>

            <Feather name="upload" size={25} color={COLORS.gray} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("DrawerScreen")}
            style={styles.btnGonder}
          >
            <Text style={styles.btnText}>Gönder</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default FileUploadScreen;

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    padding: 13,
    backgroundColor: COLORS.lightGray,
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
  btnGonder: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 20,
  },
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
});
