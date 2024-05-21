import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import SpotPageView from './SpotPageView.jsx';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchSpots } from '../Model.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const Spot = () => {
    const [spotData, setSpotData] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();
    const { spotId } = route.params;

    useEffect(() => {
        fetchSpots(spotId)
            .then(records => {
                const spot = records.find(item => item.id === spotId);
                setSpotData(spot);
            })
            .catch(err => {
                console.error(err);
            });
    }, [spotId]);

    return (
    <SafeAreaView>
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
         <TouchableOpacity style={styles.button_back} onPress={() => navigation.goBack()} >
                  <AntDesign name="arrowleft" size={40} color="black" />
                </TouchableOpacity>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
     button_back: {
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        backgroundColor: 'white',
        opacity: 0.7,
        borderRadius: 100,
        position: 'absolute',
        top: 70,
        left: 20,
      },
});

export default Spot;
