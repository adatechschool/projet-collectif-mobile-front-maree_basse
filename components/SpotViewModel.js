import SpotModel from './Model.js';

const SpotViewModel = (name,place,image,stars,breaktype,peakseason,link,influencer) => {

  const spot = new SpotModel(name,place,image,stars,breaktype,peakseason,link,influencer);
  return { spot };
};

export default SpotViewModel;
