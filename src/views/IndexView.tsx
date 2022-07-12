import { Box, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Text from "../components/Text";
import TopBar from "./components/TopBar";

const IndexView = () => {
  const { t } = useTranslation("landingView");

  return (
    <>
      <Box sx={{ bgcolor: 'primary.main' }}><TopBar /></Box>

      <Text h1 sx={{ color: 'primary.main' }}>
        {t("test")}
      </Text>
      <Button variant="text" sx={{ color: 'primary.light' }}>Bonjout</Button>
      <Text h6>Bonjour, Je m'appelle Lucas Virieux-Petit</Text>
    </>
  );
};

export default IndexView;
