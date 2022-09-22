import React from "react";
import { Grid, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";
import Title from "../../../components/Title";

const Profile = () => {
  const { t } = useTranslation("profile");

  return (
    <Grid  data-aos="fade-up" container justifyContent="space-around" alignItems="center" mx="auto" maxWidth="xl" px={{ xs: 2, lg: 10 }}>
      <Grid item xs={12} mb={10}>
        <Title lengthBg="80px">{t('profile')}</Title>
      </Grid>
      <Grid item xs={12} md="auto" textAlign="center">
        <Box
          alt={t("profilePicture")} // not done
          component="img"
          src="/static/img/profilePicture.png"
          height={{xs : "200px", md: "350px" }}
          width={{xs : "162", md: "284" }}
          mb={{xs : 2, md: 0 }}
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <Text body2 bold={700} fontSize="23px"> Hello,</Text>
        <Text body2 textAlign="justify" sx={{ pt: 2 }}>{t("description1")}</Text>
        <Text body2 textAlign="justify" sx={{ pt: 2 }}>{t("description2")}</Text>
        <Text body2 textAlign="justify" sx={{ pt: 2 }}>{t("description3")}</Text>
      </Grid>

    </Grid>
  );
};

export default Profile;
