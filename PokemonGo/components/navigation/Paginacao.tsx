import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/app/(tabs)/index';
import Tela from '@/app/(tabs)/TelaPoke';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TelaPoke" component={Tela} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}