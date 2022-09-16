import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { FC } from 'react';

const StyleBox = styled(
  Box,
  {}
)(() => ({
  overflow: 'auto',
  height: '100%',
  width: '100%',
  '& ::-webkit-scrollbar': {
    width: '0.1em',
    height: '0.1em',
    backgroundColor: '#1f7acf',
  },
  '& ::-webkit-scrollbar-thumb': {
    boxShadow: `inset 0 0 0 20px rgba(0, 0, 0, 0.24)`,
    backgroundColor: '#06427a',
    outline: '1px solid slategrey',
    borderRadius: 8,
  },
  '& ::-webkit-scrollbar-thumb:active': {
    boxShadow: `inset 0 0 0 20px rgba(0, 0, 0, 0.37)`,
  },
  '& ::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    backgroundColor: '#F5F5F5',
  },
}));

interface Props extends BoxProps {}
const BoxScrollbar: FC<Props> = ({ children, ...props }) => {
  return <StyleBox {...props}>{children}</StyleBox>;
};

export default BoxScrollbar;
