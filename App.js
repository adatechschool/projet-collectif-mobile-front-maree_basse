import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SpotView from './components/homePage/spot/SpotView.js';
import Records from './assets/spot.json';
import {API_TOKEN} from "./env.jsx"

var Airtable = require('airtable');
var base = new Airtable({apiKey: API_TOKEN}).base('appEksYm9WhIjEtus');

const App = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        console.log("UseEffect")
        base("Surf Destinations").select({
            // Selecting the first 3 records in By Surf Break:
            maxRecords: 100,
            view: "By Surf Break"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            setAPIData(records);
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }, [])

    return (
        <ScrollView style={styles.scrollView} >
        {
            APIData.map((item,i)=> (
                <SpotView key={i}
                    image = {item._rawJson.fields.Photos[0].url}
                    name = {item._rawJson.fields.Address}
                />
            ))
        }
        </ScrollView>
    )
}

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
