import React from 'react';
import { View } from 'react-native';
import SpotView from './components/homePage/spot/SpotView.js';

const App = () => {
  return (
    <View>
      <SpotView
      name="Venice Beach"
      place="Los Angeles"/>
    </View>
  );
};

export default App;
