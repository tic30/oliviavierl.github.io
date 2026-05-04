/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import { Icon } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

function RotatingCardFront({ image, icon, title, description }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 3,
        boxShadow: 3,
        width: "100%",
        position: "relative",
        zIndex: 2,
        backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
      }}
    >
      <Box py={12} px={3} textAlign="center" lineHeight={1}>
        {icon && (
          <Typography variant="h2" sx={{ color: "common.white", my: 2 }}>
            {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
          </Typography>
        )}
        <Typography variant="h3" sx={{ color: "common.white" }} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "common.white", opacity: 0.8 }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
  color: "info",
  icon: "",
};

// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

export default RotatingCardFront;
