import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SpotView from './components/homePage/spot/SpotView.js';
import Records from './assets/spot.json';

const App = () => {
console.log(Records.records[1].fields.Photos[0].url)
console.log(Records.records[0].fields.Address)

  return (
    <ScrollView style={styles.scrollView} >
        {Records.records.map((item,i) => (
        <SpotView key={i}
        image = {item.fields.Photos[0].url}
        name={item.fields.Address}
        />))}
    </ScrollView>
    )}


const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  scrollView: {
    backgroundColor: 'white',
    marginTop: 50,
  },
});

export default App;
