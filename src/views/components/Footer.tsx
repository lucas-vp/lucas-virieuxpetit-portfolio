import React, {useCallback} from "react";
import { Stack, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../../components/Text";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation("common");
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, []);
  
  return (
    <Stack direction="row" justifyContent="center" flexWrap="wrap" pb={1} pt={10} sx={{ background: 'background.default' }}>
      <Box
        alt={t("logo_LVP")}
        component="img"
        src="/static/logo/logoLVP_white.svg"
        width="35px"
        height="30px"
        mr={1}
      />
      <Text body2>- © 2022 Lucas Virieux-Petit -</Text>
      <Button
        onClick={scrollToTop}
        component={Link}
        to="/mentions-legales"
        variant="text"
        disableTouchRipple
        sx={{
          py: 0,
          typography: 'body2',
          fontSize: '15px',
          fontWeight: 600,
          color:'text.primary'
        }}
      >
        {t("legalNotice")}
        </Button>

    </Stack>
  );
};

export default Footer;
