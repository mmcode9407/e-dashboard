import React, { useEffect, useRef } from 'react';
import { Container } from '../../components/Container/Container';
import { Leads } from 'components/Leads/Leads';

import { useAppDispatch } from 'store/hooks';
import { fetchUserLeads } from 'data/leads/slice';

import styles from './LeadsPage.module.scss';

export const LeadsPage = () => {
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
            <Leads />
         </div>
      </Container>
   );
};
