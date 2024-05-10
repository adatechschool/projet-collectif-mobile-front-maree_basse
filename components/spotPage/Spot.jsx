import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SpotPageView from './SpotPageView.jsx';
import { fetchSpotData } from '../Model.js';

const Spot = () => {
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

            {Array.isArray(APIData) && APIData.map((item, i) => (
                <SpotPageView
                    key={i}
                    image={item._rawJson.fields.Photos && item._rawJson.fields.Photos[0] && item._rawJson.fields.Photos[0].url}
                    name={item._rawJson.fields.Address}
                    place
                />
            ))}

    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
});

export default Spot;
