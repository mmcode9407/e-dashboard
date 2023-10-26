import React, { useEffect, useRef } from 'react';
import { Container } from '../components/Container/Container';

import styles from './Leads.module.scss';
import {
   createColumnHelper,
   flexRender,
   getCoreRowModel,
   useReactTable,
} from '@tanstack/react-table';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fetchUserLeads, selectLeads } from 'data/leads/slice';
import { Table, TableHead, TableBody, TableRow, TableCell } from 'nerdux-ui-system';
import { LeadDto } from 'data/leads/dto';
import { formatDateForTable } from 'utils/formatDate/formatDate';

const columnHelper = createColumnHelper<Partial<LeadDto>>();
const columns = [
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

export const Leads = () => {
   const leads = useAppSelector(selectLeads);
   const table = useReactTable({
      data: leads,
      columns,
      getCoreRowModel: getCoreRowModel(),
   });
   const dispatch = useAppDispatch();
   const initialized = useRef(false);

   useEffect(() => {
      if (!initialized.current) {
         initialized.current = true;

         const fetchLeads = async () => {
            await dispatch(fetchUserLeads());
         };

         fetchLeads();
      }
   }, []);

   return (
      <Container>
         <div className={styles.wrapper}>
            <h1 className={styles.title}>Collected Leads</h1>
            <div className={styles.contentBox}>
               <Table>
                  <TableHead>
                     {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                           {headerGroup.headers.map((header) => (
                              <TableCell key={header.id} align="center">
                                 {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                         header.column.columnDef.header,
                                         header.getContext(),
                                      )}
                              </TableCell>
                           ))}
                        </TableRow>
                     ))}
                  </TableHead>
                  <TableBody>
                     {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                           {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id} align="left">
                                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </TableCell>
                           ))}
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>
         </div>
      </Container>
   );
};
