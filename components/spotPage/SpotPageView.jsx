import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import SpotViewModel from '../SpotViewModel';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SpotPageView = (props) => {
  const display = SpotViewModel(props.id, props.name, props.place, props.image, props.difficulty, props.breaktype, props.peakseasonbegins, props.peakseasonends, props.link, props.geocode);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={{ position: 'relative'}}>
        <ScrollView>
          <Image style={styles.image} source={{ uri: display.spot.image }} />
          <Text style={styles.name}>{display.spot.name}</Text>
          <Text style={styles.title}>Place</Text>
          <Text style={styles.grand}>{display.spot.place}</Text>
          <Text style={styles.title}>Difficulty</Text>
          <Text style={styles.grand}>{display.spot.difficulty}/5</Text>
          <Text style={styles.title}>Break Type</Text>
          <Text style={styles.grand}>{display.spot.breaktype}</Text>
          <Text style={styles.title}>Peak Surf Season Begins</Text>
          <Text style={styles.petit}>{display.spot.peakseasonbegins}</Text>
          <Text style={styles.title}>Peak Surf Season Ends</Text>
          <Text style={styles.petit}>{display.spot.peakseasonends}</Text>
          <Text style={styles.title}>Geocode</Text>
          <View style={styles.geocode}><Text style={styles.petit}>{display.spot.geocode}</Text></View>
          <Text style={styles.title}>Link</Text>
          <Text style={styles.petit} onPress={() => Linking.openURL(display.spot.link)}>Discover the spot</Text>
        </ScrollView>
        <TouchableOpacity style={styles.button_back} onPress={() => navigation.goBack()} >
          <Text style={{ color: "black" }}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
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
    marginTop: 12,
    marginLeft: 6,
    textTransform: 'uppercase',
  },
  grand: {
    color: 'black',
    fontSize: 18,
    marginLeft: 6,
  },
  petit: {
    color: 'black',
    fontSize: 15,
    marginLeft: 6,
  },
  geocode: {
    backgroundColor: '#e1ecf7',
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 8,
  },
  button_back: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default SpotPageView;
