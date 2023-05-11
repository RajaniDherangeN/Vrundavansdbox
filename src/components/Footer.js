import React from "react";
import { Image, StyleSheet, View, ScrollView } from "react-native";
import { blog, camera, assistant } from "../assets";

function Footer() {
  return (
    <ScrollView style={{ position: "absolute", top: "50rem" }}>
      {/* Footer */}
      <View style={style.footer}>
        <View>
          <Image source={{ uri: `${assistant}` }} style={style.footerImg} />
        </View>
        <View>
          <Image source={{ uri: `${camera}` }} style={style.footerImg} />
        </View>
        <View>
          <Image source={{ uri: `${blog}` }} style={style.footerImg} />
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  footer: {
    backgroundColor: "#ff934f",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    flex: "1",
    justifyContent: "space-around"
    // width: "500px",
  },

  footerImg: {
    width: "30px",
    height: "3rem",
    margin: "10px"
    // display: "inline"
  }
});

export default Footer;
