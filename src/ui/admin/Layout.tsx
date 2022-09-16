import { FC, memo, useState, useEffect } from 'react';
import { CssBaseline, Box, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import themeSetting from './../config/theme/themeConfig';
// import Authorization from 'helper/authorization';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${themeSetting.sidebar.drawerWidth}px`,
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  height: '100%',
  backgroundColor: '#E5E5E5',
  width: '100%',
  ...(open && {
    marginLeft: 0,
    width: `calc(100% - ${themeSetting.sidebar.drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  [theme.breakpoints.down('lg')]: {
    margin: 'auto',
  },
}));

interface Props {}

const Layout: FC<Props> = () => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = useState<boolean>(true);
  useEffect(() => {
    if (breakpoint) {
      setOpen(false);
    }
  }, [breakpoint]);

  const onChangeSidebar = () => setOpen((p) => !p);
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
      }}
    >
      <CssBaseline />
      <Sidebar
        openSidebar={open}
        onChangeSidebar={onChangeSidebar}
        breakpoint={breakpoint}
      />
      <Main open={open}>
        <Toolbar openSidebar={open} closeSidebar={onChangeSidebar} />
        <Outlet />
      </Main>
    </Box>
  );
};
export default memo(Layout);
