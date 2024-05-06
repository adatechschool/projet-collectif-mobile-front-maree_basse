import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SpotView from './components/homePage/spot/SpotView.js';
import Records from './assets/spot.json';
import {API_TOKEN} from "./env.jsx"

console.log(API_TOKEN)


var Airtable = require('airtable');
var base = new Airtable({apiKey: API_TOKEN}).base('appEksYm9WhIjEtus');
    //console.log(records)
    //console.log(records[0]._rawJson.fields.Address)
    //console.log(records[0]._rawJson.fields.Photos[0].url)
//console.log(Records.records[1].fields.Photos[0].url)
//console.log(Records.records[0].fields.Address)

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
            console.log("test", APIData, records)

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }, [])

    console.log(APIData);

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
