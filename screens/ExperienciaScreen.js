import React from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';

const ExperienciaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mi Experiencia</Text>
      <WebView
        style={styles.webview}
        source={{ uri: 'https://drive.google.com/drive/folders/15oMJLMRDPUr-i6FFJ_qBqlCj3qzwue4Q?usp=drive_link' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  webview: {
    width: '100%',
    height: 300,
  },
});

export default ExperienciaScreen;
