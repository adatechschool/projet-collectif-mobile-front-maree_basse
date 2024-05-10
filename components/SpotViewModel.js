import SpotModel from './Model.js';

const SpotViewModel = (id,name,place,image,stars,breaktype,peakseason,link,influencer) => {

  const spot = new SpotModel(id,name,place,image,stars,breaktype,peakseason,link,influencer);
  return { spot };
};

export default SpotViewModel;
