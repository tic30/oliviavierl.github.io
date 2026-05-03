import PropTypes from "prop-types";
import { Box } from "@mui/material";

const parallaxLayer = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const Parallax = ({ bgImage, bgImageSx, sx, children, ...props }) => (
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

Parallax.defaultProps = {
  bgImageSx: {},
  sx: {},
  children: false,
};

Parallax.propTypes = {
  bgImage: PropTypes.string.isRequired,
  bgImageSx: PropTypes.objectOf(PropTypes.any),
  sx: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
};

export default Parallax;
