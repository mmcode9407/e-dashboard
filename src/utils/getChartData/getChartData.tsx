﻿import { LeadDto } from 'data/leads/dto';
import moment, { Moment } from 'moment';

export interface IChartData {
   name: string;
   collected: number;
}

export const getChartData = (leads: LeadDto[], startDate: Moment): IChartData[] => {
   const data: IChartData[] = [];

   for (let i = 0; i <= 9; i++) {
      const currentDay = moment(startDate).subtract(i, 'days');

      const leadsForDay = [...leads].filter((lead) => {
         return moment(lead.createdAt).isSame(currentDay, 'day');
      });

      data.push({
         name: currentDay.format('Do MMM'),
         collected: leadsForDay.length,
      });
   }

   return data.reverse();
};
