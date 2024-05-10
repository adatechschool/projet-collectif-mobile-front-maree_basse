import React from 'react';
import Spot from './components/spotPage/Spot.jsx';
import SpotList from './components/homePage/SpotList.jsx';
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
  component={Spot}
  />
  </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
