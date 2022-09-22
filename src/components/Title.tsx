import React from "react";
import { Box, BoxProps } from "@mui/material";
import Text from "./Text";

interface Props {
  children: React.ReactNode;
  lengthBg: string;
  sx?: BoxProps['sx'];
  whiteBg? : boolean
}

const Title = ({ children, lengthBg, whiteBg, ...sx}: Props) => {
  return (
    <Box {...sx}>
      <Box position="relative">
        <Box borderRadius={1.5} py={1} bgcolor={ whiteBg ? "rgba(255, 255, 255, 0.45)" : "rgba(233, 196, 106, 0.45)" } position="absolute" width={lengthBg} top={{ xs: 10, sm :20 }}/>
        <Text h2 pb={0.5} position="absolute" >{children}</Text>
      </Box>
    </Box>

  );
};

export default Title;
