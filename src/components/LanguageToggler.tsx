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
          alignSelf: "center",
          color: "text.secondary",
          borderRadius: 2,
          minWidth: "auto",
          padding: 0.5,
          borderColor: "text.secondary",
        }}
      >
        {i18n.language === "fr" ? (
          <Box
            alt="Logo Sostag"
            component="img"
            src="/static/icon/englishLanguage.png"
            width={24}
          />
        ) : (
          i18n.language === "en" && (
            <Box
              alt="Logo ostag"
              component="img"
              src="/static/icon/frenchLanguage.png"
              width={24}
            />
          )
        )}
      </Button>
    </Tooltip>
  );
};

export default LanguageToggler;
