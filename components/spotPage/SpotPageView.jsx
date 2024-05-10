import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, ImageBackground, Pressable} from 'react-native';
import SpotViewModel from '../SpotViewModel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const SpotPageView = (props) => {
 const display = SpotViewModel(props.id, props.name,props.place,props.image,props.stars,props.breaktype,props.peakseason,props.link,props.influencer);
 const navigation = useNavigation();

  return (
    <ScrollView>
    <Image style={styles.image} source={{uri:display.spot.image}}/>
    <Text style={styles.name}>{display.spot.name}</Text>
    <Text style={styles.title}>Place</Text>
    <Text style={styles.place}>{display.spot.place}</Text>
    <Text style={styles.title}>Difficulty</Text>
    <Image Difficulty Level/>
    <Text style={styles.title}>Surf Break</Text>
    <Text>Surf Break</Text>
    <Text style={styles.title}>Peak Surf Season</Text>
<Text>Peak Surf Season</Text>
<Text style={styles.title}>Geocode</Text>
<View style={styles.geocode}><Text>eyJpIjoiTWFudSBCYXksIFJhZ2xhbiwgTmV3IFplYWxhbmQiLCJvIjp7InN0YXR1cyI6Ik9LIiwiZm9ybWF0dGVkQWRkcmVzcyI6Ik1hbnUgQmF5IFJkLCBSYWdsYW4gMzI5NywgTmV3IFplYWxhbmQiLCJsYXQiOi0zNy44MjE0NTkyLCJsbmciOjE3NC44MTIyMTYxOTk5OTk5N30sImUiOjE1MzUzMDcwMjYwNTJ9</Text></View>
<Text style={styles.title}>Influencers</Text>
<Text>Influencers</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 300,
    marginBottom: 10,
  },
  name: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 12,


    },
  title: {
      color: 'grey',
      fontSize: 12,
      marginTop:12,
      marginLeft:6,
      textTransform: 'uppercase',
    },

      place: {
          color: 'black',
          fontSize: 18,
          marginLeft:6,
        },

        geocode :{
        Color:'black',
        backgroundColor:'#e1ecf7',
        fontSize: 18,
        marginLeft:6,
        marginRight:6,
        borderRadius:8,

        }
});

export default SpotPageView;
