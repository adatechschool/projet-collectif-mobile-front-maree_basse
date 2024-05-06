import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SpotView from './components/homePage/spot/SpotView.js';
import Records from './assets/spot.json';
import {API_TOKEN} from "./env.jsx"

console.log(API_TOKEN)


var Airtable = require('airtable');
var base = new Airtable({apiKey: API_TOKEN}).base('appEksYm9WhIjEtus');


base('Surf Destinations').select({
    // Selecting the first 3 records in By Surf Break:
    maxRecords: 3,
    view: "By Surf Break"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Destination'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});


const App = () => {
//console.log(Records.records[1].fields.Photos[0].url)
//console.log(Records.records[0].fields.Address)

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
