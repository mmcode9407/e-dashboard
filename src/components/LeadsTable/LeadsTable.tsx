import React, { useState } from 'react';
import {
   SortingState,
   flexRender,
   getCoreRowModel,
   getSortedRowModel,
   useReactTable,
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableRow } from 'nerdux-ui-system';

import { DropdownIcon, DropupIcon } from 'components/Icons/Icons';
import { selectLeads } from 'data/leads/slice';
import { useAppSelector } from 'store/hooks';
import { columns } from './columns/columns';

import styles from './LeadsTable.module.scss';

export const LeadsTable = () => {
   const leads = useAppSelector(selectLeads);
   const [sorting, setSorting] = useState<SortingState>([]);

   const table = useReactTable({
      data: leads,
      columns,
      state: { sorting },
      onSortingChange: setSorting,

      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
   });

   return (
      <Table>
         <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
               <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                     <TableCell key={header.id} align="center">
                        {header.isPlaceholder ? null : (
                           <div
                              {...{
                                 className: header.column.getCanSort() ? `${styles.sort}` : '',
                                 onClick: header.column.getToggleSortingHandler(),
                              }}
                           >
                              {flexRender(header.column.columnDef.header, header.getContext())}
                              {{
                                 asc: <DropupIcon />,
                                 desc: <DropdownIcon />,
                              }[header.column.getIsSorted() as string] ?? null}
                           </div>
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
   );
};
