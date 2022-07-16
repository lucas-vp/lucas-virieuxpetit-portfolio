import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { light, dark } from "./palette";

type AlternatePalette = {
  landingGradient: string;
  splitColorPaperYellowWhite: string;
  splitColorPaperWhiteYellow: string;

};

declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface ThemeOptions {
    themeToggler: () => void;
  }
  interface Theme {
    themeToggler: () => void;
  }

  interface PaletteOptions {
    alternate: AlternatePalette;
  }
  interface Palette {
    alternate: AlternatePalette;
  }
}

const getTheme = (mode: "light" | "dark", themeToggler: () => void) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === "light" ? light : dark,
      typography: {
        fontFamily: '"Poppins", sans-serif',
        button: {
          textTransform: "none",
          fontWeight: "medium",
        },
        h1: {
          fontSize: "25px",
          fontWeight: "500"
        },
        h2: {
          fontSize: "25px",
        },
        h3: {
          fontSize: "20px",
        },
        h4: {
          fontSize: "18px",
        },
        h5: {
          fontSize: "15px",
        },
        h6: {
          fontSize: "10px",
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      themeToggler,
    })
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
