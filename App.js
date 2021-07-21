import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet } from "react-native";
import promise from "redux-promise-middleware";
import { NotifierWrapper } from "react-native-notifier";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { multiClientMiddleware } from "redux-axios-middleware";

import Navigator from "./navigation/Navigator";
import { axiosClient } from "./constans/variables";
import reducers from "./business/reducers";

const store = createStore(reducers, {}, applyMiddleware(promise, multiClientMiddleware(axiosClient)));

const App = () => {
  return (
    <NotifierWrapper>
      <Provider store={store}>
        <Navigator />
      </Provider>
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
