import React from 'react';
import { formatDate } from 'utils/formatDate/formatDate';
import styles from './LeadsListItem.module.scss';
import { LeadDto } from 'data/leads/dto';

export const LeadsListItem = ({ name, createdAt }: LeadDto) => {
   return (
      <li className={styles.lead}>
         <h3 className={styles.leadName}>{name}</h3>
         <p className={styles.leadTime}>{formatDate(createdAt)}</p>
      </li>
   );
};
