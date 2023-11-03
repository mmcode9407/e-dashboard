import React, { ChangeEvent, useState } from 'react';
import { Button, TextField } from 'nerdux-ui-system';
import { LeadsTable } from 'components/LeadsTable/LeadsTable';
import { SearchResultsInfo } from 'components/SearchResultsInfo/SearchResultsInfo';

import styles from './Leads.module.scss';

export const Leads = () => {
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

   return (
      <>
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
      </>
   );
};
