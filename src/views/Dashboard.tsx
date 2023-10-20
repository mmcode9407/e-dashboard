import React, { useEffect, useRef } from 'react';
import { Container } from '../components/Container/Container';
import { LeadsList } from 'components/LeadsList/LeadsList';
import { fetchUserLeads } from 'data/leads/slice';
import { useAppDispatch } from 'store/hooks';

import styles from './Dashboard.module.scss';

export const Dashboard = () => {
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
      <Container>
         <div className={styles.wrapper}>
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.contentBox}>
               <LeadsList />
               <div>
                  <h2>Leads throughout time</h2>
                  <div></div>
               </div>
            </div>
         </div>
      </Container>
   );
};
