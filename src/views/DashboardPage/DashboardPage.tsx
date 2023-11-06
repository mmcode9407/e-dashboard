import React, { useEffect, useRef } from 'react';
import { LeadsList } from 'components/LeadsList/LeadsList';
import { LeadsChart } from 'components/LeadsStats/LeadsChart';
import { fetchUserLeads } from 'data/leads/slice';
import { useAppDispatch } from 'store/hooks';

import styles from './DashboardPage.module.scss';

export const DashboardPage = () => {
   const dispatch = useAppDispatch();
   const initialized = useRef(false);

   useEffect(() => {
      if (!initialized.current) {
         initialized.current = true;

         const fetchLeads = async () => {
            await dispatch(fetchUserLeads());
         };

         fetchLeads();
      }
   }, []);

   return (
      <>
         <header>
            <h1 className={styles.title}>Dashboard</h1>
         </header>
         <div className={styles.contentBox}>
            <LeadsList />
            <LeadsChart />
         </div>
      </>
   );
};
