import React, { useState } from 'react';

import {View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App(){

  const [nota1, setNota1] = useState ('');
  const [nota2, setNota2] = useState ('');
  const [nota3, setNota3] = useState ('');
  const [nota4, setNota4] = useState ('');

// Armazenar média
const [media, setMedia] = useState('');

// Armazenar erro
const [erro, setErro] = useState('');

// Função que calcula a média
const calcularMedia = () => {
const n1 = parseFloat(nota1);
const n2 = parseFloat(nota2);
const n3 = parseFloat(nota3);
const n4 = parseFloat(nota4);

// Verifica se o valor das notas são válidos
if (isNaN(n1)|| isNaN(n2) || isNaN(n3) || isNaN(n4)) {
  setErro("Inserir números válidos");
    setMedia(null); //limpa a media

    return; 
    }

    setErro('') //limpa a mensagem de erro

    const resultado = (
      (n1 * 0.1) +
      (n2 * 0.1) +
      (n3 * 0.3) +
      (n4 * 0.5)
    ).toFixed(2);

  setMedia(resultado); //Atualiza o estado da média
  };

  return(
    <View style= {styles.container}>
    {/*Título da Aplicação */}
    <Text style = {styles.title}>Calculadora de Media</Text>

      <TextInput
        style = {styles.input}
        placeholder = "Nota 1"
        keyboardType = "numeric"
        value = {nota1}
        onChangeText = {setNota1}
        />

        <TextInput
        style = {styles.input}
        placeholder = "Nota 2"
        keyboardType = "numeric"
        value = {nota2}
        onChangeText = {setNota2}
        />

        <TextInput
        style = {styles.input}
        placeholder = "Nota 3"
        keyboardType = "numeric"
        value = {nota3}
        onChangeText = {setNota3}
        />

        <TextInput
        style = {styles.input}
        placeholder = "Nota 4"
        keyboardType = "numeric"
        value = {nota4}
        onChangeText = {setNota4}
        />

        <Button title = "Calcular Média" onPress = {calcularMedia} />

      {media && <Text style={styles.result}> Media Final: {media}</Text> }
      {erro ? <Text styles = {styles.error}> {erro}</Text> : null}
      </View>
  );
}

// Estilos na aplicação

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa a tela
    justifyContent: 'center',
    alignItens: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1'
  },

  title:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input:{
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadios: 5,
    marginBottom: 10,
    backgroundColor: '#fff'
  },

  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green'
  },

  error: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  }
}
)
