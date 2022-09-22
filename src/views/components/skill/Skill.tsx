import React from "react";
import { Paper, Box, Divider, useMediaQuery, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import Title from "../../../components/Title";
import IconText from "../../../components/IconText";
import Text from "../../../components/Text";
const Skill = () => {
  const { t } = useTranslation("skills");
  const isMd = useMediaQuery('(max-width: 600px)');

  return (

    <Box display="flex" alignItems="center" height={1} py={10} sx={{ maxWidth: "xl", mx: "auto" }}>
      <Paper elevation={10} sx={{ width: { xs: 0.9, sm: 0.8, md: 0.9, lg: 0.8 }, borderRadius: 5, mx: 'auto', bgcolor: 'background.default' }}>
        <Title lengthBg="150px" sx={{ pl: 4, pt: 4 }}>{t('skills')}</Title>
        <Grid container justifyContent="space-around" mt={7} mb={4} alignContent="center" >
          <Grid item xs={12} sm="auto" md={3.5} alignSelf="center">
            <Box display="flex" justifyContent="center">
              <IconText altIcon="HTML icon" iconFileName="html.png">HTML</IconText>
              <Text body2 sx={{ mx: 1 }}>/</Text>
              <IconText altIcon="CSS icon" iconFileName="css.png">CSS</IconText>
            </Box>
            <IconText altIcon="Javascript / Jquery icon" iconFileName="javascript.png">Javascript / Jquery</IconText>
            <IconText altIcon=">React JS icon" iconFileName="reactJS.png">React JS</IconText>
            <IconText altIcon="PHP icon" iconFileName="php.png">PHP</IconText>
          </Grid>
          <Grid item xs={12} sm="auto" >
            <Divider orientation={isMd ? "horizontal" : "vertical"} sx={{ borderRightWidth: 4, my: { xs: 1, sm: 0 }, borderColor: 'primary.main' }} />
          </Grid>
          <Grid item xs={12} sm="auto" md={3.5} alignSelf="center" >
            <IconText altIcon="Flutter icon" iconFileName="flutter.png">Flutter</IconText>
            <IconText altIcon="Kotlin icon" iconFileName="kotlin.png">Kotlin</IconText>
            <IconText altIcon="Swift icon" iconFileName="swift.png">Swift</IconText>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Divider orientation={isMd ? "horizontal" : "vertical"} sx={{ borderRightWidth: 4, my: { xs: 1, sm: 0 }, borderColor: 'primary.main' }} />
          </Grid>
          <Grid item xs={12} sm="auto" md={3.5} alignSelf="center">
            <IconText altIcon="SQL icon" iconFileName="sql.png">SQL</IconText>
            <IconText altIcon="JAVA icon" iconFileName="java.png">JAVA</IconText>

          </Grid>

        </Grid>


      </Paper>
    </Box>
  );
};

export default Skill;