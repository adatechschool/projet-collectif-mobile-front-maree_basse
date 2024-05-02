import React from 'react';
import { View, Text, Image} from 'react-native';
import SpotViewModel from './SpotViewModel';

const SpotView = () => {
console.log('plage arrière')
 const display = SpotViewModel("Test","Testouille");
 console.log(display.spot.name)
 console.log("SpotView")
  return (
    <View>
      <Text>{display.spot.name}</Text>
      <Text>{display.spot.place}</Text>
    </View>
  )
}

export default SpotView;