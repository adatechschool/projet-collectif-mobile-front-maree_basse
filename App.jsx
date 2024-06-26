import React from 'react';
import Spot from './components/spotPage/Spot.jsx';
import SpotList from './components/homePage/SpotList.jsx';
import AddSpot from './components/addSpotPage/AddSpot.jsx';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <SafeAreaProvider>
  <NavigationContainer>
  <Stack.Navigator
  screenOptions={{
        headerShown: false
      }}>
   <Stack.Screen
  name="Marée basse"
  component={SpotList}
  option={{title: 'Welcome'}}
  />
  <Stack.Screen
  name="Ajouter un spot"
  component={AddSpot}
  />

  <Stack.Screen
  name="Lumière sur le spot"
  component={Spot}
  />
  </Stack.Navigator>
  </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
