import Constants from "expo-constants";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function Um() {
  return (
    // View pai com paddingTop para evitar a barra de status [cite: 99, 101]
    <View style={styles.container}>
      {/* Primeiro filho: 50% da tela, cor crimson*/}
      <View style={styles.topo} />

      {/*Segundo filho: 50% da tela, com cor salmon*/}
      <View style={styles.base} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Tela Toda
    flexDirection: "column", // Eixo na vertical
    paddingTop: Constants.statusBarHeight, // Desloca o inicio após a status bar
  },
  topo: {
    flex: 0.5, //50% da area
    backgroundColor: "crimson",
  },
  base: {
    flex: 0.5, // 50% da area
    backgroundColor: "salmon",
  },
});
