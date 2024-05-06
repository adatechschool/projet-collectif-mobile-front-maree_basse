import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import SpotViewModel from './SpotViewModel';
import ImageViewer from '../ImageViewer'


const SpotView = (props) => {
 const display = SpotViewModel(props.name,props.place, props.image);
  return (

    <View>
      <ImageBackground  source={{uri:display.spot.image}} style={styles.image}>
        <Text style={styles.name}>{display.spot.name}</Text>
        <Text style={styles.place}>{display.spot.place}</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 180,
    borderRadius: 18,
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    marginLeft: 12,
    marginTop: 6,
    },
  place: {
      color: 'white',
      fontSize: 18,
      textShadowColor: 'black',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 5,
      marginLeft: 12,
    },
});

export default SpotView;
