import React , {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { fetchAddSpot } from '../Model.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

function AddSpot(){
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [submittedDataSpot, setSubmittedDataSpot] = useState(null);
  const navigation = useNavigation();

  const onSubmit = (dataSpot) => {
    // Simulate form submission
    console.log('Submitted Data:', dataSpot);
    // return;
    setSubmittedDataSpot(dataSpot);
    fetchAddSpot(dataSpot)
    .then (()=>navigation.goBack())

  }

  return (
    <SafeAreaView style={styles.container}>
    {/* Form Girdileri */}
    {/* Champs du nom */}
      <Controller
        control={control}
        render={({field: { onChange, value }}) => (
          <TextInput
            style={styles.input}
            placeholder="Name of Spot"
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="name"
        rules={{ required: true }}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
      
      {/* Champs du lieu */}
      <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextInput
          style={styles.input}
          placeholder="Place of spot"
          onChangeText={value => onChange(value)}
          value={value}
        />
      )}
      name="place"
      rules={{ required: 'You must enter a place'}}
    />
    {errors.place && <Text style={styles.errorText}>{errors.place.message}</Text>}

  {/* Champs de la diffilculté */}
    <Controller
      control={control}
      render={({ field: { onChange, value }  }) => (
        <TextInput
          style={styles.input}
          placeholder="Difficulty"
          keyboardType='numeric'
          onChangeText={value => onChange(value)}
          value={value}
        />
      )}
      name="difficulty"
      rules={{ required: 'You must enter a difficulty'}}
    />
    {errors.difficulty && <Text style={styles.errorText}>{errors.place.message}</Text>}

  {/* Champs peak surf season begins */}
    <Controller
      control={control}
      render={({ field: { onChange, value }  }) => (
        <TextInput
          style={styles.input}
          placeholder="Peak surf season begins"
          onChangeText={value => onChange(value)}
          value={value}
        />
      )}
      name="peak_season_begins"
      // rules={{ required: 'You must enter a date'}}
    />
    {/* {errors.peak_season_begins && <Text style={styles.errorText}>{errors.place.message}</Text>} */}

  {/* Champs peak surf season ends */}
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextInput
          style={styles.input}
          placeholder="Peak surf season ends"
          onChangeText={value => onChange(value)}
          value={value}
        />
      )}
      name="peak_season_ends"
      // rules={{ required: 'You must enter a date'}}
    />
    {/* {errors.peak_season_ends && <Text style={styles.errorText}>{errors.place.message}</Text>} */}

  {/* Champs geocode */}
    <Controller
      control={control}
      render={({ field : { onChange, value }}) => (
        <TextInput
          style={styles.input}
          placeholder="geocode"
          onChangeText={value => onChange(value)}
          value={value}
        />
      )}
      name="geocode"
      rules={{ required: 'You must enter a geocode'}}
    />
    {errors.geocode && <Text style={styles.errorText}>{errors.place.message}</Text>}

  {/* Champs breaktype */}
    <Controller
      control={control}
      render={({ field : { onChange, value }}) => (
        <TextInput
          style={styles.input}
          placeholder="breaktype"
          onChangeText={value => onChange(value)}
          value={value}
        />
      )}
      name="breaktype"
      rules={{ required: 'You must enter a breaktype'}}
    />
    {errors.breaktype && <Text style={styles.errorText}>{errors.place.message}</Text>}

  {/* Champs Link */}
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextInput
          style={styles.input}
          placeholder="Link"
          onChangeText={value => onChange(value)}
          value={value}
        />
      )}
      name="link"
      rules={{ required: 'You must enter a link'}}
    />
    {errors.link && <Text style={styles.errorText}>{errors.place.message}</Text>}

  {/* Champs image */}
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextInput
          style={styles.input}
          placeholder="Image"
          onChangeText={value => onChange(value)}
          value={value}
        />
      )}
      name="image"
      rules={{ required: 'You must enter an image'}}
    />
    {errors.image && <Text style={styles.errorText}>{errors.place.message}</Text>}

    {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

    {/* Gönderilen Veriler */}
    {submittedDataSpot && (
      <View >
        <Text>Submitted Data Spot:</Text>
        <Text>Name: {submittedDataSpot.name}</Text>
      </View>
    )}
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
padding: 16,
},
input: {
height: 40,
borderColor: 'gray',
borderWidth: 1,
marginBottom: 10,
padding: 8,
},
errorText: {
color: 'red',
marginBottom: 10,
},
});



export default AddSpot;