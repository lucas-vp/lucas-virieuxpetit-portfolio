import React, { useMemo } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import Title from "../../../components/Title";
import ProjectsItem from "./ProjectsItem";


const Projects = () => {
  const { t } = useTranslation("projects");

  const data = useMemo(() => [
    {
      id: 0,
      coverImage: "static/img/projects/project_Fanny.webp",
      title: t('title1'),
      type: 'pro',
      platform: 'web',
      description:t('description1'),
      tasks: [
        t('task1_1'),
        t('task1_2'),
        t('task1_3'),
        t('task1_4'),
        t('task1_5'),
        t('task1_6'),


      ],
      technologies: ['ReactJs', 'MUI'],
      itemImages: [{url: "static/img/projects/project_fanny_1.png", alt: t('alt_project_Fanny')} ,{url: "static/img/projects/project_fanny_2.jpg", alt:  t('alt_project_Fanny')}],
      url: "https://www.fanny-vp-psychologue.fr"
    },
    {
      id: 1,
      title: t('title2'),
      coverImage: "static/img/projects/project_restaurant.png",
      type: 'pro',
      platform: 'web',
      description: t('description2'),
      tasks: [
        t('task2_1'),
        t('task2_2'),
        t('task2_3'),
        t('task2_4'),

      ],
      technologies: ['ReactJs', 'Typescript', 'MUI', 'EmailJS', 'Figma'],
      itemImages: [{url: "static/img/projects/restaurantProject.jpg", alt: t('alt_project_restaurant')}],
      url: ""

    },
    {
      id: 2,
      title: t('title3'),
      coverImage: "static/img/projects/project_portfolio.webp",
      type: 'perso',
      platform: 'web',
      description: t('description3'),
      tasks: [
        t('task3_1'),
        t('task3_2'),
        t('task3_3'),
        t('task3_4'),
        t('task3_5'),
        t('task3_6'),
        t('task3_7'),

      ],
      technologies: ['ReactJs', 'Typescript', 'MUI', 'EmailJS', 'Figma'],
      itemImages: [{url: "static/img/projects/project_portfolio_1.png", alt: t('alt_project_portfolio')} ,{url: "static/img/projects/project_portfolio_2.jpg", alt:  t('alt_project_portfolio')}],
      url: "https://lucas-virieuxpetit-portfolio.com"


    },
    {
      id: 3,
      title: t('title4'),
      coverImage: "static/img/projects/project_flutter.jpg",
      type: 'pro',
      platform: 'mobile',
      description: t('description4'),
      tasks: [
        t('task4_1'),
        t('task4_2'),
        t('task4_3'),

      ],
      technologies: ['Flutter', 'Figma'],
      itemImages: [{url: "static/img/projects/project_flutter_1.png", alt: t('alt_project_flutter')}, {url: "static/img/projects/project_flutter_2.png", alt: t('alt_project_flutter')}, {url: "static/img/projects/project_flutter_3.png", alt: t('alt_project_flutter')}],
      url: ""

    },
  ], [t])

  return (
    <Box mx="auto" maxWidth="xl" px={{ xs: 2, lg: 10 }}>
      <Title lengthBg="200px">{t('projects')}</Title>
      <Grid data-aos="zoom-in" container spacing={5} display="flex" justifyContent="space-between" pb={5} pt={8} px={{xs: 2, sm: 3, lg: 8 }}>
        {data && data.length > 0 && data.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={5} lg={4} mx={{ xs: 'auto', md: 0 }} >
            <ProjectsItem  {...project} />
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default Projects;
