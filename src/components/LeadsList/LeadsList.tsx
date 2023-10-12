import React, { useState } from 'react';
import { LeadsListItem } from './LeadsListItem';
import styles from './LeadsList.module.scss';
import { LeadDto } from 'data/leads/dto';

interface ILeadsListProps {
   leads: LeadDto[];
}

export const LeadsList = ({ leads }: ILeadsListProps) => {
   const [displayedLeads, setDisplayedLeads] = useState(5);

   const handleLoadMore = () => {
      setDisplayedLeads(leads.length);
   };
   return (
      <div className={styles.leadsList}>
         <h2 className={styles.leadsListTitle}>
            Newest leads ({leads.length}) <span className={styles.period}>Last 24h</span>
         </h2>
         <ul className={styles.list}>
            {leads.length > 0 ? (
               leads
                  .slice(0, displayedLeads)
                  .map((item) => <LeadsListItem key={item.name} {...item} />)
            ) : (
               <li>
                  <p>No new leads...</p>
               </li>
            )}
         </ul>
         {displayedLeads < leads.length && (
            <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
               Load more
            </button>
         )}
      </div>
   );
};
