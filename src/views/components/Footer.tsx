import React from "react";
import { Stack, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../../components/Text";

const Footer = () => {
const { t } = useTranslation("landingView");

  return (
    <Stack direction="row" justifyContent="center" py={1} sx={{ background: 'white' }}>
     <Box
          alt={t("logo_LVP")}
          component="img"
          src="/static/logo/logoLVP_white.svg"
          width={30}
          mr={4}
        />
        <Text h5>{t('name')}</Text>
    </Stack>
  );
};

export default Footer;
