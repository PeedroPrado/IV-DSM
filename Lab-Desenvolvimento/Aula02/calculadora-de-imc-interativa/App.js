import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App (){
  const [peso, setPeso ] = useState ("");
  const [altura, setAltura] = useState ("");

  const [imc, setImc ] = useState(null);
  const [classificacao, setClassificacao] = useState("");
  const [cor, setCor] = useState("black");

  const classificarIMC = (valor) =>{
    if (valor < 18.5) return {texto: "Abaixo do peso", cor: "orange"};
    if (valor < 25 ) return {texto: "Peso normal", cor: "green"};
    if (valor < 30 ) return {texto: "Sobrepeso", cor: "gold"};
    if (valor < 35 ) return {texto: "Obesidade I", cor: "yellow" };
    if (valor < 40) return {texto: "Obsedidade II", cor: "red"};
    return { texto: "Obseridade III", cor:"darkred"};
  };

  const calcularIMC = () => {
    if(!peso || !altura){
      alert("Preencha os campos");
      return;
    }
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    const resultado = p / (a * a);
    setImc(resultado.toFixed(2));

    const dados = classificarIMC(resultado);
    setClassificacao(dados.texto);
    setCor(dados.cor);
  };

  const limpar = () => {
    setPeso("");
    setAltura("");
    setImc(null);
    setClassificacao("");
  };

  return (
  <View style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <View style={styles.buttonSpacing}>
        <Button title="Calcular IMC" onPress={calcularIMC} />
      </View>

      <View style={styles.buttonSpacing}>
        <Button title="Limpar" onPress={limpar} color="#999" />
      </View>

      {imc && (
        <View style={styles.resultadoBox}>
          <Text style={styles.resultado}>{imc}</Text>
          <Text style={[styles.classificacao, { color: cor }]}>
            {classificacao}
          </Text>
        </View>
      )}
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef1f5",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#fafafa",
    fontSize: 16,
  },

  buttonSpacing: {
    marginTop: 8,
  },

  resultadoBox: {
    marginTop: 20,
    alignItems: "center",
  },

  resultado: {
    fontSize: 28,
    fontWeight: "bold",
  },

  classificacao: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 5,
  },
});