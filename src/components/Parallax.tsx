import type { HTMLAttributes, ReactNode } from "react";
import { Box } from "ui/system";
import type { StyleObject } from "types/site";

const parallaxLayer = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

interface ParallaxProps extends HTMLAttributes<HTMLDivElement> {
  bgImage: string;
  bgImageSx?: StyleObject;
  sx?: StyleObject;
  children?: ReactNode;
}

const Parallax = ({
  bgImage,
  bgImageSx = {},
  sx = {},
  children = null,
  ...props
}: ParallaxProps) => (
  <Box
    sx={{
      perspective: "1px",
      height: "100vh",
      width: "100%",
      overflowX: "hidden",
      overflowY: "auto",
      ...sx,
    }}
    {...props}
  >
    <Box
      sx={{
        ...parallaxLayer,
        transform: "translateZ(-1px) scale(2)",
        ...bgImageSx,
      }}
    >
      <Box component="img" src={bgImage} alt="background" width="100%" />
    </Box>
    <Box
      sx={{
        ...parallaxLayer,
        transform: "translateZ(0)",
      }}
    >
      {children}
    </Box>
  </Box>
);

export default Parallax;
