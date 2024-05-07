import React from 'react';
import SpotPageView from './components/spotPage/SpotPageView.jsx';
import SpotList from './components/SpotList.jsx';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen
  name="Marée basse"
  component={SpotList}
  option={{title: 'Welcome'}}
  />
  <Stack.Screen
  name="Lumière sur le spot"
  component={SpotPageView}
  />
  </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
