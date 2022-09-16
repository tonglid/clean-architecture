import { FC } from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import CssBaseline from '@mui/material/CssBaseline';

import { lightMode } from './themeConfig';
interface Props {
  children: React.ReactNode;
}
const ToggleColorMode: FC<Props> = (props) => {
  const theme = createTheme(lightMode);
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          {props.children}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};
export default ToggleColorMode;
