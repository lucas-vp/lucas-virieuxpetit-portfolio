import React, { useCallback } from "react";
import Button from "@mui/material/Button";
import { Box, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageToggler = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("landingView");

  const toogleLanguage = useCallback(() => {
    if (i18n.language === "fr") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("fr");
    }
  }, [i18n]);

  return (
    <Tooltip title={t('switchLanguage')}>
      <Button
        onClick={toogleLanguage}
        variant="outlined"
        sx={{
          boxShadow: 2,
          alignSelf: "center",
          color: "text.secondary",
          borderRadius: 2,
          minWidth: "auto",
          padding: 0.5,
          borderColor: "text.secondary",
          borderWidth: 1.5
        }}
      >
        {i18n.language === "fr" ? (
          <Box
            alt="UK flaf"
            component="img"
            src="/static/icon/UKFlag.png"
            width={24}
            height={1}
          />
        ) : (
          i18n.language === "en" && (
            <Box
              alt="france flag"
              component="img"
              src="/static/icon/franceFlag.png"
              width={24}
            />
          )
        )}
      </Button>
    </Tooltip>
  );
};

export default LanguageToggler;
