import { useTable } from 'react-table';
import { FC, useMemo } from 'react';
import { Paper, Box, styled } from '@mui/material';

type TypesPropsTable = {
  column: any[];
  data: any[];
};

const Table: FC<TypesPropsTable> = ({ column, data }) => {
  const tableData = useMemo(() => data, [data]);
  const columns = useMemo(() => column, [column]);

  const tableInstance = useTable({
    columns,
    data: tableData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <TableContainerStyled component={Paper}>
      <TableStyled {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </TableStyled>
    </TableContainerStyled>
  );
};

export default Table;

const TableContainerStyled = styled(Box)({
  width: '1200px',
  margin: '0 auto',
  minHeight: '746px',
});

const TableStyled = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
  '& thead th': {
    borderBottom: '1px solid #ddd',
    padding: '1rem',
    textAlign: 'left',
    fontSize: '13px',
  },
  '& tbody td': {
    borderBottom: '1px solid #ddd',
    padding: '10px 10px 10px 15px',
    fontSize: '12px',
  },
  '& tbody tr:hover': {
    backgroundColor: '#f1f1f1',
  },
});
