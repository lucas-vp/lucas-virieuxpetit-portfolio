import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { light, dark } from './palette';

declare module '@mui/material/styles' {
  // allow configuration using `createTheme`
  interface ThemeOptions {
    themeToggler: () => void;
  }
  interface Theme {
    themeToggler: () => void;
  }

}

const getTheme = (mode: 'light' | 'dark', themeToggler: () => void) => responsiveFontSizes(
  createTheme({
    palette: mode === 'light' ? light : dark,
    typography: {
      fontFamily: '"Inter", sans-serif',
      button: {
        textTransform: 'none',
        fontWeight: 'medium',
      },
      h2: {
        fontFamily: '"Josefin sans", sans-serif',
      },
      h3: {
        fontFamily: '"Josefin sans", sans-serif',
      },
      h4: {
        fontFamily: '"Josefin sans", sans-serif',
      },
    },
    zIndex: {
      appBar: 1200,
      drawer: 1300,
    },
    themeToggler,
  }),
);

export default getTheme;

/* components: {
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 400,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
      },
      containedSecondary: mode === 'light' ? { color: 'white' } : {},
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: 5,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 5,
      },
      input: {
        borderRadius: 5,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
}, */