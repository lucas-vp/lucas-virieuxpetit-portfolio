import { Box, useTheme, useMediaQuery, Fab } from "@mui/material";
import React, { useRef, useMemo, useCallback } from "react";
import { Anchors } from "../types";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Footer from "./components/Footer";
import Landing from "./components/landing/Landing";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Skill from "./components/skill/Skill";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const IndexView = () => {
  const theme = useTheme();
  const landingRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef(null);
  const educationRef = useRef(null);
  const experiencesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);


  const anchors: Anchors = useMemo(() => ({
    landing: landingRef,
    profile: profileRef,
    education: educationRef,
    experiences: experiencesRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,

  }), []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const fullLandingHeight = useMediaQuery('(min-height: 700px)');
  return (
    <>
      <Box ref={landingRef} component="section" sx={{ bgcolor: 'background.default', height: fullLandingHeight ? '1' : 'none' }}><Landing anchors={anchors} /></Box>
      <Box ref={profileRef} component="section" bgcolor="background.default"><Profile /></Box>
      <Box ref={educationRef} component="section" sx={{ background: theme.palette.alternate.splitColorPaperWhiteYellow }}><Education /></Box>
      <Box ref={experiencesRef} component="section" sx={{ background: theme.palette.alternate.landingGradient }}><Experience /></Box>
      <Box ref={skillsRef} component="section" sx={{ background: theme.palette.alternate.splitColorPaperYellowWhite }}><Skill /></Box>
      <Box ref={projectsRef} sx={{ bgcolor: 'background.default' }} component="section"> <Projects /></Box>
      <Box sx={{ background: theme.palette.alternate.landingGradient }} height="25px" />
      <Box ref={contactRef} component="section" sx={{ bgcolor: 'background.default' }}><Contact /></Box>
      <Footer />
      <Fab onClick={scrollToTop} size="small" color="primary" sx={{ bottom: 20, right: 20, position: 'fixed' }}>
        <KeyboardArrowUpIcon />
      </Fab>
    </>
  );
};

export default IndexView;
