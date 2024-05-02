import React from 'react';
import { View, Text, Image} from 'react-native';
import SpotViewModel from './SpotViewModel';

const SpotView = () => {
console.log('plage arrière')
 const spot = SpotViewModel("Test","Testouille");
 console.log("SpotView")
  return (
    <View>
      <Text>{spot.name}</Text>
      <Text>{spot.place}</Text>
    </View>
  )
}

export default SpotView;