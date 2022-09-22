import React, { useState, useCallback } from "react";
import { Button, Box, Stack, IconButton, List, ListItem, ListItemButton, ListItemText, Drawer, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageToggler from "../../../components/LanguageToggler";
import MenuIcon from "@mui/icons-material/Menu";
import { Anchors } from "../../../types";
import { useNavigate } from "react-router-dom";

const menuItems: Array<any> = ['profile', 'education', 'experiences', 'skills', 'projects', 'contact']
interface Props {
  anchors?: Anchors;
  bgColor? : string;
}
const TopBar = ({ anchors, bgColor }: Props) => {
  const { t } = useTranslation("landingView");
  const isMd = useMediaQuery('(min-width: 900px)');
 const navigate = useNavigate();
  //Drawer Menu
  const [openedAnchor, setOpenedAnchor] = useState(false);

  const toggleDrawer = (event: React.MouseEvent | Anchors | 'right') => {
    setOpenedAnchor((prev) => !prev);
  };


  // scroll anchors
  const scrollTo = useCallback((anchor: 'landing' | 'profile' | 'education' | 'experiences' | 'skills' | 'projects' | 'contact') => () => {
    if (anchors) {
      const currentAchor = anchors[anchor].current;
      if (currentAchor) {
        console.log(currentAchor)
        currentAchor.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      if (!isMd) toggleDrawer('right');
    } else {
      navigate('/')
    }
  }, [anchors, isMd, navigate]);

  return (
    <Box display="flex" justifyContent="space-between" bgcolor={bgColor ? bgColor : 'none'} py={2} sx={{ px: { xs: 2, sm: 5 } }}>
      <Box display="flex">
        <Box
          onClick={scrollTo('landing')}
          alt={t("logo_LVP")}
          component="img"
          src="/static/logo/logoLVP_white.svg"
          width={70}
          height={1}
          mr={4}
          sx={{ cursor: 'pointer' }}
        />
        {anchors && (
          <Stack component="nav" direction="row" sx={{ display: { xs: "none", md: "block" } }}>
            {menuItems.map((menuItem =>
              <Button
                onClick={scrollTo(menuItem)}
                key={menuItem}
                variant="text"
                disableTouchRipple
                sx={{ fontWeight: 700, fontSize: '16px', color: "text.secondary", "&:hover": { transform: "scale3d(1.1, 1.1, 1)" } }}>
                {t(menuItem)}
              </Button>
            ))}
          </Stack>
        )}
      </Box>
      <Stack direction="row" spacing={2}>
        <LanguageToggler />
        { /*<ThemeModeToggler />*/}
        {anchors && (
          <IconButton
            onClick={toggleDrawer}
            sx={{ p: 0, height: "35px", width: "35px", display: { xs: "block", md: "none" } }}
          >
            <MenuIcon fontSize="large" sx={{ color: "text.secondary" }} />
          </IconButton>
        )}
      </Stack>
      {anchors && (
        <Drawer disableRestoreFocus={true} anchor="right" open={openedAnchor} onClose={toggleDrawer}>
          <Box
            sx={{ width: 250 }}

          >
            <List>
              {menuItems.map((menuItem) => (
                <ListItem key={menuItem} disablePadding>
                  <ListItemButton onClick={scrollTo(menuItem)} >
                    <ListItemText primary={t(menuItem)} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}

    </Box>
  );
};

export default TopBar;
