import React from 'react';
import moment from 'moment';

import styles from './CustomTooltip.module.scss';

export const CustomTooltip = ({
   active,
   payload,
   label,
}: {
   active?: boolean;
   payload?: any;
   label?: string;
}) => {
   if (active && payload && payload.length) {
      return (
         <div className={styles.tooltip}>
            <p className={styles.collected}>{payload[0].value}</p>
            <p className={styles.date}>{`${moment(label, 'Do MMM').format('dddd')},`}</p>
            <p className={styles.date}>{`${label} ${moment().year()}`}</p>
         </div>
      );
   }
   return null;
};
