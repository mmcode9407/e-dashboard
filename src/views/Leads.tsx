import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button, TextField } from 'nerdux-ui-system';
import { Container } from '../components/Container/Container';
import { LeadsTable } from 'components/LeadsTable/LeadsTable';

import { useAppDispatch } from 'store/hooks';
import { fetchUserLeads } from 'data/leads/slice';

import styles from './Leads.module.scss';

export const Leads = () => {
   const dispatch = useAppDispatch();
   const initialized = useRef(false);

   const [inputValue, setInputValue] = useState('');
   const [searchValue, setSearchValue] = useState<string | null>(null);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   const handleSearch = () => {
      setSearchValue(inputValue);
      setInputValue('');
   };

   const handleBlur = () => {
      inputValue === '' && setSearchValue(null);
   };

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
            <div className={styles.leadsHeader}>
               <h1 className={styles.title}>Collected Leads</h1>
               <div className={styles.searchWrapper}>
                  <TextField
                     withIcon
                     placeholder={'Search'}
                     name={'search'}
                     id={'search'}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={inputValue}
                  />
                  <Button onClick={handleSearch} variant={'primary'}>
                     Search
                  </Button>
               </div>
            </div>
            <div className={styles.contentBox}>
               <LeadsTable searchValue={searchValue} />
            </div>
         </div>
      </Container>
   );
};
