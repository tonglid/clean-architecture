import { ThemeOptions } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { ReactNode } from 'react';

type Color = 'inherit' | 'primary' | 'secondary';

export const lightMode: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0895E0',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#0079a7',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#E5E5E5',
    },
    text: {
      primary: '#0953A0',
      secondary: '#000000',
      disabled: '#8c8c8c',
    },
    common: {
      black: '#fffff',
      white: '#000000',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `Roboto`,
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          fontFamily: `Roboto`,
          tableLayout: 'auto',
          minWidth: 'max-content',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td, &:last-child th': { border: 0 },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: `Roboto`,
          fontWeight: 'bold',
        },
        root: {
          fontFamily: `Roboto`,
          color: 'black',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: `Roboto`,
        },
        containedPrimary: {
          '&.MuiButton-contained': {
            backgroundColor: '#1565c0',
          },
        },
        containedError: {
          '&.MuiButton-contained': {
            backgroundColor: '#f44336',
          },
        },
        containedInfo: {
          '&.MuiButton-contained': {
            backgroundColor: '#E0E0E0',
            color: '#000',
          },
        },
        containedWarning: {
          '&.MuiButton-contained': {
            backgroundColor: '#ff9800',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: `Roboto`,
        },
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          fontFamily: `Roboto`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: `Roboto`,
        },
        colorPrimary: {
          '&.MuiChip-colorPrimary': {
            backgroundColor: '#1565c0',
          },
        },
        colorSecondary: {
          '&.MuiChip-colorWarning': {
            backgroundColor: '#ff9800',
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: '#aab4be',
            borderRadius: 20 / 2,
          },
        },
      },
    },
  },
};


export interface Layout {
  name: string;
  component: ReactNode;
}
export interface ThemeSetting {
  mode: {
    light: ThemeOptions;
  };
  layout: Array<Layout>;
  banner: {
    position: 'toolbar' | 'sidebar';
  };
  sidebar: {
    drawerWidth: number;
    color: Color;
    header: {
      elevation: number;
      color?: Color;
    };
  };
  toolbar: {
    color: Color;
    textColor: Color;
  };
}
const setting: ThemeSetting = {
  mode: {
    light: lightMode,
  },
  layout: [],
  banner: {
    position: 'toolbar',
  },
  sidebar: {
    drawerWidth: 260,
    color: 'primary',
    header: {
      elevation: 0,
      color: 'secondary',
    },
  },
  toolbar: {
    color: 'primary',
    textColor: 'secondary',
  },
};

export default setting;
