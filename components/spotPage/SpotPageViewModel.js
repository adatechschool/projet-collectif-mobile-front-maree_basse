import SpotPageModel from './SpotPageModel';

const SpotPageViewModel = (name,place,image,stars,breaktype,peakseason,link,influencer) => {

  const spotpage = new SpotPageModel(name,place,image,stars,breaktype,peakseason,link,influencer);
  return { spotpage };
};

export default SpotPageViewModel;
