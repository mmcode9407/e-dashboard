import React from 'react';
import { Container } from '../components/Container/Container';

import styles from './Dashboard.module.scss';
import { useAppSelector } from 'store/hooks';
import { selectLeads } from 'data/leads/slice';

export const Dashboard = () => {
   const leads = useAppSelector(selectLeads);

   return (
      <Container>
         <div className={styles.wrapper}>
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.contentBox}>
               <div className={styles.leadsList}>
                  <h2 className={styles.leadsListTitle}>
                     Newest leads ({leads.length}) <span className={styles.period}>Last 24h</span>
                  </h2>
                  <ul className={styles.list}>
                     {leads
                        .slice(0, 5)
                        .sort(
                           (a, b) =>
                              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
                        )
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
                  <button className={styles.loadMoreBtn}>Load more</button>
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
