import Constants from "expo-constants";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function Dois() {
  return (
    // View pai com paddingTop para evitar a barra de status [cite: 99, 101]
    <View style={styles.container}> 
      {/* Primeiro filho: 50% da tela, cor crimson*/}
      <View style={styles.containerSuperior}> 
        <View style={styles.blocoEsquerda} />
        <View style={styles.blocoDireita} />
    </View>

      {/*Segundo filho: 50% da tela, com cor salmon*/}
      <View style={styles.base} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // [cite: 89]
    flexDirection: 'column', // [cite: 87]
    paddingTop: Constants.statusBarHeight, // [cite: 101]
  },
  containerSuperior: {
    flex: 0.5, // Ocupa 50% da tela [cite: 117]
    flexDirection: 'row', // Alinha os filhos lado a lado [cite: 115]
  },
  blocoEsquerda: {
    flex: 0.5, // 50% da metade superior [cite: 117]
    backgroundColor: 'lime', // 
  },
  blocoDireita: {
    flex: 0.5, // 50% da metade superior [cite: 117]
    backgroundColor: 'aquamarine', // 
  },
  base: {
    flex: 0.5, // Metade inferior da tela [cite: 89]
    backgroundColor: 'salmon', // [cite: 90]
  },
});
