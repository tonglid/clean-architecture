import { FC, ReactNode } from 'react';
import Table, { TableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

const SkeletonCell = styled(Skeleton)(() => ({
  backgroundColor: 'ButtonShadow',
}));
interface HeaderProps {
  label: string | ReactNode;
  className?: string;
  width?: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}
interface Props extends TableProps {
  loading?: boolean;
  children: ReactNode;
  dataLength: number;
  headers: HeaderProps[];
  name: string;
  minHeight?: string | number;
  maxHeight?: string | number;
  height?: string | number;
}
const TableLoading: FC<Props> = ({
  children,
  dataLength,
  headers,
  loading = false,
  name,
  minHeight = '300px',
  height = '100%',
  maxHeight,
  ...tableProps
}) => {
  return (
    <TableContainer
      sx={{
        width: '100%',
        height: height,
        minHeight: minHeight,
        maxHeight: maxHeight,
      }}
    >
      <Table {...tableProps} aria-label={`${name}-table`}>
        <TableHead>
          <TableRow>
            {headers.map(({ label, ...rest }) => (
              <TableCell key={'table' + name + label} {...rest}>
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow
              sx={{
                height: '100%',
                alignItems: 'flex-start',
                verticalAlign: 'displayName',
              }}
            >
              {Array.from(new Array(headers.length).keys()).map((_, index) => (
                <TableCell
                  sx={{
                    height: '100%',
                    alignItems: 'flex-start',
                    verticalAlign: 'displayName',
                  }}
                  align="center"
                  key={'cell-loading' + name + index}
                >
                  <SkeletonCell variant="text" height="50px" />
                  <SkeletonCell variant="text" height="50px" />
                  <SkeletonCell variant="text" height="50px" />
                  <SkeletonCell variant="text" height="50px" />
                  <SkeletonCell variant="text" height="50px" />
                </TableCell>
              ))}
            </TableRow>
          ) : (
            <>
              {dataLength === 0 && (
                <TableRow>
                  <TableCell align="center" colSpan={headers.length}>
                    ບໍ່ພົບລາຍການ
                  </TableCell>
                </TableRow>
              )}
              {children}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableLoading;
