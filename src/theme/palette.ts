import { PaletteOptions } from '@mui/material';

export const light: PaletteOptions = {
  alternate: {
    landingGradient:'linear-gradient(180deg, #F4A261 0%, #E9C46A 99.99%)',
    splitColorPaperWhiteYellow:'linear-gradient(180deg, #fff 50%, #F4A261 50%)',
    splitColorPaperYellowWhite:'linear-gradient(180deg, #E9C46A 50%, #fff 50%)'


  },
  mode: 'light',
  primary: {
    main: '#F4A261',
    light: '#E9C46A',
    dark: '#E76F51',
  },
  text: {
    primary: '#404040',
    secondary: '#F6F6F6',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#f9f9f9',
    default: '#f9f9f9',
  },
};

export const dark: PaletteOptions = {
  alternate: {
    landingGradient:'linear-gradient(180deg, #A40606 0%, #D98324 99.99%)',
    splitColorPaperWhiteYellow:'linear-gradient(180deg, #fff 50%, #F4A261 50%)',
    splitColorPaperYellowWhite:'linear-gradient(180deg, #E9C46A 50%, #fff 50%)'
  },
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
    primary: '#404040',
    secondary: '#F6F6F6',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#222B45',
    default: '#222B45',
  },
};
