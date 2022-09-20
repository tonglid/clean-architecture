import { ElementType, FC, memo, ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Drawer as MuiDrawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItem,
  Button,
  Divider,
  AppBar,
  AppBarProps,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import themeSetting from '../config/theme/themeConfig';
import navigations, { Navigation } from './navigations';
import BoxScrollbar from './BoxScrollbar';

const DrawerHeader = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  // height: '180px',
  paddingTop: '10px',
  paddingBottom: '10px',
}));
const NavList = styled(List, {
  shouldForwardProp: (prop) => prop !== 'item',
})<{
  component?: ElementType;
  item?: boolean;
}>(({ item }) => ({
  '& .MuiListItemButton-root': {
    paddingLeft: 10,
    paddingRight: 10,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 20,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
  background: 'background.paper',
  ...(item && {
    '& .MuiListItemButton-root': {
      paddingLeft: 0,
      paddingRight: 0,
    },
    '& .MuiListItemText-root ': {
      paddingLeft: 28,
    },
  }),
}));
const ItemMenu = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{
  component?: ElementType;
  active?: boolean;
}>(({ active }) => ({
  color: 'rgba(0, 0, 0, 0.87)',
  ...(active && {
    backgroundColor: 'rgba(25, 118, 210, 0.08)',
    '& .MuiListItemText-root ': {
      color: '#1976D2',
    },
    '& .MuiSvgIcon-root': {
      color: '#1976D2',
    },
  }),
}));
const Img = styled('img')({
  width: '155px',
});
interface Props {
  openSidebar: boolean;
  onChangeSidebar: () => void;
  breakpoint: boolean;
}
const Sidebar: FC<Props> = ({ openSidebar, onChangeSidebar, breakpoint }) => {
  return (
    <MuiDrawer
      color={themeSetting.sidebar.color}
      sx={{
        width: themeSetting.sidebar.drawerWidth,
        minWidth: themeSetting.sidebar.drawerWidth,
        maxWidth: themeSetting.sidebar.drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: themeSetting.sidebar.drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      PaperProps={{ elevation: 3 }}
      variant={breakpoint ? 'temporary' : 'persistent'}
      anchor="left"
      open={openSidebar}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      onClose={onChangeSidebar}
    >
      <DrawerHeader
        position="sticky"
        color={themeSetting.sidebar.header.color}
        elevation={themeSetting.sidebar.header.elevation}
      >
        <Img src="/hodpos-logo.png" alt="logo192" />
      </DrawerHeader>
      <Divider sx={{ mx: 3 }} />
      <BoxScrollbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <NavList component="nav" disablePadding aria-labelledby="list-menu">
          {navigations.map((nav) => (
            <Content nav={nav} key={nav.id} />
          ))}
        </NavList>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant="body2" color="textSecondary" align="center">
            Powered by:
          </Typography>
          <Img sx={{ margin: 'auto' }} src="/LaoITDev.png" alt="logo192" />
        </Box>
      </BoxScrollbar>
    </MuiDrawer>
  );
};

interface Nav {
  nav: Navigation;
}
const Content: FC<Nav> = ({ nav }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ItemMenu
        disablePadding
        active={nav.to === pathname.slice(0, nav.to?.length)}
      >
        <ListItemLink onClick={handleClick} link={nav.to}>
          <ListItemIcon>{nav.icon}</ListItemIcon>
          <ListItemText primary={nav.name} />
          {nav.children && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemLink>
      </ItemMenu>
      {nav.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <NavList
            component="nav"
            disablePadding
            aria-labelledby="list-sub-menu"
            item
          >
            {nav.children.map((children) => (
              <Content nav={children} key={children.id} />
            ))}
          </NavList>
        </Collapse>
      )}
    </>
  );
};
interface PropsListItemLink {
  children: ReactNode;
  link?: string;
  onClick?: () => void;
}
const ListItemLink: FC<PropsListItemLink> = ({ children, onClick, link }) => {
  if (link) {
    return (
      <ListItemButton component={Link} to={link} sx={{ py: 1, minHeight: 32 }}>
        {children}
      </ListItemButton>
    );
  }
  return (
    <ListItemButton
      component={Button}
      onClick={onClick}
      sx={{ py: 1, minHeight: 32 }}
    >
      {children}
    </ListItemButton>
  );
};
export default memo(Sidebar);
