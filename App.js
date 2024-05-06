import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SpotView from './components/homePage/spot/SpotView.js';
import records from './assets/spot.json';

const App = () => {
console.log(records)
const test = JSON.parse(records);
console.log(test)

  return (
    <ScrollView style={styles.scrollView} >
        <SpotView
        image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Colombus_Isle.JPG/1200px-Colombus_Isle.JPG?20140713144334'
        name="Venice Beach"
        place="Los Angeles"/>
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
