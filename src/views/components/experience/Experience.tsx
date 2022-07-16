import React from "react";
import { Box,useTheme } from "@mui/material";
// import { useTranslation } from "react-i18next";

const Experience = () => {
  // const { t } = useTranslation("landingView");
  const theme = useTheme();

  return (
    <Box height="500px" sx={{ background: theme.palette.alternate.landingGradient }}>
     
    </Box>
  );
};

export default Experience;
