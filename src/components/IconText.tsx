import React from "react";
import { Box, BoxProps } from "@mui/material";
import Text from "./Text";

interface Props {
  children: React.ReactNode;
  iconFileName: string;
  sx?: BoxProps['sx'];
  sizeIcon?: number
  altIcon: string
}

const IconText = ({ children, iconFileName, sizeIcon, altIcon, ...sx }: Props) => {
  return (

    <Box display="flex" flexWrap="nowrap" alignItems="center" justifyContent="center"  {...sx}>
      <Box alt={altIcon} component="img" src={`/static/icon/${iconFileName}`} width={ sizeIcon ? `${sizeIcon}px` : '15px' } height={sizeIcon ? `${sizeIcon}px` : '15px'} mr={1} />
      <Text body2>{children}</Text>
    </Box>

  );
};

export default IconText;
