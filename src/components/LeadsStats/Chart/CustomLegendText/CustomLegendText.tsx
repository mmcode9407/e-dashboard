import React from 'react';
import { capitalizeFirstLetter } from 'utils/formatText/formatText';

import styles from './CustomLegendText.module.scss';

export const CustomLegendText = (value: string) => {
   return (
      <span style={{ color: 'black', marginLeft: '4px', marginTop: '10px' }}>
         {capitalizeFirstLetter(value)}
      </span>
   );
};
