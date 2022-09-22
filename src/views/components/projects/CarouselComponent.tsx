import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Box, useMediaQuery } from '@mui/material'

export interface CarosselImagesProp {
  itemImages : Array<{ url: string; alt: string }>,
}
const CarouselComponent = ({ itemImages } : CarosselImagesProp) => {

  const isMd = useMediaQuery('(min-width: 900px)');

  return (
    <Carousel
      sx={{ height: 1 }}
      navButtonsAlwaysVisible={itemImages.length === 1 ? false : true }
      swipe
      navButtonsWrapperProps={{
        style: {
          marginTop: isMd ? '20px' : '5px',
          paddingBottom: isMd ? '75px' : '40px',
        }
      }}
      navButtonsProps={{
        style: {
          visibility : itemImages.length === 1 ? 'hidden' : 'visible',
          backgroundColor: "darkgrey",
          color:"#fbf7f3",
          width: isMd ? "30px" : "25px",
          height: isMd ? "30px" : "25px"
        }
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color:"#E9C46A",
        }
      }}
      indicatorIconButtonProps={{
        style: {
          visibility : itemImages.length === 1 ? 'hidden' : 'visible',
          color:"lightgrey",
          marginTop: isMd ? '0px' : '11px',

        }
      }}
      stopAutoPlayOnHover
    >
      {
        itemImages.map((itemImage, i) => (
          <Box
            key={i}
            alt={itemImage.alt}
            component="img"
            src={itemImage.url}
            border="2px solid"
            borderColor="lightgrey"
            boxShadow={1}
            sx={{ objectFit: 'cover', borderRadius: 3 }}
            height={{ xs: 200, md: 350 }}
            width={1}
          />

        ))
      }
    </Carousel>
  );
};

export default CarouselComponent;
