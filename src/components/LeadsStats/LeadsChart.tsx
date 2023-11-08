import React, { useState } from 'react';
import { ArrowButton, Side } from 'components/ArrowButton/ArrowButton';
import { Chart } from './Chart/Chart';
import { useAppSelector } from 'store/hooks';
import { selectLeads, selectState } from 'data/leads/slice';
import { getChartData } from 'utils/getChartData/getChartData';
import moment from 'moment';

import styles from './LeadsChart.module.scss';
import { Loader } from 'components/Loader/Loader';

export const LeadsChart = () => {
   const leads = useAppSelector(selectLeads);
   const isLoading = useAppSelector(selectState);
   const [startDate, setStartDate] = useState(moment().subtract(0, 'days'));
   const chartData = getChartData(leads, startDate);

   const handleNext = () => {
      setStartDate(moment(startDate).add(9, 'days'));
   };

   const handleBack = () => {
      setStartDate(moment(startDate).subtract(9, 'days'));
   };

   return (
      <div className={styles.chart}>
         <div className={styles.headerBox}>
            <h2 className={styles.chartTitle}>Leads throughout time</h2>
            <div className={styles.buttonsBox}>
               <ArrowButton side={Side.LEFT} onClick={handleBack} />
               <ArrowButton side={Side.RIGHT} onClick={handleNext} />
            </div>
         </div>
         {isLoading ? <Loader /> : <Chart chartData={chartData} />}
      </div>
   );
};
