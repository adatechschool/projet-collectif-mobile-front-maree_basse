import SpotModel from './Model.js';

const SpotViewModel = (id,name,place,image,difficulty,breaktype,peakseasonbegins,peakseasonends,link,geocode) => {
const spot = new SpotModel(id,name,place,image,difficulty,breaktype,peakseasonbegins,peakseasonends,link,geocode);
  return { spot };
};

export default SpotViewModel;
