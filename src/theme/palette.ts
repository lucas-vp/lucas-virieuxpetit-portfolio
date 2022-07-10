import { PaletteOptions } from '@mui/material';

export const light: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#3bafda',
    light: '#5fc8ee',
    dark: '#2e93b8',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#FF9800',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#444444',
    secondary: '#666666',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#f9f9f9',
    default: '#f9f9f9',
  },
};

export const dark: PaletteOptions = {
  common: {
    black: '#000',
    white: '#fff',
  },
  mode: 'dark',
  primary: {
    main: '#3bafda',
    light: '#5fc8ee',
    dark: '#2e93b8',
    contrastText: '#fff',
  },
  secondary: {
    light: '#FFEA41',
    main: '#FFE102',
    dark: '#DBBE01',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#222B45',
    default: '#222B45',
  },
};
