import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const TraductorScreen = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const traducir = () => {
    const numeros = [
      'cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
      'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve',
      'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve',
      'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa',
      'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos',
      'mil'
    ];

    const n = parseInt(numero);
    if (n >= 0 && n <= 1000) {
      setResultado(numeros[n]);
    } else {
      setResultado('Número fuera de rango');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un número del 0 al 1000"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Traducir" onPress={traducir} />
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default TraductorScreen;
