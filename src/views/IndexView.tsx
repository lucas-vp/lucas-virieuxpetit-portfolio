import { Box, useTheme } from "@mui/material";
import React from "react";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Footer from "./components/Footer";
import Landing from "./components/landing/Landing";
import Presentation from "./components/presentention/Presentation";
import Projects from "./components/projects/Projects";
import Skill from "./components/skill/Skill";

const IndexView = () => {
  const theme = useTheme();

  return (
    <>
      <Box bgcolor="common.white" height={1}>
        <Landing />
      </Box>
      <Presentation />
      <Education />
      <Experience />
      <Skill />
      <Projects />
      <Box sx={{ background: theme.palette.alternate.landingGradient }} height="25px" />
      <Contact />
      <Footer />
    </>
  );
};

export default IndexView;
