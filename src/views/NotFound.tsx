import { Stack, Box, useTheme, Button } from '@mui/material';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Text from '../components/Text';
import TopBar from './components/landing/TopBar';

const NotFound = () => {
  const { t } = useTranslation("common");
  const theme = useTheme();
 const navigate = useNavigate();

  //Redirecting to homepage
  const redirectHomepage = useCallback(() => {
      navigate('/')
  }, [ navigate]);

  return (
    <Box>
      <Box
        sx={{
          background: theme.palette.alternate.landingGradient,
        }}
      >
        <TopBar />
        <Box
          maxWidth="xl"
          mx="auto"
          px={{ xs: 3, lg: 10 }}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="center"
          alignItems="center"
          height={0.9}
          mt={4}
        >
          <Box
            height={{ xs: "210px", sm: "200px", md: "400px", lg: "400px" }}
            width={{ xs: "250px", sm: "250px", md: "450px", lg: "450px" }}
            alt={t("error404")} // Not done
            component="img"
            src="/static/img/error404.png"
            mb={{ xs: 5, md: 0 }}
          />
          <Stack spacing={{ xs: 0, md: 3 }}>
            <Text h1 fontFamily='"Quicksand", sans-serif' sx={{ mb: 2 }}>{t("pageNotFound")}</Text>
            <Button variant="contained" onClick={redirectHomepage} sx={{ bgcolor:'rgba(255, 255, 255, 0.8)',fontWeight: 800, color: 'text.primary', textAlign: 'left', fontFamily: '"Quicksand", sans-serif', "&:hover": { transform: "scale3d(1.1, 1.1, 1)", bgcolor:'rgba(255, 255, 255, 0.8)' } }}>{t("backToHomePage")}</Button>
          </Stack>

        </Box>
      </Box>
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        height="100px"
        width={1}
        mt="-1px"
        style={{ backgroundColor: "primary.light" }}
      >
        <path
          height="100%"
          fill={theme.palette.primary.light}
          d="M0,224L80,234.7C160,245,320,267,480,250.7C640,235,800,181,960,165.3C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </Box>
    </Box>
  );
};

export default NotFound;
