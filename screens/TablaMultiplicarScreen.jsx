import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';

const TablaMultiplicarScreen = () => {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const n = parseInt(numero, 10);
    if (n >= 1 && n <= 13) {
      const nuevaTabla = [];
      for (let i = 1; i <= 13; i++) {
        nuevaTabla.push(`${n} x ${i} = ${n * i}`);
      }
      setTabla(nuevaTabla);
    } else {
      setTabla([]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un número"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Generar Tabla" onPress={generarTabla} />
      {tabla.length > 0 && (
        <FlatList
          style={styles.tabla}
          data={tabla}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
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
  tabla: {
    marginTop: 20,
  },
});

export default TablaMultiplicarScreen;
