import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, TextField } from 'nerdux-ui-system';
import { LeadsTable } from 'components/LeadsTable/LeadsTable';
import { SearchResultsInfo } from 'components/SearchResultsInfo/SearchResultsInfo';
import { Loader } from 'components/Loader/Loader';
import { selectState } from 'data/leads/slice';
import { useAppSelector } from 'store/hooks';

import styles from './Leads.module.scss';

export const Leads = () => {
   const [inputValue, setInputValue] = useState('');
   const [searchValue, setSearchValue] = useState<string | null>(null);
   const [foundLeads, setFoundLeads] = useState(0);
   const isLoading = useAppSelector(selectState);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   const handleSearch = (e: FormEvent) => {
      e.preventDefault();
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
         <header className={styles.leadsHeader}>
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

            <form onSubmit={handleSearch} className={styles.searchWrapper}>
               <TextField
                  withIcon
                  placeholder={'Search'}
                  name={'search'}
                  id={'search'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={inputValue}
               />
               <Button onClick={() => {}} type="submit" variant={'primary'}>
                  Search
               </Button>
            </form>
         </header>
         <div className={styles.contentBox}>
            {isLoading ? (
               <Loader />
            ) : (
               <LeadsTable searchValue={searchValue} setFoundLeads={setFoundLeads} />
            )}
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
