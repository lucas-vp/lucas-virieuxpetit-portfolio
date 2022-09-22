import React from "react";
import { Box } from "@mui/material";
import Title from "../../../components/Title";
import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";

const Experience = () => {
  const { t } = useTranslation("experiences");

  return (
    <Box sx={{ maxWidth: "xl", px: { xs: 2, lg: 10 }, mx: "auto" }}  data-aos="fade-right" data-aos-offset="0">
      <Title whiteBg lengthBg="100px" sx={{ pl: 2, pt: 2 }}>{t('experiences')}</Title>
      <Box display="flex" component="article" mt={8} justifyContent="center" width={{ xs: 1, md: 0.8 }} mx="auto">
        <Box borderRadius={10} bgcolor="white" width={{ xs: "40px", md: "10px" }} mr={3} sx={{ opacity: 0.6 }} />
        <Box>
          <Box>
            <Text body2 bold={900} fontSize="20px">{t('jobTitle1')}</Text>
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
              <Text body2 bold={900}>Sostag - La Rochelle (France)</Text>
              <Text body2 sx={{ mx: 2, display: { xs: 'none', md: 'block'} }} >/</Text>
              <Text body2 >{t('jobDate1')}</Text>
            </Box>
          </Box>
          <Box mt={3}>
            <Text body2 >{t('jobDescription1_1')}</Text>
            <Text body2 >{t('jobDescription1_2')}</Text>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
