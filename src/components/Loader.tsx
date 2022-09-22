import { Box, CircularProgress, CircularProgressProps } from '@mui/material';
import React from 'react';

/**
 * Loader component
 */
const Loader = (props: CircularProgressProps) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 1,
  }}
  >
    <CircularProgress color="warning"/>
  </Box>
);

export default Loader;
