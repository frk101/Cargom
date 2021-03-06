import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Layout from "../../components/Layout";
import { AntDesign } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";
import {
  vehicleBrandsGetAll,
  vehicleTypesGetAll,
  vehicleModelsgetByBrand,
} from "../../business/actions/general";
import { vehiclesCreate } from "../../business/actions/shipper";
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { Formik, useFormikContext } from "formik";
import VehiclesScheme from "../../ValidationScheme/VehiclesScheme";
import COLORS from "../../constans/colors";
import { ScrollView as Content } from "native-base";
import { Menu } from "react-native-paper";
import FormErrorText from "../../components/FormErrorText";
import { Notifier, NotifierComponents } from "react-native-notifier";
import { CheckBox } from "react-native-elements";
import styles from "./styles";

const FormikSubmitToken = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();

  const isFocused = useIsFocused();
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (route.params && route.params.driver) {
    } else {
    }
  }, [isFocused]);

  return null;
};

const CreateVehicles = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [visibleBrand, setVisibleBrand] = useState(false);
  const [visibleVehicleType, setVisibleVehicleType] = useState(false);
  const [visibleModel, setVisibleModel] = useState(false);

  const openBrandMenu = () => setVisibleBrand(true);

  const closeBrandMenu = () => setVisibleBrand(false);

  const openVehicleTypeMenu = () => setVisibleVehicleType(true);

  const closeVehicleTypeMenu = () => setVisibleVehicleType(false);

  const openModelMenu = () => setVisibleModel(true);

  const closeModelMenu = () => setVisibleModel(false);

  const {
    vehicleGetAllBrandsResult,
    vehicleGetAllBrandsLoading,
    vehicleTypesGetAllResult,
    vehicleTypesGetAllLoading,
    vehicleModelGetByBrandResult,
    vehicleModelGetByBrandLoading,
  } = useSelector((x) => x.general);

  useEffect(() => {
    _getVehiclesBrandList();
    _vehicleTypesGetAll();
    return () => {};
  }, []);

  const _getVehiclesBrandList = async () => {
    dispatch(vehicleBrandsGetAll());
  };

  const _vehicleTypesGetAll = async () => {
    dispatch(vehicleTypesGetAll());
  };

  const _vehicleModelsgetByBrand = async (brandId) => {
    if (brandId) dispatch(vehicleModelsgetByBrand(brandId));
  };

  const _handleChooseBrand = (item) => {
    _vehicleModelsgetByBrand(item.id);
    closeBrandMenu();
  };

  const _handleSubmit = (values) => {
    values.Desi = parseFloat(values.Desi);
    dispatch(vehiclesCreate(values)).then(({ payload: { data } }) => {
      if (data.status) {
        navigation.navigate("VehiclesScreen");
        Notifier.showNotification({
          title: "UYARI",
          description: "Yeni ara?? ekleme i??lemi ba??ar??l??.",
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: "success",
          },
        });
      } else {
        let message = "Kay??t i??lemi s??ras??nda bir hata olu??tu.";
        if (data.message) {
          message += data.message;
        }
        Notifier.showNotification({
          title: "UYARI",
          description: message,
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: "error",
          },
        });
      }
    });
  };

  return (
    <Layout
      title="Ara?? Ekle"
      left={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            style={{ paddingHorizontal: 10, color: "black" }}
            size={24}
            color={COLORS.themeColor}
          />
        </TouchableOpacity>
      }
    >
      <Content>
        <Formik
          initialValues={{
            VehicleTypeId: null,
            VehicleTypeText: "Ara?? T??r?? Se??iniz",
            VehicleBrandId: null,
            VehicleBrandText: "Marka Se??iniz",
            VehicleModelId: null,
            VehicleModelText: "Model Se??iniz",
            Plate: "",
            Desi: "",
            ChangingPart: false,
          }}
          validationSchema={VehiclesScheme}
          onSubmit={(values) => _handleSubmit(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <>
              <Text style={styles.text_footer}>Ara?? T??r??</Text>
              <View style={styles.action}>
                <Menu
                  visible={visibleVehicleType}
                  onDismiss={closeVehicleTypeMenu}
                  anchor={
                    <TouchableOpacity
                      onPress={() => {
                        handleChange("VehicleTypeId");
                        openVehicleTypeMenu();
                      }}
                    >
                      <Text>
                        {values.VehicleTypeId
                          ? values.VehicleTypeText
                          : "Ara?? T??r?? Se??iniz"}
                      </Text>
                    </TouchableOpacity>
                  }
                >
                  {vehicleTypesGetAllResult &&
                    vehicleTypesGetAllResult.data &&
                    vehicleTypesGetAllResult.data.map((item) => {
                      return (
                        <Menu.Item
                          key={item.id.toString()}
                          onPress={() => {
                            setFieldValue("VehicleTypeId", item.id, true);
                            setFieldValue("VehicleTypeText", item.typeName);
                            closeVehicleTypeMenu();
                          }}
                          title={item.typeName}
                        />
                      );
                    })}
                </Menu>
              </View>
              {errors.VehicleTypeId && touched.VehicleTypeId ? (
                <FormErrorText>* {errors.VehicleTypeId}</FormErrorText>
              ) : null}

              <Text style={styles.text_footer}>Marka</Text>
              <View style={styles.action}>
                <Menu
                  visible={visibleBrand}
                  onDismiss={closeBrandMenu}
                  anchor={
                    <TouchableOpacity
                      onPress={() => {
                        handleChange("VehicleBrandId");
                        openBrandMenu();
                      }}
                    >
                      <Text>
                        {values.VehicleBrandId
                          ? values.VehicleBrandText
                          : "Marka Se??iniz"}
                      </Text>
                    </TouchableOpacity>
                  }
                >
                  {vehicleGetAllBrandsResult &&
                    vehicleGetAllBrandsResult.data &&
                    vehicleGetAllBrandsResult.data.map((item) => {
                      return (
                        <Menu.Item
                          key={item.id.toString()}
                          onPress={() => {
                            setFieldValue("VehicleBrandId", item.id, true);
                            setFieldValue("VehicleModelId", null, true);
                            setFieldValue("VehicleBrandText", item.brandName);
                            _handleChooseBrand(item);
                          }}
                          title={item.brandName}
                        />
                      );
                    })}
                </Menu>
              </View>
              {errors.VehicleBrandId && touched.VehicleBrandId ? (
                <FormErrorText>* {errors.VehicleBrandId}</FormErrorText>
              ) : null}

              <Text style={styles.text_footer}>Model</Text>
              <View style={styles.action}>
                <Menu
                  visible={visibleModel}
                  onDismiss={closeModelMenu}
                  anchor={
                    <TouchableOpacity
                      onPress={() => {
                        handleChange("VehicleModelId");
                        openModelMenu();
                      }}
                    >
                      <Text>
                        {values.VehicleModelId
                          ? values.VehicleModelText
                          : "Model Se??iniz"}
                      </Text>
                    </TouchableOpacity>
                  }
                >
                  {vehicleModelGetByBrandResult &&
                    vehicleModelGetByBrandResult.data &&
                    vehicleModelGetByBrandResult.data.map((item) => {
                      return (
                        <Menu.Item
                          key={item.id.toString()}
                          onPress={() => {
                            setFieldValue("VehicleModelId", item.id, true);
                            setFieldValue("VehicleModelText", item.modelName);
                            setFieldValue("Desi", item.desi);
                            closeModelMenu();
                          }}
                          title={item.modelName}
                        />
                      );
                    })}
                  {/* {vehicleModelGetByBrandResult && vehicleModelGetByBrandResult.data && (
                    <Menu.Item
                      key={vehicleModelGetByBrandResult.data.id.toString()}
                      onPress={() => {
                        setFieldValue("VehicleModelId", vehicleModelGetByBrandResult.data.id, true);
                        setFieldValue("VehicleModelText", vehicleModelGetByBrandResult.data.modelName);
                        setFieldValue("Desi", vehicleModelGetByBrandResult.data.desi);
                        closeModelMenu();
                      }}
                      title={vehicleModelGetByBrandResult.data.modelName}
                    />
                  )} */}
                </Menu>
              </View>
              {errors.VehicleModelId && touched.VehicleModelId ? (
                <FormErrorText>* {errors.VehicleModelId}</FormErrorText>
              ) : null}

              <Text
                style={[
                  styles.text_footer,
                  {
                    color: COLORS.text,
                    marginTop: 20,
                  },
                ]}
              >
                Plaka
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="Plakan??z?? giriniz"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: COLORS.text,
                    },
                  ]}
                  onChangeText={handleChange("Plate")}
                  onBlur={handleBlur("Plate")}
                  value={values.Plate}
                />
              </View>
              {errors.Plate && touched.Plate ? (
                <FormErrorText>* {errors.Plate}</FormErrorText>
              ) : null}
              <View style={styles.checkedAction}>
                <CheckBox
                  title="Arac??n??zda de??i??iklik var m?? ?"
                  checkedColor={COLORS.primary}
                  onPress={() =>
                    setFieldValue("ChangingPart", !values.ChangingPart, true)
                  }
                  checked={values.ChangingPart}
                />
              </View>

              {!values.ChangingPart ? null : (
                <>
                  <Text
                    style={[
                      styles.text_footer,
                      {
                        color: COLORS.text,
                        marginTop: 20,
                      },
                    ]}
                  >
                    Hacim
                  </Text>
                  <View style={styles.action}>
                    <TextInput
                      placeholder="Hacim giriniz"
                      placeholderTextColor="#666666"
                      keyboardType="numeric"
                      style={[
                        styles.textInput,
                        {
                          color: COLORS.text,
                        },
                      ]}
                      onChangeText={handleChange("Desi")}
                      onBlur={handleBlur("Desi")}
                      value={values.Desi.toString()}
                    />
                  </View>
                  {errors.Desi && touched.Desi ? (
                    <FormErrorText>* {errors.Desi}</FormErrorText>
                  ) : null}
                </>
              )}

              <TouchableOpacity style={styles.btnGonder} onPress={handleSubmit}>
                <Text style={styles.btnText}>Ekle</Text>
              </TouchableOpacity>
              <FormikSubmitToken />
            </>
          )}
        </Formik>
      </Content>
    </Layout>
  );
};

export default CreateVehicles;
