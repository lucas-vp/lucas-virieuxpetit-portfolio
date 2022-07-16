import React from "react";
import { Box, useTheme, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";
import TopBar from "./TopBar";
import AgeCitySituation from "./AgeCitySituation";
const Landing = () => {
  const { t } = useTranslation("landingView");
  const theme = useTheme();

  return (
    <Box height={1}>
      <Box
        height="85%"
        sx={{
          background: theme.palette.alternate.landingGradient,
        }}
      >
        <TopBar />
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          height={0.8}
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <Stack spacing={8}>
            <Text h1>{t("welcomeOnMyPortfolio")}</Text>
            <Box display="flex">
              <Text h1>{t("its")}</Text>
              <Text h1 sx={{ px: 1, color: "primary.dark" }}>
                {t("name")}
              </Text>
              <Text h1>{t("and")}</Text>
            </Box>
            <Box display="flex">
              <Text h1>{t("iam")}</Text>
              <Text h1 sx={{ pl: 1 }}>
                {t("jobTitle")}
              </Text>
            </Box>
            <AgeCitySituation />
          </Stack>
          <Box
            sx={{ 
              display: { xs: 'none', md: 'block' },
              width: "35%" 
            }}
            alt={t("landingImage")} // Not done
            component="img"
            src="/static/img/landingImage.svg"
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "8%",
          width: 1,
          transform: "rotate(180deg)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          height="180px"
          style={{ width: "100%"}}
        >
          <path
            fill={theme.palette.common.white}
            d="M0,224L80,234.7C160,245,320,267,480,250.7C640,235,800,181,960,165.3C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </Box>
    </Box>
  );
};

export default Landing;
