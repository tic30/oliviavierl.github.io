/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import { Card } from "ui/system";
import { Link as MuiLink } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";
import { Button } from "ui/system";

function CenteredBlogCard({ image, title, description, action }) {
  return (
    <Card>
      <Box sx={{ position: "relative", borderRadius: 3, mx: 2, mt: -3 }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ borderRadius: 3, width: "100%", position: "relative", zIndex: 1 }}
        />
        <Box
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </Box>
      <Box p={3} mt={-1} textAlign="center">
        <Typography sx={{ display: "inline", textTransform: "capitalize", fontWeight: 400 }} variant="h5">
          {title}
        </Typography>
        <Box mt={1} mb={3}>
          <Typography variant="body2" component="p" color="text">
            {description}
          </Typography>
        </Box>
        {action.type === "external" ? (
          <Button
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            size="small"
            color="primary"
          >
            {action.label}
          </Button>
        ) : (
          <Button
            component={Link}
            to={action.route}
            variant="contained"
            size="small"
            color="primary"
          >
            {action.label}
          </Button>
        )}
      </Box>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
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
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenteredBlogCard;
