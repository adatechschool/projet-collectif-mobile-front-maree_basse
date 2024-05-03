import React from 'react';
import { View } from 'react-native';
import SpotView from './components/homePage/spot/SpotView.js';

const App = () => {
  return (
    <View>
      <SpotView
      image = 'chat.jpg'
      name="Venice Beach"
      place="Los Angeles"/>
      <SpotView
      image='download.jpg'
      name="Berlin Beach"
      place="Der Teufle"/>
    </View>
  );
};

export default App;
