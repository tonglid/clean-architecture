import { FC, memo } from 'react';
import { Typography, Box, CssBaseline, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{}>(() => ({
  flexGrow: 1,
  height: '100%',
  minHeight: '100%',
  width: '100%',
  minWidth: '100%',
}));
const Img = styled('img')({
  width: '100px',
  height: '40px',
  backgroundColor: '#E5E5E5',
});
const Auth: FC = (): JSX.Element => {
  return (
    <Box
      id="auth-layout"
      sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
      }}
    >
      <CssBaseline />
      <Main>
        <Outlet />
      </Main>
      <Stack
        direction={{ xs: 'row', sm: 'row', md: 'column' }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        sx={{
          position: 'absolute',
          bottom: {
            md: '2rem',
            sm: '0.5rem',
          },
          display: {
            sm: 'flex',
            xs: 'none',
          },
          right: 0,
          left: 0,
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 1, md: 2 }}
          alignItems="center"
        >
          <Typography color="white" variant="h6">
            POWER BY
          </Typography>
          <Img src="LaoITDev.png" alt="LaoITDev" />
        </Stack>
        <Typography color="white" variant="h6">
          VERSION 1.0.0
        </Typography>
      </Stack>
    </Box>
  );
};

export default memo(Auth);
