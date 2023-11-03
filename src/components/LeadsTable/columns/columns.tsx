import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { HighlightText } from 'components/HighlightText/HighlightText';
import { LeadDto } from 'data/leads/dto';
import { formatDateForTable } from 'utils/formatDate/formatDate';

const columnHelper = createColumnHelper<Partial<LeadDto>>();

export const getColumns = (searchValue: string | null) => [
   columnHelper.accessor('name', {
      cell: ({ getValue }) => <HighlightText text={getValue()} searchText={searchValue} />,
      header: () => 'Name',
   }),
   columnHelper.accessor('email', {
      cell: ({ getValue }) => <HighlightText text={getValue()} searchText={searchValue} />,
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
