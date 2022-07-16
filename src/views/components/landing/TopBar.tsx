import React, { useState } from "react";
import {Button, Box, Stack, IconButton, List, ListItem, ListItemButton, ListItemText, Drawer } from "@mui/material";
import { useTranslation } from "react-i18next";
import ThemeModeToggler from "../../../components/ThemeModeToggler";
import LanguageToggler from "../../../components/LanguageToggler";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems: Array<string> = ['home', 'profile', 'education', 'experiences', 'skills', 'projects', 'contact']
const TopBar = () => {
  const { t } = useTranslation("landingView");

  //Drawer Menu
  const [openedAnchor, setOpenedAnchor] = useState(false);

  const toggleDrawer = (event: React.MouseEvent) => {
      setOpenedAnchor((prev) => !prev);
    };

  return (
    <Box display="flex" justifyContent="space-between" py={2} sx={{ px: { xs: 2, sm: 5 } }}>
      <Box display="flex">
        <Box
          alt={t("logo_LVP")}
          component="img"
          src="/static/logo/logoLVP_white.svg"
          width={70}
          mr={4}
        />
        <Stack direction="row" sx={{ display: { xs: "none", md: "block" } }}>
          {menuItems.map((menuItem =>
             <Button key={menuItem} sx={{ typography: 'h5', color: "text.secondary", "&:hover": { transform: "scale3d(1.1, 1.1, 1)" } }}>{t(menuItem)}</Button>
            ))}
        </Stack>
      </Box>
      <Stack direction="row" spacing={2}>
        <LanguageToggler />
        <ThemeModeToggler />
        <IconButton
          onClick={toggleDrawer}
          sx={{ p: 0, height: "35px", display: { xs: "block", md: "none" } }}
        >
          <MenuIcon fontSize="large" sx={{ color: "text.secondary" }} />
        </IconButton>
      </Stack>
      <Drawer anchor="right" open={openedAnchor} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          onClick={toggleDrawer}
        >
          <List>
            {menuItems.map((menuItem) => (
              <ListItem key={menuItem} disablePadding>
                <ListItemButton>
                  <ListItemText primary={t(menuItem)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default TopBar;
