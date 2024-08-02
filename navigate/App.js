/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/Homescreen';
import Profile from './src/Profile';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
 <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Homescreen' component={HomeScreen} />
    <Stack.Screen name='Profile' component={Profile} />
  </Stack.Navigator>
 </NavigationContainer>
  )
}

export default App