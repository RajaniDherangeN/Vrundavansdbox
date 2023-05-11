import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { logo } from "./assets";
import { Footer } from "./components";

function App() {
  return (
    <ScrollView style={StyleSheet.app}>
      <Image
        source={{ uri: `${logo}` }}
        // accessibilityLabel="React logo"
        style={style.logo}
      />
      {/* <ScrollView> */}
      <View>
        <Footer />
      </View>
      {/* </ScrollView> */}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  logo: {
    display: "flex",
    height: "100px",
    // margin: "1rem auto",
    width: "184.2px",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
