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
import { Card } from "base-ui";
import { Link as MuiLink } from "base-ui";
import { Icon } from "base-ui";

// Material Kit 2 React components
import { Box } from "base-ui";
import { Typography } from "base-ui";

function BackgroundBlogCard({ image, title, description, action }) {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",

    "& .material-icons, .material-icons-round,": {
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
      {
        transform: `translateX(6px)`,
      },
  };

  return (
    <Card
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <Box p={3}>
        <Box minHeight="20.625rem" my="auto" py={3}>
          <Typography
            variant="h2"
            sx={({ breakpoints, typography: { size } }) => ({
              color: "common.white",
              mb: 1,
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "common.white", my: 3 }}>
            {description}
          </Typography>
          {action.type === "internal" ? (
            <Typography
              component={Link}
              to={action.route}
              variant="body2"
              sx={{
                ...cardActionStyles,
                color: "common.white",
                textTransform: "capitalize",
                fontWeight: 400,
              }}
            >
              {action.label}
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </Typography>
          ) : (
            <Typography
              component={MuiLink}
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              sx={{
                ...cardActionStyles,
                color: "common.white",
                textTransform: "capitalize",
                fontWeight: 400,
              }}
            >
              {action.label}
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </Typography>
          )}
        </Box>
      </Box>
    </Card>
  );
}

// Typechecking props for the BackgroundBlogCard
BackgroundBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default BackgroundBlogCard;
