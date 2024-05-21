import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView , Pressable, Text} from 'react-native';
import SpotView from './SpotView.jsx';
import { fetchSpots } from '../Model.js';
import { useNavigation } from '@react-navigation/native';

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

    const navigation = useNavigation();

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
                <Pressable style={styles.buttonAddSpot} onPress={() => navigation.navigate("Ajouter un spot")}>
                    <Text style={styles.textButtonAddSpot}>+ add spot</Text>
                </Pressable>        
            </ScrollView>
    );
}


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    buttonAddSpot: {
        backgroundColor: 'blue',
        height: 40,
    },
    textButtonAddSpot: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop:10,
    }
});

export default SpotList;
