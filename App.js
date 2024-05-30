import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Suma from './screens/SumadoraScreen';
import Traductor from './screens/TraductorScreen';
import Tabla from './screens/TablaMultiplicarScreen';
import PersonalExp from './screens/ExperienciaScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sumadora" component={Suma} />
        <Stack.Screen name="Traductor" component={Traductor} />
        <Stack.Screen name="TablaMultiplicar" component={Tabla} />
        <Stack.Screen name="ExperienciaPersonal" component={PersonalExp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
