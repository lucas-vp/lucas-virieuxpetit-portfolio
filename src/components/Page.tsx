import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode, PaperProps } from '@mui/material';
import getTheme from '../theme';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const useDarkMode = (): [PaletteMode, () => void, boolean] => {
  const [themeMode, setTheme] = useState<PaletteMode>('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: PaletteMode) => {
    try {
      window.localStorage.setItem('themeMode', mode);
    } catch {
      /* do nothing */
    }

    setTheme(mode);
  };

  const themeToggler = useCallback(() => {
    if (themeMode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [themeMode]);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0 });
    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
    });
    AOS.refresh();
    try {
      const localTheme = window.localStorage.getItem('themeMode');
      if (localTheme) {
        setTheme(localTheme === 'dark' ? 'dark' : 'light');
      } else {
        setMode('light');
      }
    } catch {
      setMode('light');
    }

    setMountedComponent(true);
  }, []);

  return [themeMode, themeToggler, mountedComponent];
};

interface PageProps extends PaperProps {
  children: React.ReactNode;
}

/**
 * Page component
 */
const Page = ({ children }: PageProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      if (jssStyles.parentElement) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }
  }, []);

  const [themeMode, themeToggler] = useDarkMode();


  return (
    <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Page;