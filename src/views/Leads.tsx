import React, { useEffect, useRef } from 'react';
import { Container } from '../components/Container/Container';
import { LeadsTable } from 'components/LeadsTable/LeadsTable';

import { useAppDispatch } from 'store/hooks';
import { fetchUserLeads } from 'data/leads/slice';

import styles from './Leads.module.scss';

export const Leads = () => {
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
            <h1 className={styles.title}>Collected Leads</h1>
            <div className={styles.contentBox}>
               <LeadsTable />
            </div>
         </div>
      </Container>
   );
};
