import React from 'react';

import styles from './CustomizedAxisTick.module.scss';

export const CustomizedXAxisTick = ({ x, y, payload }: { x: number; y: number; payload: any }) => {
   return (
      <g transform={`translate(${x},${y})`}>
         <text x={-20} y={0} dy={16} className={styles.tick}>
            {payload.value}
         </text>
      </g>
   );
};

export const CustomizedYAxisTick = ({ x, y, payload }: { x: number; y: number; payload: any }) => {
   return (
      <g transform={`translate(${x},${y})`}>
         <text x={10} y={0} dy={4} className={styles.tick}>
            {payload.value}
         </text>
      </g>
   );
};
