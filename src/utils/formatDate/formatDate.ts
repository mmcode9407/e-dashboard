import moment from 'moment';

export const formatDate = (date: Date) => {
   return moment.utc(date).format('DD/MM/YYYY, hh:mma');
};

export const formatDateForTable = (date: Date) => {
   return moment.utc(date).format('DD/MM/YYYY');
};
