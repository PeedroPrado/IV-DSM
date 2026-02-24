import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import logo from "../../assets/adaptive-icon.png"; // Importação da imagem [cite: 143]

export default function Quatro() {
  return (
    <View style={styles.container}>
      <View style={styles.containerSuperior}>
        <View style={styles.blocoLime}>
          {/* Imagem centralizada no quadrante lime [cite: 144] */}
          <Image source={logo} style={styles.imagem} resizeMode="contain" />
        </View>
        
        <View style={styles.containerDireito}>
          <View style={styles.blocoTeal}>
             <Image source={logo} style={styles.imagem} resizeMode="contain" />
          </View>
          <View style={styles.blocoSkyblue}>
             <Image source={logo} style={styles.imagem} resizeMode="contain" />
          </View>
        </View>
      </View>
      
      <View style={styles.base}>
         <Image source={logo} style={styles.imagem} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  containerSuperior: {
    flex: 0.5,
    flexDirection: 'row',
  },
  blocoLime: {
    flex: 0.5,
    backgroundColor: 'lime',
    justifyContent: 'center', // Centraliza a imagem verticalmente
    alignItems: 'center',     // Centraliza a imagem horizontalmente
  },
  containerDireito: {
    flex: 0.5,
  },
  blocoTeal: {
    flex: 0.5,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blocoSkyblue: {
    flex: 0.5,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  base: {
    flex: 0.5,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    flex: 1,           // A imagem tenta ocupar o espaço disponível 
    alignSelf: 'center', // Alinha no centro [cite: 144]
    // O resizeMode="contain" no componente garante que ela não distorça 
  },
});