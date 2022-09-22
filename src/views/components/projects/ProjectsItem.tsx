import React, { useState, useCallback } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";
import ProjectPopup from "./ProjectPopup";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export interface ProjectProps {
  id: number,
  type: string; // pro or perso
  tasks: Array<string>;
  platform: string; // web or mobile
  title: string;
  description: string;
  technologies: Array<string>;
  itemImages: Array<{ url: string; alt: string }>,
  url: string,
  coverImage: string,

}
const ProjectsItem = ({ id, type, title, platform, description, technologies, tasks, itemImages, url, coverImage }: ProjectProps) => {
  const { t } = useTranslation("projects");
  const isMd = useMediaQuery('(min-width: 900px)');

  // ## Dialog Popup project detail
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpenDialog = useCallback(() => {
    setOpenDialog(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  // Box hover
  const [isHovering, setHovering] = useState<boolean>(() => isMd ? false : true);
  const changeHover = useCallback(() => {
    isMd && setHovering((prev) => !prev) 
  }, [isMd])

  const displayTechnologies = useCallback(() => {
    if (technologies.length > 3) {
      const technologiesRemain = technologies.length - 2
      return (
        <Box display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
          {technologies.slice(0, 2).map((technologie) => (
            <Box key={technologie} border="2px solid" borderColor="common.white" borderRadius={10} px={2} mx={0.5} my={1}> <Text body2 bold={700} fontSize={{ xs: "12px", md: "14px" }}>{technologie}</Text></Box>
          ))}
          {technologiesRemain !== 0 && <Box border="2px solid" borderColor="common.white" borderRadius={10} px={2} mx={0.5} my={1}> <Text body2 bold={700} fontSize={{ xs: "12px", md: "14px" }}>+{technologiesRemain}</Text></Box>}

        </Box>
      )
    } else {
      return (
        <Box display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
          {technologies.map((technologie) => (
            <Box key={technologie} border="2px solid" borderColor="common.white" borderRadius={10} px={2} mx={0.5} my={1}> <Text body2 bold={700} fontSize={{ xs: "12px", md: "14px" }}>{technologie}</Text></Box>
          ))}
        </Box>
      )
    }

  }, [technologies])
  return (
    <>
      <Box
      component="article"
      onClick={handleClickOpenDialog }
      onMouseOut={changeHover} 
      onMouseOver={changeHover} 
      height="250px" 
      width={1} 
      position="relative" 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      sx={{ background: isHovering ? 'linear-gradient(#f16343, #E9C46A )' : 'none', cursor: 'pointer' }}  
      boxShadow={5} 
      borderRadius={5} >
        <Box
          alt="test"
          component="img"
          src={coverImage}
          sx={{ objectFit: 'cover', borderRadius: 5, boxShadow: 5, opacity: isHovering ? 0.3 : 1}}
          height={1}
          width={1}

        />
        <Box display="flex" flexDirection="column" px={2} position="absolute" sx={{ opacity: isHovering ? 1 : 0, transition: ".5s ease" }}>
          <Text body2 fontFamily="'Concert One', cursive" fontSize="23px" lineHeight={1.2} letterSpacing={1.5} color="white" >{title}</Text>
          {type === "pro" ? <Text body2 italic fontSize="18px" bold={700} lineHeight={1} pb={1}>{t('proProject')}</Text> : <Text body2 italic fontSize="14px" lineHeight={1} pb={1}>{t('persoProject')}</Text>}
        </Box>
        <Box position="absolute" bottom={0} left={3} sx={{ opacity: isHovering ? 1 : 0, transition: ".5s ease" }}>{displayTechnologies()}</Box>
        <Box position="absolute" top={10} right={10} sx={{ opacity: isHovering ? 1 : 0, transition: ".5s ease" }}><OpenInNewIcon sx={{ color: "white" }}/></Box>

      </Box>
      <ProjectPopup url={url} itemImages={itemImages} id={id} tasks={tasks} type={type} platform={platform} title={title} description={description} technologies={technologies} open={openDialog} onClose={handleCloseDialog} />
    </>

  );
};

export default ProjectsItem;
