import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import SpotViewModel from './SpotViewModel';
import ImageViewer from '../ImageViewer'


const SpotView = (props) => {

 const display = SpotViewModel(props.name,props.place, props.image);
  return (

    <View>
      <Image style={styles.image} source={{uri:display.spot.image}}/>
      <Text>{display.spot.name}</Text>
      <Text>{display.spot.place}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 100,
    borderRadius: 18,
  },
});

export default SpotView;