import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SpotView from './components/homePage/spot/SpotView.js';
import Records from './assets/spot.json';

const App = () => {

  return (
    <ScrollView style={styles.scrollView} >
        {Records.records.map((item,i) => (
        <SpotView key={i}
        image = {item.Photos}
        name={item.Address}
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
