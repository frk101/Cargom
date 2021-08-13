import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet, StatusBar } from "react-native";
import promise from "redux-promise-middleware";
import { NotifierWrapper } from "react-native-notifier";
import { createStore, applyMiddleware } from "redux";
import { Provider as PaperProvider } from "react-native-paper";

import { Provider } from "react-redux";
import { multiClientMiddleware } from "redux-axios-middleware";
import { NativeBaseProvider } from 'native-base';
import Navigator from "./navigation/Navigator";
import { axiosClient } from "./constans/variables";
import reducers from "./business/reducers";

const store = createStore(
  reducers,
  {},
  applyMiddleware(promise, multiClientMiddleware(axiosClient))
);

const App = () => {
  return (
    <NotifierWrapper>
      <NativeBaseProvider>
      <PaperProvider>
        <Provider store={store}>
          <StatusBar hidden={true} />
          <Navigator />
        </Provider>
      </PaperProvider>
      </NativeBaseProvider>
      
    </NotifierWrapper>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
