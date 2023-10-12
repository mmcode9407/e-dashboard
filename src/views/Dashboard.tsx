import React, { useState } from 'react';
import { Container } from '../components/Container/Container';
import { useAppSelector } from 'store/hooks';
import { selectLeads } from 'data/leads/slice';
import { LeadDto } from 'data/leads/dto';

import styles from './Dashboard.module.scss';

const initialItems: { name: string; createdAt: string }[] = [
   { name: 'Item 1', createdAt: '2023-10-11T14:42:05.010Z' },
   { name: 'Item 2', createdAt: '2023-10-11T14:51:19.093Z' },
   { name: 'Item 3', createdAt: '2023-10-11T14:53:32.359Z' },
   { name: 'Item 4', createdAt: '2023-10-11T14:11:23.864Z' },
   { name: 'Item 5', createdAt: '2023-10-11T15:00:41.901Z' },
   { name: 'Item 6', createdAt: '2023-10-10T10:31:38.652Z' },
   { name: 'Item 7', createdAt: '2023-10-10T15:06:06.815Z' },
   { name: 'Item 8', createdAt: '2023-10-09T15:05:43.478Z' },
   { name: 'Item 9', createdAt: '2023-10-09T16:33:19.003Z' },
   { name: 'Item 10', createdAt: '2023-10-11T16:33:06.338Z' },
   { name: 'Item 11', createdAt: '2023-10-10T15:06:06.815Z' },
   { name: 'Item 12', createdAt: '2023-10-09T15:05:43.478Z' },
   { name: 'Item 13', createdAt: '2023-10-09T16:33:19.003Z' },
   { name: 'Item 14', createdAt: '2023-10-11T16:33:06.338Z' },
   { name: 'Item 15', createdAt: '2023-10-11T16:33:06.338Z' },
];

const getLeadsFromLast24h = (leadsArr: { name: string; createdAt: string }[]) => {
   const currDate = new Date().getTime();
   const twentyFourHAgo = currDate - 24 * 60 * 60 * 1000;
   return leadsArr.filter((lead) => new Date(lead.createdAt).getTime() >= twentyFourHAgo);
};

export const Dashboard = () => {
   // const leads = useAppSelector(selectLeads);
   const filteredLeads = getLeadsFromLast24h(initialItems);
   const [displayedLeads, setDisplayedLeads] = useState(5);

   const handleLoadMore = () => {
      setDisplayedLeads(filteredLeads.length);
   };

   return (
      <Container>
         <div className={styles.wrapper}>
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.contentBox}>
               <div className={styles.leadsList}>
                  <h2 className={styles.leadsListTitle}>
                     Newest leads ({filteredLeads.length}){' '}
                     <span className={styles.period}>Last 24h</span>
                  </h2>
                  <ul className={styles.list}>
                     {filteredLeads
                        .sort(
                           (a, b) =>
                              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
                        )
                        .slice(0, displayedLeads)
                        .map((item) => (
                           <li key={item.name} className={styles.lead}>
                              <h3 className={styles.leadName}>{item.name}</h3>
                              <p className={styles.leadTime}>
                                 {new Date(item.createdAt).toLocaleString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour12: true,
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    timeZone: 'UTC',
                                 })}
                              </p>
                           </li>
                        ))}
                  </ul>
                  {displayedLeads < filteredLeads.length && (
                     <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
                        Load more
                     </button>
                  )}
               </div>
               <div>
                  <h2>Leads throughout time</h2>
                  <div></div>
               </div>
            </div>
         </div>
      </Container>
   );
};
