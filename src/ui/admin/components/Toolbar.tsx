import { FC, memo, ElementType } from 'react';
import { AppBar as MuiAppBar, Toolbar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReorderIcon from '@mui/icons-material/Reorder';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

import themeSetting from '../../config/theme/themeConfig';
import ProfileButton from './../container/Profile';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  component?: ElementType;
  open?: boolean;
}>(({ theme }) => ({
  position: 'inherit',
  height: 64,
  [theme.breakpoints.down('sm')]: {
    position: 'fixed',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    marginBottom: 64,
    // display: 'flex',
  },
}));
interface Props {
  openSidebar: boolean;
  closeSidebar: () => void;
}
const ToolbarHeader: FC<Props> = ({ openSidebar, closeSidebar }) => {
  const handleChangeScreen = () => {
    if (!document.fullscreenElement) {
      document.body.requestFullscreen();
      return;
    }
    document.exitFullscreen();
  };
  return (
    <AppBar
      color={themeSetting.toolbar.color}
      position="fixed"
      open={openSidebar}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <IconButton aria-label="reorder" onClick={closeSidebar}>
          <ReorderIcon color={themeSetting.toolbar.textColor} />
        </IconButton>
        <div>
          <IconButton aria-label="translate" onClick={handleChangeScreen}>
            <FullscreenIcon color={themeSetting.toolbar.textColor} />
          </IconButton>
          <ProfileButton />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default memo(ToolbarHeader);
