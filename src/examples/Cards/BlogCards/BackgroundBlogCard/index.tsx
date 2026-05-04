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

// @mui material components
import { Card } from "ui/system";
import { Link as MuiLink } from "ui/system";
import { Icon } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";
import type { CardAction } from "types/site";

interface BackgroundBlogCardProps {
  image: string;
  title: string;
  description: string;
  action: CardAction;
}

function BackgroundBlogCard({ image, title, description, action }: BackgroundBlogCardProps) {
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

export default BackgroundBlogCard;
