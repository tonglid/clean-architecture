import {
  Box,
  styled,
  Drawer,
  Stack,
  IconButton,
  Typography,
  Divider,
} from '@mui/material';
import { FC, ReactNode } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledPage = styled(Box)(({ theme }) => ({
  height: `calc(100vh - 84px)`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5rem',
  backgroundColor: '#E5E5E5',
  [theme.breakpoints.down('sm')]: {
    minHeight: `calc(100vh - 84px)`,
    height: '100%',
    marginTop: '84px',
  },
}));
const StylePageContent = styled(Box, {
  shouldForwardProp: (props) => props !== 'minFullScreen',
})<{ minFullScreen?: boolean }>(({ minFullScreen, theme }) => ({
  overflow: 'auto',
  flex: 'none',
  ...(minFullScreen && {
    flex: '1 1 0%',
    [theme.breakpoints.down('sm')]: {
      flex: 'none',
    },
  }),
}));
interface Props {
  header?: ReactNode;
  children: ReactNode;
  rightSidebar?: ReactNode;
  openRightSidebar?: boolean;
  onCloseRightSidebar?: () => void;
  minFullScreen?: boolean;
  loading?: boolean;
}
const PageLayout: FC<Props> = ({
  children,
  header,
  minFullScreen = false,
  rightSidebar,
  openRightSidebar = false,
  onCloseRightSidebar,
}) => {
  return (
    <StyledPage>
      {openRightSidebar && rightSidebar && (
        <Drawer
          sx={{
            width: 350,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 350,
              boxSizing: 'border-box',
              top: 64,
            },
          }}
          variant="temporary"
          anchor="right"
          open={openRightSidebar}
          onClose={onCloseRightSidebar}
        >
          <Stack
            direction="column"
            sx={{ width: '100%', height: '100%', px: 5, py: 3 }}
            spacing={3}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                p: 0,
              }}
            >
              <IconButton onClick={onCloseRightSidebar}>
                <ArrowBackIcon />
              </IconButton>
              <Typography sx={{ position: 'absolute', left: '160px' }}>
                ຄົ້ນຫາ
              </Typography>
            </Box>
            <Divider />
            {rightSidebar}
          </Stack>
        </Drawer>
      )}
      {header && header}
      <StylePageContent minFullScreen={minFullScreen}>
        {children}
      </StylePageContent>
    </StyledPage>
  );
};

export default PageLayout;
