import { useState } from 'react';
import { SpotModel } from './model.js';

const SpotViewModel = () => {
  const spot = new SpotModel('Pipeline', 'Oahu, Hawaii', 'https://dl.airtable.com/ZuXJZ2NnTF40kCdBfTld_thomas-ashlock-64485-unsplash.jpg');



  return {
    spot
  };
};

export default SpotViewModel;