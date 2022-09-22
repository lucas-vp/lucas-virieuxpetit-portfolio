import React from 'react';
import { useRoutes } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import Page from './components/Page';
import routes from './routes';

const App = () => {
  const routing = useRoutes(routes);
  return (
    <StyledEngineProvider injectFirst>
      <Page>{routing}</Page>
    </StyledEngineProvider>
  );
};

export default App;
