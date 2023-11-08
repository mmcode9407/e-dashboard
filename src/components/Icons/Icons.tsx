import React from 'react';

import arrowDropDown from '../../assets/icons/arrowDropDown.svg';
import arrowDropUp from '../../assets/icons/arrowDropUp.svg';
import arrows from '../../assets/icons/arrows.svg';

export const DropdownIcon = () => <img src={arrowDropDown} alt="Dropdown arrow icon" />;

export const DropupIcon = () => <img src={arrowDropUp} alt="Dropup arrow icon" />;

export const DropDefault = () => <img src={arrows} alt="Drop default arrows" />;

export const Spinner = ({ scale, color }: { scale?: number; color?: string }) => {
   return (
      <svg
         data-testid="spinner"
         width={scaleCalculation(18, scale)}
         height={scaleCalculation(18, scale)}
         viewBox="0 0 18 18"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <title>spinner</title>
         <path
            d="M17 9C17 10.8508 16.3582 12.6444 15.1841 14.0751C14.0099 15.5059 12.376 16.4852 10.5607 16.8463C8.74545 17.2074 6.86112 16.9278 5.22883 16.0554C3.59653 15.1829 2.31725 13.7714 1.60897 12.0615C0.900679 10.3515 0.807208 8.44887 1.34448 6.67773C1.88175 4.90658 3.01652 3.37653 4.55544 2.34825C6.09436 1.31998 7.94221 0.857121 9.78414 1.03853C11.6261 1.21995 13.3481 2.03441 14.6569 3.34315"
            stroke={color || 'currentColor'}
            strokeWidth="2"
         />
      </svg>
   );
};

const scaleCalculation = (x: number, scale = 100) => {
   return (x / 100) * scale;
};

//   export default scaleCalculation;
