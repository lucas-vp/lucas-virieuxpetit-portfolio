import React from "react";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Tooltip, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const ThemeModeToggler = () => {
  const { t } = useTranslation("landingView");

  const theme = useTheme();
  const { themeToggler } = theme;
  const { mode } = theme.palette;

  return (
    <Tooltip title={t("switchThemeMode")}>
      <Button
        variant="outlined"
        onClick={() => themeToggler()}
        sx={{
          alignSelf: "center",
          color: "text.secondary",
          borderRadius: 2,
          minWidth: "auto",
          padding: 0.5,
          borderColor: "text.secondary",
        }}
      >
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
    </Tooltip>
  );
};

export default ThemeModeToggler;
