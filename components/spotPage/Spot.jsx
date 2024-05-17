import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SpotPageView from './SpotPageView.jsx';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchSpots } from '../Model.js';

const Spot = () => {
    const [spotData, setSpotData] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();
    const { spotId } = route.params;

    useEffect(() => {
        fetchSpots(spotId)
            .then(records => {
                const spot = records.find(item => item.id === spotId);
                console.log("jesuislà avant spot")
                console.log(spot)
                setSpotData(spot);
            })
            .catch(err => {
                console.error(err);
            });
    }, [spotId]);

    return (
        <ScrollView style={styles.scrollView}>
            { (
               <SpotPageView
                   image={spotData.image}
                   name={spotData.name}
                   place={spotData.place}
                   difficulty={spotData.difficulty}
                   peakseasonbegins={spotData.peak_season_begins}
                   peakseasonends={spotData.peak_season_ends}
                   breaktype={spotData.breaktype}
                   geocode={spotData.geocode}
                   link={spotData.link}
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
