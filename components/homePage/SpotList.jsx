import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SpotView from './SpotView.jsx';
import { fetchSpots } from '../Model.js';

const SpotList = () => {
    const [APIData, setAPIData] = useState([]);
    console.log(APIData)
    useEffect(() => {
        fetchSpots()
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
                    image={item.image}
                    name={item.name}
                    id={item.id}
                    place={item.place}
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
