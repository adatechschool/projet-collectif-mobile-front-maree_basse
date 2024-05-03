import React from 'react';
import { View } from 'react-native';
import SpotView from './components/homePage/spot/SpotView.js';

const App = () => {
  return (
    <View>
      <SpotView
      image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Colombus_Isle.JPG/1200px-Colombus_Isle.JPG?20140713144334'
      name="Venice Beach"
      place="Los Angeles"/>
      <SpotView
      image='https://img.freepik.com/photos-gratuite/beau_1203-2633.jpg'
      name="Berlin Beach"
      place="Der Teufle"/>
    </View>
  );
};

export default App;
