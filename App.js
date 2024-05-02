import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import SpotView from './components/homePage/spot/view';
import SpotViewModel from './components/homePage/spot/viewModel';

const App = () => {
  const spotViewModel = SpotViewModel();

  return (
    <SafeAreaView>
      <SpotView spot={spotViewModel.spot} />
    </SafeAreaView>
  );
};

export default App;