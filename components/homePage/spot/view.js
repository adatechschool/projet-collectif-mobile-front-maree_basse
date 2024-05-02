import React from 'react';
import { View, Text } from 'react-native';
import ImageViewer from '../imageViewer.js'

const SpotView = ({ spot }) => {
  return (
    <View>
      //<ImageViewer placeholderImageSource={spot.image}/>
      <Text>{spot.name}</Text>
      <Text>{spot.place}</Text>
    </View>
  );
}

export default SpotView;