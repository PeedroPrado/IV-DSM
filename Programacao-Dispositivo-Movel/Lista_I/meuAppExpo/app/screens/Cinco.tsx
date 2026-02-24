import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import Constants from 'expo-constants'; 
import logo from "../../assets/adaptive-icon.png"; 

export default function Cinco() {
  // Função que detecta a plataforma e exibe o alerta correto
  const exibirAlerta = () => {
    const mensagem = "Boa noite!";
    
    if (Platform.OS === 'web') {
      // No navegador (PC), usamos o alert padrão do JS
      alert(mensagem);  
    } else {
      // No celular (Expo Go), usamos o Alert nativo
      Alert.alert(mensagem); 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSuperior}>
        <View style={styles.blocoLime}>
          <TouchableOpacity onPress={exibirAlerta}>
            <Image source={logo} style={styles.imagem} resizeMode="contain" /> 
          </TouchableOpacity>
        </View>
        
        <View style={styles.containerDireito}>
          <View style={styles.blocoTeal}>
            <TouchableOpacity onPress={exibirAlerta}>
              <Image source={logo} style={styles.imagem} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View style={styles.blocoSkyblue}>
            <TouchableOpacity onPress={exibirAlerta}>
              <Image source={logo} style={styles.imagem} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      <View style={styles.base}>
        <TouchableOpacity onPress={exibirAlerta}>
          <Image source={logo} style={styles.imagem} resizeMode="contain" />
        </TouchableOpacity>
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
    justifyContent: 'center', 
    alignItems: 'center',     
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
    width: 64,  
    height: 64, 
  },
});