import React from "react";
import { Box, useTheme, Stack, useMediaQuery, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";
import TopBar from "./TopBar";
import AgeCitySituation from "./AgeCitySituation";
import { Anchors } from "../../../types";
import useScrollDirection from "../../../hook/useScrollDirection";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { keyframes } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Props {
  anchors?: Anchors;
}

const Landing = ({anchors}: Props) => {
  const { t } = useTranslation("landingView");
  const theme = useTheme();
  const scrollDirection = useScrollDirection();
  const isMdHeight = useMediaQuery('(min-height: 700px)');

  const scrollUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(40px)
  }
`;

const scrollApear = keyframes`
0%{
  opacity: 0;
}
50%{
  opacity: 0.5;
}
100%{
  opacity: 1;
}
`;

const scrollDisapear = keyframes`
0%{
  opacity: 1;
}
50%{
  opacity: 0.5;
}
100%{
  opacity: 0;
}
`;

  return (
    <Box height={1} position="relative">
      <Box
        height="70%"
        sx={{
          background: theme.palette.alternate.landingGradient,
        }}
      >
        <TopBar anchors={anchors} />
        <Box
          maxWidth="xl"
          mx="auto"
          px={{ xs: 3, lg: 10 }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height={0.9}
          mt={4}
        >
          <Stack spacing={{ xs: 2, md: 3 }}>
            <Text h1 fontFamily='"Quicksand", sans-serif'>{t("welcomeOnMyPortfolio")}</Text>
            <Text h1 fontFamily='"Quicksand", sans-serif'>{t("its")}<Box component="span" mx={1} sx={{ letterSpacing: 2 }} fontFamily="'Concert One', cursive">{t("name")}</Box></Text>
            <Text h1 fontFamily='"Quicksand", sans-serif'>{t("iam")}<Box component="span"  sx={{ letterSpacing: 2 }} fontFamily="'Concert One', cursive"> {t("jobTitle")}</Box></Text>
            <AgeCitySituation />
            <Box display="flex">
              <IconButton component='a' href="https://www.linkedin.com/in/lucas-virieux-petit-2034001a2/"><LinkedInIcon sx={{ color: 'common.black'}} /></IconButton>
              <IconButton component='a' href="https://github.com/lucas-vp"><GitHubIcon sx={{ color: 'common.black'}} /></IconButton>
            </Box>
          </Stack>
          <Box
            height={1}
            width={{ xs: "100px", md: "350px", lg: "500px" }}
            display={{ xs: 'none', md: 'block' }}
            alt={t("landingImage")} // Not done
            component="img"
            src="/static/img/landingImage.svg"
          />
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
      <Box display={isMdHeight ? "block" : "none"} position="absolute" bottom={20} left="50%" sx={{ animation: scrollDirection === "down" ? `${scrollDisapear} 1s ease forwards` : `${scrollApear} 1s ease forwards` , fontSize: '25px' }}><KeyboardArrowDownRoundedIcon sx={{ fontSize: '60px', animation: `${scrollUpDown} 2s infinite ease`}} /></Box>
    </Box>
  );
};

export default Landing;
