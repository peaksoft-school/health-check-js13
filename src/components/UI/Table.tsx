import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Paper, Box, styled } from '@mui/material';

type TypesPropsTable<T> = {
  columns: ColumnDef<T>[];
  data: T[];
};

const Table = <T,>({ columns, data }: TypesPropsTable<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainerStyled component={Paper}>
      <TableStyled>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </TableContainerStyled>
  );
};

export default Table;

const TableContainerStyled = styled(Box)({
  width: '100%',
  minWidth: '1200px',
  maxWidth: '1440px',
  margin: '0 auto',
  minHeight: '100vh',
});

const TableStyled = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
  '& thead th': {
    borderBottom: '1px solid #ddd',
    padding: '17px',
    textAlign: 'left',
    fontSize: '15px',
  },
  '& thead th:first-child': {
    width: '100px',
  },
  '& tbody td': {
    borderBottom: '1px solid #ddd',
    padding: '17px',
    fontSize: '13px',
  },
  '& tbody tr:hover': {
    backgroundColor: '#f1f1f1',
  },
});
