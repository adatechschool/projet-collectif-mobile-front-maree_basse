import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SpotView from './homePage/SpotView.jsx';
import { fetchSpotData } from './Model.js';

const SpotList = () => {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        fetchSpotData()
            .then(records => {
                setAPIData(records);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <ScrollView style={styles.scrollView}>
            {Array.isArray(APIData) && APIData.map((item, i) => (
                <SpotView
                    key={i}
                    image={item._rawJson.fields.Photos && item._rawJson.fields.Photos[0] && item._rawJson.fields.Photos[0].url}
                    name={item._rawJson.fields.Address}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
});

export default SpotList;
