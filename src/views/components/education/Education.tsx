import React from "react";
import { Paper, Box, Grid, Divider, useMediaQuery } from "@mui/material";
import Title from "../../../components/Title";
import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";
import SchoolIcon from '@mui/icons-material/School';
import IconText from "../../../components/IconText";

const Education = () => {
  const { t } = useTranslation("education");
  const isMd = useMediaQuery('(max-width: 900px)');

  return (
    <Box display="flex" alignItems="center" height={1} py={10} sx={{ maxWidth: "xl", mx: "auto" }}>
      <Paper elevation={10} sx={{ width: { xs: 0.9, sm: 0.8, md: 0.9, lg: 0.8 }, borderRadius: 5, mx: 'auto', bgcolor: 'background.default', py: 4 }}>
        <Title lengthBg="250px" sx={{ pl: 4 }}>{t('education')}</Title>
        <Grid container height={1} alignContent="center" justifyContent="space-around" mx="auto" mt={8}>
          <Grid item xs={12} md={3.7} textAlign="center" display="flex" flexDirection="column" justifyContent="space-between" >
            <Box>
              <Text body2 fontSize="30px" color="primary.dark" lineHeight="1">2019 - 2020</Text>
              <Text body2 bold={900}>{t('bachelor1')}</Text>
            </Box>
            <IconText altIcon="France Flag" iconFileName="franceFlag.png">{t('universityLR')}</IconText>
          </Grid>
          <Grid item xs={12} md="auto">
            <Divider orientation={isMd ? "horizontal" : "vertical"} sx={{ borderRightWidth: 4, my: { xs: 3, md: 0 }, borderColor: 'primary.main' }} />
          </Grid>
          <Grid item xs={12} md={3.7} textAlign="center" display="flex" flexDirection="column" justifyContent="space-between" px={1} >
            <Box>
              <Text body2 fontSize="30px" color="primary.dark" lineHeight="1">2020 - 2021</Text>
              <Text body2 bold={900}>{t('bachelor2')}</Text>
              <Text body2 italic>{t('erasmus')}</Text>
            </Box>
            <IconText altIcon="Ireland Flag" sizeIcon={18} iconFileName="irelandFlag.png">{t('universityGalway')}</IconText>
          </Grid>
          <Grid item xs={12} md="auto">
            <Divider orientation={isMd ? "horizontal" : "vertical"} sx={{ borderRightWidth: 4, borderColor: 'primary.main', my: { xs: 3, md: 0 } }} />
          </Grid>
          <Grid item xs={12} md={3.7} textAlign="center" display="flex" flexDirection="column" justifyContent="space-between" px={1} >
            <Box>
              <Text body2 fontSize="30px" color="primary.dark" lineHeight="1">2021 - 2022</Text>
              <Text body2 bold={900}>{t('bachelor3')}</Text>
              <Text body2 italic>{t('diplomaTitle')}</Text>
            </Box>
            <IconText altIcon="France Flag" iconFileName="franceFlag.png">{t('universityLR')}</IconText>
            <Box display="flex" flexWrap="nowrap" alignItems="center" justifyContent="center">
            </Box>
          </Grid>
          <Grid item xs={12} md={11} mt={3}>
            <Divider orientation="horizontal" sx={{ borderBottomWidth: { xs: 1, md: 4 }, borderColor: 'primary.main' }} />
          </Grid>
          <Grid item xs={12} mt={2} px={1}>
            <Box display="flex" flexWrap="nowrap" alignItems="center" justifyContent="center">
              <SchoolIcon sx={{ mx: 2 }} />
              <Text body2 fontSize={{ xs: '15px', md: '20px' }} bold={900} lineHeight="1.5">{t('graduated')}</Text>
            </Box>

          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Education;
