import React from "react";
import { Box, Button } from "@mui/material";
import Page from "../components/Page";
import Text from "../components/Text";
import { Link } from "react-router-dom";
import TopBar from "./components/landing/TopBar";
import { useTranslation } from "react-i18next";

const LegalNoticeView = () => {
  const { t } = useTranslation("legalNotice");


  return (
    <Page>
      <TopBar bgColor="primary.main" />
      <Box maxWidth="xl" sx={{ px: { xs: 2, lg: 10 } }} mx="auto" pb={5} >
        <Text h1 textAlign="center" pt={4} mb={6}>{t("legalNotice")}</Text>

        <Text body2>{t("intro")}</Text>

        <Box component="article" mt={5}>
          <Text h2 mb={2} borderBottom="4px solid #807c75">{t("presentationSiteh2")}</Text>
          <Box display="flex" flexWrap="wrap" mt={1}><Text body2 mr={2}>{t("owner")}</Text><Text body2 bold={900}>Lucas Virieux-Petit</Text> </Box>
          <Box display="flex" mt={1} flexWrap="wrap"><Text body2 mr={2}>{t("address")}</Text><Text body2 bold={900}>La Rochelle - France</Text> </Box>
          <Box display="flex" mt={1} flexWrap="wrap"><Text body2 mr={2}>{t("publicationManager")}</Text><Text body2 bold={900}>Lucas Virieux-Petit</Text> </Box>
          <Box display="flex" mt={1} flexWrap="wrap"><Text body2 mr={2}>{t("contactManager")}</Text><Button component={Link} to="/" variant="text" disableTouchRipple sx={{ fontWeight: 900, p: 0 }}>{t("sendMessage")}</Button></Box>
          <Box display="flex" mt={1} flexWrap="wrap"><Text body2 mr={2}>{t("host")}</Text><Text body2 bold={900}>{t("hostAddress")}</Text> </Box>
        </Box>
        <Box component="article" mt={5}>
          <Text h2 mb={2} borderBottom="4px solid #807c75">{t("intellectualPropertyh2")}</Text>
          <Text body2>{t("intellectualProperty_text1")}</Text>
          <Text body2>{t("intellectualProperty_text2")}</Text>
          <Text body2>{t("intellectualProperty_text3")}</Text>
        </Box>
        <Box component="article" mt={5}>
          <Text h2 mb={2} borderBottom="4px solid #807c75">{t("formh2")}</Text>
          <Text body2>{t("form_text1")}</Text>
          <Text body2>{t("form_text2")}</Text>
        </Box>


      </Box>
    </Page>
  );
};

export default LegalNoticeView;
