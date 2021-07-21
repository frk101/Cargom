import React from "react";
import { Formik } from "formik";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import COLORS from "../../constans/colors";
import { Container, Content } from "native-base";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import FormErrorText from "../../components/FormErrorText";
import { shipperRegisterBeginRequest } from "../../business/actions/shipper";

const RegisterScheme = Yup.object().shape({
  firstName: Yup.string().min(1, "Boş geçilemez!").max(50, "Hatalı giriş yaptınız!").required("Boş geçilemez"),
  lastName: Yup.string().min(1, "Boş geçilemez!").max(50, "Hatalı giriş yaptınız!").required("Boş geçilemez"),
  phoneNumber: Yup.string().min(15, "Boş geçilemez!").max(50, "Hatalı giriş yaptınız!").required("Boş geçilemez"),
});

const Bireysel = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const _handleRegister = (values) => {
    values.phoneNumber = values.phoneNumber.replace("(", "").replace(")", "").replace("-", "").replace(/\s/g, "").trim();
    values.shipperType = 1;
    dispatch(shipperRegisterBeginRequest(values)).then((x) => {
      console.log(x);
    });
  };

  return (
    <Container>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <View style={styles.backBtn}>
            <Image source={require("../../assets/backicon.png")} style={{ width: 30, height: 30 }} resizeMode="contain" />
          </View>
        </TouchableOpacity>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>Hesabınızı Oluşturun</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.headerSubTitle}>
              Zaten Hesabın var mı ?<Text style={{ color: COLORS.primary }}>Giriş Yap</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <Content>
          <Formik initialValues={{ firstName: "", lastName: "", phoneNumber: "" }} onSubmit={(values) => _handleRegister(values)} validationSchema={RegisterScheme}>
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: COLORS.text,
                      marginTop: 35,
                    },
                  ]}
                >
                  Ad
                </Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Adınızı giriniz"
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    style={[
                      styles.textInput,
                      {
                        color: COLORS.text,
                      },
                    ]}
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                  />
                  {errors.firstName && touched.firstName ? <FormErrorText>{errors.firstName}</FormErrorText> : null}
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
                  Soyad
                </Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Soyadınızı giriniz"
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    style={[
                      styles.textInput,
                      {
                        color: COLORS.text,
                      },
                    ]}
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                  />
                  {errors.lastName && touched.lastName ? <FormErrorText>{errors.lastName}</FormErrorText> : null}
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
                  Telefon Numarası
                </Text>
                <View style={styles.action}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>+90</Text>
                  </View>

                  <TextInputMask
                    placeholder="Telefon Numaranızı Giriniz"
                    style={styles.textInput}
                    type={"cel-phone"}
                    options={{
                      maskType: "BRL",
                      withDDD: true,
                      dddMask: "(999) 999 99-99",
                    }}
                    maxLength={15}
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    value={values.phoneNumber}
                  />
                  {errors.phoneNumber && touched.phoneNumber ? <FormErrorText>{errors.phoneNumber}</FormErrorText> : null}
                </View>

                <TouchableOpacity onPress={handleSubmit} style={styles.btnGonder}>
                  <Text style={styles.btnText}>Kayıt Ol</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default Bireysel;

const styles = StyleSheet.create({
  headerWrapper: { marginHorizontal: 20, marginTop: 20 },
  headerTitle: { fontSize: 30, fontWeight: "bold", color: COLORS.text },
  headerSubTitle: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 10,
  },
  back: { marginTop: 40, marginLeft: 20 },
  btnGonder: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    borderRadius: 10,
  },
  btnText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
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
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  backBtn: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});
