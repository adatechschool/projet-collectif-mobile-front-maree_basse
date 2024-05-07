import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, Pressable} from 'react-native';
import SpotViewModel from './SpotViewModel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const SpotView = (props) => {
 const display = SpotViewModel(props.name,props.place, props.image);
 const navigation = useNavigation();

  return (
    <View>
  <Pressable onPress={() => navigation.navigate('Lumière sur le spot')}>
      <ImageBackground  source={{uri:display.spot.image}} style={styles.image}>
        <Text style={styles.name}>{display.spot.name}</Text>
        <Text style={styles.place}>{display.spot.place}</Text>
      </ImageBackground>
</Pressable>
    </View>
  );
};

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
