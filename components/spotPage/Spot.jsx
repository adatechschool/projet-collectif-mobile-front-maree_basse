import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SpotPageView from './SpotPageView.jsx';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchSpotData } from '../Model.js';

const Spot = () => {
    const [spotData, setSpotData] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();
    const { spotId } = route.params;

    useEffect(() => {
        fetchSpotData(spotId)
            .then(records => {
                const spot = records.find(item => item.id === spotId);
                console.log(records)
                setSpotData(spot);
            })
            .catch(err => {
                console.error(err);
            });
    }, [spotId]);

    return (
        <ScrollView style={styles.scrollView}>
            {spotData && (
                <SpotPageView
                    image={spotData._rawJson.fields.Photos && spotData._rawJson.fields.Photos[0] && spotData._rawJson.fields.Photos[0].url}
                    name={spotData._rawJson.fields.Address}
                />
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
});

export default Spot;
