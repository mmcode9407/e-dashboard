import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { LeadDto } from 'data/leads/dto';
import { formatDateForTable } from 'utils/formatDate/formatDate';

const columnHelper = createColumnHelper<Partial<LeadDto>>();
export const columns = [
   columnHelper.accessor('name', {
      cell: ({ getValue }) => <p>{getValue()}</p>,
      header: () => 'Name',
   }),
   columnHelper.accessor('email', {
      cell: ({ getValue }) => <p>{getValue()}</p>,
      header: () => 'Email',
   }),
   columnHelper.accessor('consentsAccepted', {
      cell: ({ getValue }) => <p>{String(getValue())}</p>,
      header: () => 'Agreed',
   }),
   columnHelper.accessor('createdAt', {
      cell: ({ getValue }) => {
         const value = getValue();
         return value ? <p>{formatDateForTable(value)}</p> : <p></p>;
      },
      header: () => 'Date',
   }),
];
