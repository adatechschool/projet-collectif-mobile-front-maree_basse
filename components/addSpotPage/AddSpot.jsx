import React , {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { fetchAddSpot } from '../Model.js';
import { SafeAreaView } from 'react-native-safe-area-context';

function AddSpot(){
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [submittedDataSpot, setSubmittedDataSpot] = useState(null);

  const onSubmit = (dataSpot) => {
    // Simulate form submission
    console.log('Submitted Data:', dataSpot);
    setSubmittedDataSpot(dataSpot);
    fetchAddSpot(dataSpot)
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Je suis sur la page add Spot</Text>
    {/* Form Girdileri */}
    {/* Champs du nom */}
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Name of Spot"
          />
        )}
        name="name"
        rules={{ required: 'You must enter a name' }}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

    {/* Champs du lieu */}
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Place of spot"
          />
        )}
        name="place"
        rules={{ required: 'You must enter a place'}}
      />
      {errors.place && <Text style={styles.errorText}>{errors.place.message}</Text>}

    {/* Champs de la diffilculté */}
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Difficulty"
            keyboardType='numeric'
          />
        )}
        name="difficulty"
        rules={{ required: 'You must enter a place'}}
      />
      {errors.difficulty && <Text style={styles.errorText}>{errors.place.message}</Text>}

    {/* Champs peak surf season begins */}
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Peak surf season begins"
          />
        )}
        name="peak_season_begins"
        // rules={{ required: 'You must enter a date'}}
      />
      {/* {errors.peak_season_begins && <Text style={styles.errorText}>{errors.place.message}</Text>} */}

    {/* Champs peak surf season ends */}
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Peak surf season ends"
          />
        )}
        name="peak_season_ends"
        // rules={{ required: 'You must enter a date'}}
      />
      {/* {errors.peak_season_ends && <Text style={styles.errorText}>{errors.place.message}</Text>} */}

    {/* Champs geocode */}
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="geocode"
          />
        )}
        name="geocode"
        rules={{ required: 'You must enter a place'}}
      />
      {errors.geocode && <Text style={styles.errorText}>{errors.place.message}</Text>}

    {/* Champs breaktype */}
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="breaktype"
          />
        )}
        name="breaktype"
        rules={{ required: 'You must enter a place'}}
      />
      {errors.breaktype && <Text style={styles.errorText}>{errors.place.message}</Text>}

    {/* Champs Link */}
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Link"
          />
        )}
        name="link"
        rules={{ required: 'You must enter a link'}}
      />
      {errors.link && <Text style={styles.errorText}>{errors.place.message}</Text>}

    {/* Champs image */}
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Image"
          />
        )}
        name="image"
        rules={{ required: 'You must enter a link'}}
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