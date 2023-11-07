import React, { useEffect, useRef } from 'react';
import { Leads } from 'components/Leads/Leads';

import { useAppDispatch } from 'store/hooks';
import { fetchUserLeads } from 'data/leads/slice';

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

   return <Leads />;
};
