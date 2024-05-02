import { useState } from 'react';
import SpotModel from './model';

const SpotViewModel = () => {
  const [spot, setSpot] = useState(new spotModel('Pipeline', 'Oahu, Hawaii', "https://dl.airtable.com/ZuXJZ2NnTF40kCdBfTld_thomas-ashlock-64485-unsplash.jpg"));

  const updateSpot = (name, place, image) => {
    setSpot(new SpotModel(name, place, image));
  };

  return {
    spot,
    updateSpot,
  };
};

export default SpotViewModel;