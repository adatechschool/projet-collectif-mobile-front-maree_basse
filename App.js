import React from 'react';
import SpotPageView from './components/spotPage/SpotPageView.js';
import SpotList from './components/SpotList.js';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen
  name="Home"
  component={SpotList}
  option={{title: 'Welcome'}}
  />
  <Stack.Screen
  name="SpotPage"
  component={SpotPageView}
  />
  </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
