import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Paper, Box, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/customHooks';
import { getUserInfo } from '../../store/slices/patients/patientsThunk';

type TypesPropsTable<T> = {
  columns: any[];
  data: T[];
  variant?: string;
};

const Table = <T,>({ columns, data, variant }: TypesPropsTable<T>) => {
  if (!data) return;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const patientInfoPage = (id: number) => {
    if (variant === 'patients') {
      dispatch(getUserInfo({ id, navigate }));
    }
  };

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
            <tr key={row.id} onClick={() => patientInfoPage(row.original.id)}>
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
  fontFamily: '"Manrope",sans-serif',
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
    cursor: 'pointer',
  },
  '& tbody tr:hover': {
    backgroundColor: '#f1f1f1',
  },
});
