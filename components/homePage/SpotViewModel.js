import SpotModel from '../Model.js';

const SpotViewModel = (name,place,image) => {

  const spot = new SpotModel(name,place,image);
  return { spot };
};

export default SpotViewModel;
