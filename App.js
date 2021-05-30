import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import Navigator from "./navigation/Navigator";
import FileUploadScreen from "./screens/FileUploadScreen";
import { AuthContext } from "./components/context";

const App = () => {
  const [isLoading, setIslaoding] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken("fff");
      setIslaoding(false);
    },
    signOut: () => {
      setUserToken(null);
      setIslaoding(false);
    },
    signUp: () => {
      setUserToken("fff");
      setIslaoding(false);
    },
  }));
  useEffect(() => {
    setTimeout(() => {
      setIslaoding(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Navigator />
    </AuthContext.Provider>
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
