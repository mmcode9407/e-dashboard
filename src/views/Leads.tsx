import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button, TextField } from 'nerdux-ui-system';
import { Container } from '../components/Container/Container';
import { LeadsTable } from 'components/LeadsTable/LeadsTable';

import { useAppDispatch } from 'store/hooks';
import { fetchUserLeads } from 'data/leads/slice';

import styles from './Leads.module.scss';
import { SearchResultsInfo } from 'components/SearchResultsInfo/SearchResultsInfo';

export const Leads = () => {
   const dispatch = useAppDispatch();
   const initialized = useRef(false);

   const [inputValue, setInputValue] = useState('');
   const [searchValue, setSearchValue] = useState<string | null>(null);
   const [foundLeads, setFoundLeads] = useState(0);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   const handleSearch = () => {
      setSearchValue(inputValue);
      setInputValue('');
   };

   const handleClear = () => {
      setSearchValue(null);
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
               <div>
                  <h1 className={styles.title}>Collected Leads</h1>
                  {searchValue && (
                     <SearchResultsInfo
                        text="Displaying search results for"
                        resultsQty={foundLeads}
                        hasResults
                        clearHandler={handleClear}
                        searchValue={searchValue}
                     />
                  )}
               </div>
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
               <LeadsTable searchValue={searchValue} setFoundLeads={setFoundLeads} />
            </div>
            {foundLeads === 0 && searchValue && (
               <SearchResultsInfo
                  text="No results for"
                  clearHandler={handleClear}
                  searchValue={searchValue}
               />
            )}
         </div>
      </Container>
   );
};
