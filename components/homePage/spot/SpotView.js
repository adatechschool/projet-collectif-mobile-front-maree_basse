import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import SpotViewModel from './SpotViewModel';
import ImageViewer from '../ImageViewer'


const SpotView = (props) => {
 const display = SpotViewModel(props.name,props.place, props.image);
  return (

    <View>
      <ImageViewer  imageSpot={{uri:display.spot.image}}/>
      <Text>{display.spot.name}</Text>
      <Text>{display.spot.place}</Text>
    </View>
  )
}

export default SpotView;