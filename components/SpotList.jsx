import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SpotView from './homePage/spot/SpotView.jsx';
import { fetchSpotData } from './API.js'; // Import de la fonction

const SpotList = () => {
    const [APIData, setAPIData] = useState([]);
    console.log(APIData);

    useEffect(() => {
        fetchSpotData() // Appel de la fonction fetchSpotData depuis le fichier api.js
            .then(records => {
                setAPIData(records);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <ScrollView style={styles.scrollView} >
            {
                APIData.map((item, i) => (
                    <SpotView key={i}
                        image={item._rawJson.fields.Photos[0].url}
                        name={item._rawJson.fields.Address}
                    />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'white',
    },
});

export default SpotList;
