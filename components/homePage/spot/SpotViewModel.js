import SpotModel from './SpotModel';

const SpotViewModel = (name,place) => {
console.log('This isnt fun')
  const spot = new SpotModel(name,place);
  console.log(name,place)
   console.log(spot.name)
  console.log("SpotVM")

  return { spot };
};

export default SpotViewModel;
