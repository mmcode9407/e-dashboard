import React from 'react';

import styles from './SearchResultsInfo.module.scss';

interface SearchResultsInfoProps {
   text: string;
   resultsQty?: number;
   hasResults?: boolean;
   clearHandler: () => void;
   searchValue: string;
}

export const SearchResultsInfo = ({
   text,
   resultsQty,
   hasResults,
   clearHandler,
   searchValue,
}: SearchResultsInfoProps) => {
   return (
      <>
         <div className={hasResults ? styles.resultsCont : styles.noResultsCont}>
            <p className={hasResults ? styles.resultsText : styles.noResultsText}>
               {text} “{searchValue}” {hasResults && `(${resultsQty})`}
            </p>
            <button className={styles.clearBtn} onClick={clearHandler}>
               Clear search
            </button>
         </div>
      </>
   );
};
