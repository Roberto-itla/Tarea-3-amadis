import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.text}>Nombre: Roberto</Text>
      <Text style={styles.text}>Apellido: Isaac</Text>
      <Text style={styles.text}>Correo electrónico: Robertoisaac170@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomeScreen;
