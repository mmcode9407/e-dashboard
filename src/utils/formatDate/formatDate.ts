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

export const formatDateForTable = (date: Date) => {
   const newDate = new Date(date);

   const day = formatText(newDate.getDate());
   const month = formatText(newDate.getMonth() + 1);
   const year = newDate.getFullYear();

   return `${day}/${month}/${year}`;
};

const formatText = (unit: number) => (`0${unit}`.length > 2 ? unit : `0${unit}`);
