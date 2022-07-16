import React from "react";
import { Divider, Paper, Stack, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";
import ManIcon from "@mui/icons-material/Man";
import WarningIcon from "@mui/icons-material/Warning";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const AgeCitySituation = () => {
  const { t } = useTranslation("landingView");

  return (
    <Paper elevation={1} sx={{ background: "rgba(255, 255, 255, 0.6)" }}>
      <Stack
        sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        justifyContent="space-evenly"
        textAlign="center"
      >
        <Box display="flex" flexBasis="50%" sx={{ justifyContent: { xs: 'space-evenly' , sm: 'space-around'} }}>
          <Box display="flex" alignItems="center">
            <ManIcon sx={{ mr: 1 }} />
            <Text h5 sx={{ py: 1 }}>
              {t("age")}
            </Text>
          </Box>
          <Divider flexItem sx={{ borderRightWidth: 2 }} />
          <Box display="flex" alignItems="center">
            <LocationCityIcon sx={{ mr: 1 }} />
            <Text h5 sx={{ py: 1 }}>
              {t("city")}
            </Text>
          </Box>
        </Box>
        <Divider flexItem sx={{ borderRightWidth: 2 }} />
        <Box display="flex" alignItems="center" alignSelf="center">
          <WarningIcon sx={{ mr: 1 }} />
          <Text h5 sx={{ py: 1 }}>
            {t("currentSituation")}
          </Text>
        </Box>
      </Stack>
    </Paper>
  );
};

export default AgeCitySituation;
