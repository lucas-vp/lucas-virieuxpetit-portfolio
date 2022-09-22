import { createTheme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const theme = createTheme();

export const typography: TypographyOptions = {
  
    fontFamily: '"Quicksand", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: "medium",
    },
    h1: {
      fontFamily: "'Concert One', cursive",
      fontSize: "30px",
      lineHeight: 1.2,
      '@media (max-width:400px)': {
        fontSize: '20px',
      },
    },
    h2: {
      letterSpacing: 1.2,
      fontFamily: "'Concert One', cursive",
      fontSize: "30px",
      '@media (max-width:400px)': {
        fontSize: '17px',
      },
      lineHeight: 1.2
    },
    h3: {
      fontSize: "18px",
      lineHeight: 1.2
    },

    body1: {
      fontSize: "18px",
      lineHeight: 1.2
    },
    body2: {
      fontSize: "16px",
      lineHeight: 1.8
    },
    caption:{
      lineHeight: 1.1,
      '@media (max-width:400px)': {
        fontSize: '10px',
        lineHeight: 1,
        p: 0
      },
    }
};
