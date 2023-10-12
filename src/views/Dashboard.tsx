import React from 'react';
import { Container } from '../components/Container/Container';
import { LeadsList } from 'components/LeadsList/LeadsList';
import { useAppSelector } from 'store/hooks';
import { selectLeads } from 'data/leads/slice';
import { formatLeadsArray } from 'utils/formatLeadsArray/formatLeadsArray';

import styles from './Dashboard.module.scss';

export const Dashboard = () => {
   const leads = useAppSelector(selectLeads);
   const formattedLeads = formatLeadsArray(leads);

   return (
      <Container>
         <div className={styles.wrapper}>
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.contentBox}>
               <LeadsList leads={formattedLeads} />
               <div>
                  <h2>Leads throughout time</h2>
                  <div></div>
               </div>
            </div>
         </div>
      </Container>
   );
};
