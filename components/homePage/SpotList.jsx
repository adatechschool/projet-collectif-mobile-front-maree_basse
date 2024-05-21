import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView , Pressable, Text, TouchableOpacity} from 'react-native';
import SpotView from './SpotView.jsx';
import { fetchSpots } from '../Model.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

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
        <SafeAreaView>
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
            <TouchableOpacity style={styles.button_add} onPress={() =>  navigation.navigate("Ajouter un spot")} >
                    <AntDesign name="plus" size={40} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
   button_add: {
       borderWidth: 1,
       borderColor: 'white',
       alignItems: 'center',
       justifyContent: 'center',
       width: 70,
       height: 70,
       backgroundColor: 'white',
       opacity:0.7,
       borderRadius: 100,
       position: 'absolute',
       bottom: 40,
       right: 20,

     },
});

export default SpotList;
