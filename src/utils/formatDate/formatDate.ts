export const formatDate = (date: Date) => {
   return new Date(date).toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
   });
};
