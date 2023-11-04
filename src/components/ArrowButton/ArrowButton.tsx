import React from 'react';

import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';

import styles from './ArrowButton.module.scss';

export enum Side {
   LEFT = 'left',
   RIGHT = 'right',
}

interface IArrowButtonProps {
   side: Side;

   onClick?: () => void;
}

export const ArrowButton = ({ side, onClick }: IArrowButtonProps) => {
   switch (side) {
      case Side.LEFT:
         return (
            <button className={styles.button} onClick={onClick}>
               <img src={arrowLeft} alt="Left arrow icon" />
            </button>
         );

      case Side.RIGHT:
         return (
            <button className={styles.button} onClick={onClick}>
               <img src={arrowRight} alt="Right arrow icon" />
            </button>
         );

      default:
         return null;
   }
};
