/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import { Card } from "ui/system";
import { Icon } from "ui/system";
import { Link as MuiLink } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";
import type { AccentColor, CardAction } from "types/site";

interface TransparentBlogCardProps {
  image: string;
  title: string;
  description: string;
  action: CardAction & { color: AccentColor };
}

function TransparentBlogCard({ image, title, description, action }: TransparentBlogCardProps) {
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

  const imageTemplate = (
    <Box sx={{ position: "relative", borderRadius: 3 }}>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{ borderRadius: 3, boxShadow: 3, width: "100%", position: "relative", zIndex: 1 }}
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
  );

  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      {action.type === "internal" ? (
        <Box component={Link} to={action.route} sx={{ display: "block" }}>
          {imageTemplate}
        </Box>
      ) : (
        <MuiLink href={action.route} target="_blank" rel="noreferrer" sx={{ display: "block" }}>
          {imageTemplate}
        </MuiLink>
      )}
      <Box pt={2} pb={3}>
        {action.type === "internal" ? (
          <Box component={Link} to={action.route} sx={cardActionStyles}>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          </Box>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer" sx={cardActionStyles}>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          </MuiLink>
        )}
        <Typography variant="body2" component="p" color="text" mb={3}>
          {description}
        </Typography>
        {action.type === "internal" ? (
          <Typography
            component={Link}
            to={action.route}
            variant="body2"
            sx={{
              ...cardActionStyles,
              color: action.color || "text.primary",
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
              color: action.color || "text.primary",
              textTransform: "capitalize",
              fontWeight: 400,
            }}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </Typography>
        )}
      </Box>
    </Card>
  );
}

export default TransparentBlogCard;
