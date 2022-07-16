import React from "react";
import { Grid, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";

const Presentation = () => {
  const { t } = useTranslation("landingView");

  return (
    <Box bgcolor="white"  sx={{ px: { xs: 2, sm: 3 } }}>
      <Grid container maxWidth="xl" mx="auto">
        <Grid item xs={12} mb={5}>
          <Text h3>{t('Title')}</Text>
        </Grid>
        <Grid item xs={12} md={5}>
          <Text h3>{t('r')}</Text>
        </Grid>
        <Grid item xs={12} md={7}>
          <Text h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus justo, auctor et vestibulum eget,
            aliquet nec enim. Ut turpis diam, elementum auctor finibus sit amet, aliquam in tortor. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Mauris nec ornare nunc. Ut varius nisi sed porttitor cursus.
            Ut auctor blandit enim ac aliquam. Morbi volutpat sed nisi a mattis. Proin quis odio ligula. Etiam eleifend quis urna sed euismod.
            Integer vitae sem eu risus auctor sodales ut in orci. Cras a nulla tellus. In eleifend feugiat diam, eu sodales leo porttitor ut.
            Etiam cursus metus odio, ut ullamcorper neque ultricies vel.

            Aenean eu felis sed leo vestibulum placerat. Phasellus feugiat dui quis turpis accumsan gravida. Pellentesque pharetra, nisl id porta tempus,
          </Text>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Presentation;
