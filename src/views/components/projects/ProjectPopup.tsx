import React, { useCallback } from "react";
import { Box, Card, Dialog, IconButton, useMediaQuery } from "@mui/material";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WebIcon from '@mui/icons-material/Web';
import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CarouselComponent from "./CarouselComponent";
import LanguageIcon from '@mui/icons-material/Language';

export interface DialogProjectProps {
  onClose: Function;
  open: boolean;
  id: number,
  tasks: Array<string>;
  type: string;
  platform: string;
  title: string;
  description: string;
  technologies: Array<string>;
  itemImages: Array<{ url: string; alt: string }>,
  url: string

}

const ProjectPopup = ({ open, onClose, type, tasks, title, platform, description, technologies, itemImages, url }: DialogProjectProps) => {
  const { t } = useTranslation("projects");
  const isMd = useMediaQuery('(min-width: 900px)');

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Dialog
     fullScreen={ isMd ? false : true}
      onClose={handleClose}
      open={open}
      PaperProps={{
        style: { borderRadius: isMd ? 30 : 0 }
      }}
      maxWidth="lg"
    >
      <Card elevation={5} sx={{ overflowY: { xs: 'auto', md : 'none'} }}>
        <Box sx={{ zIndex: 2}} position={{ xs: "fixed", md: "inherit"}} width={1} borderBottom="5px solid" bgcolor="primary.main" borderColor="primary.main" display="flex" alignContent="center" alignItems="center" justifyContent="space-between" px={{ xs: 0.5, md: 5 }} py={1}>
          <Box display="flex" alignItems="center">
            {platform === "mobile" ? <PhoneIphoneIcon sx={{ pr: 1 }} fontSize="large" /> : <WebIcon sx={{ pr: 1 }} fontSize="large" />}
            <Box px={{ xs: 0, md: 1.5 }}>
              <Text body2 bold={900}>{title}</Text>
              {type === "pro" ? <Text body2 italic fontSize="14px" lineHeight={1} pb={1}>{t('proProject')}</Text> : <Text body2 italic fontSize="14px" lineHeight={1} pb={1}>{t('persoProject')}</Text>}
            </Box>
          </Box>
          <IconButton onClick={handleClose}> <CloseIcon /> </IconButton>
        </Box>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-around" py={3} mt={{ xs: 10, md: 0 }}>
          <Box px={{ xs: 1, md: 3 }} flex={{ xs: 0.5, md: 1 }} >
            <CarouselComponent itemImages={itemImages} />



          </Box>
          <Box flex={{ xs: 0.5, md: 1 }} px={{ xs: 2, md: 3 }} height="400px" sx={{ overflowY: { xs: 'none', md : 'auto'} }}>
            <Text body2 bold={900} underline fontSize="18px"  >{t('description')}</Text>
            <Text body2>{description}</Text>
            <Text body2 bold={900} underline fontSize="18px" sx={{ mt: 3 }}>{t('tasks')}</Text>
            {tasks && tasks.length > 0 && tasks.map((task) => (
              <Box key={task} display="flex" alignItems="center">
                <FiberManualRecordIcon sx={{ fontSize: '10px', mr: 1 }} />
                <Text body2>{task}</Text>
              </Box>
            ))}
            <Text body2 bold={900} underline fontSize="18px" sx={{ mt: 3 }}>{t('technologiesUsed')}</Text>
            <Box display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
              {technologies && technologies.length > 0 && technologies.map((technologie) => (
                <Box key={technologie} bgcolor="primary.light" borderRadius={10} px={2} m={1}> <Text body2 bold={900} fontSize="13px">{technologie}</Text></Box>
              ))}
            </Box>
            {url !== "" && (
              <>
            <Text body2 bold={900} underline fontSize="18px" sx={{ pb: 1, mt: 3 }} >{t('url')}</Text>

                <Box display="flex">
                  <LanguageIcon fontSize="small" sx={{ mr: 1 }} />
                  <Text>
                    <Box component="a" sx={{ color: 'text.primary' }} target="_blank" href={url}>{url}</Box>
                  </Text>
                </Box>
              </>

            )}

          </Box>

        </Box>
      </Card>

    </Dialog>
  );
};

export default ProjectPopup;
