import React, { useState } from 'react';
import { LeadsListItem } from './LeadsListItem';
import styles from './LeadsList.module.scss';
import { LeadDto } from 'data/leads/dto';
import { useAppSelector } from 'store/hooks';
import { selectLeads, selectState } from 'data/leads/slice';
import { formatLeadsArray } from 'utils/formatLeadsArray/formatLeadsArray';
import { Loader } from 'components/Loader/Loader';

export const LeadsList = () => {
   const leads = useAppSelector(selectLeads);
   const isLoading = useAppSelector(selectState);
   const formattedLeads: LeadDto[] = formatLeadsArray(leads);
   const [displayedLeads, setDisplayedLeads] = useState(5);

   const handleLoadMore = () => {
      setDisplayedLeads(leads.length);
   };

   const renderList = () => {
      return (
         <ul className={styles.list}>
            {formattedLeads.length > 0 ? (
               formattedLeads
                  .slice(0, displayedLeads)
                  .map((item) => <LeadsListItem key={item._id} {...item} />)
            ) : (
               <li className={styles.emptyList}>
                  <p className={styles.emptyListText}>No new leads...</p>
               </li>
            )}
         </ul>
      );
   };

   return (
      <div className={styles.leadsList}>
         <h2 className={styles.leadsListTitle}>
            Newest leads ({formattedLeads.length}) <span className={styles.period}>Last 24h</span>
         </h2>
         {isLoading ? <Loader /> : renderList()}
         {displayedLeads < formattedLeads.length && (
            <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
               Load more
            </button>
         )}
      </div>
   );
};
