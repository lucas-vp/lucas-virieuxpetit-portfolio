import React from "react";
import { Paper, Box, useTheme } from "@mui/material";
//import { useTranslation } from "react-i18next";
//import Text from "../../../components/Text";
const Education = () => {
  //const { t } = useTranslation("landingView");
  const theme = useTheme();

  return (
    <Box
      sx={{ background: theme.palette.alternate.splitColorPaperWhiteYellow }}
    >
      <Box display="flex" alignItems="center" height={1} py={15} sx={{ maxWidth: "xl", mx: "auto" }}>
        <Paper elevation={10} sx={{height: '300px', width: { xs: 0.9, sm: 0.8, md: 0.7  }, borderRadius: 5, mx: 'auto', bgcolor: 'white' }}></Paper>
      </Box>
    </Box>
  );
};

export default Education;
