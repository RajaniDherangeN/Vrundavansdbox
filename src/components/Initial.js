import React from "react";
import { View,Image, StyleSheet, ScrollView } from "react-native";
import {logo,background} from "./assets";

function start(){
  return(
  <ScrollView style={StyleSheet.start}>
      <Image
        source={{ uri: `${logo}` }}
        // accessibilityLabel="React logo"
        style={style.logo}
      />
  )
}