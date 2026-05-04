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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import { Icon } from "ui/system";
import { Link as MuiLink } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";
import type { ReactNode } from "react";
import type { AccentColor, MaybeCardAction, ThemeColor } from "types/site";

type FilledInfoCardVariant = "contained" | "gradient";

interface FilledInfoCardProps {
  variant?: FilledInfoCardVariant;
  color?: ThemeColor;
  icon: ReactNode;
  title: string;
  description: string;
  action?: MaybeCardAction;
}

function FilledInfoCard({
  variant = "contained",
  color = "info",
  icon,
  title,
  description,
  action = false,
}: FilledInfoCardProps) {
  const buttonStyles = {
    width: "max-content",
    display: "flex",
    alignItems: "center",

    "& .material-icons-round": {
      fontSize: "1.125rem",
      transform: `translateX(3px)`,
      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(6px)`,
    },
  };

  let iconColor: AccentColor = color;

  if (variant === "gradient" && color !== "light") {
    iconColor = "white";
  } else if (variant === "gradient" && color === "light") {
    iconColor = "dark";
  }

  const boxBgColor = variant === "contained" ? "grey.100" : color === "light" ? "grey.100" : color;
  const textColor = variant === "contained" || color === "light" ? "text.primary" : "common.white";

  return (
    <Box
      display={{ xs: "block", md: "flex" }}
      sx={{
        bgcolor: boxBgColor,
        borderRadius: 4,
        pt: 3.5,
        pb: 3,
        px: 3,
      }}
    >
      <Typography
        display="block"
        variant="h3"
        sx={{
          color: iconColor,
          ...(variant === "contained" && {
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }),
        }}
        mt={-0.625}
      >
        {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
      </Typography>
      <Box pt={{ xs: 3, md: 0 }} pl={{ xs: 0, md: 2 }} lineHeight={1}>
        <Typography display="block" variant="h5" sx={{ color: textColor, fontWeight: 700 }} mb={1}>
          {title}
        </Typography>
        <Typography display="block" variant="body2" sx={{ color: textColor }} mb={2}>
          {description}
        </Typography>
        {action && action.type === "external" ? (
          <Typography
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            sx={{
              ...buttonStyles,
              color: variant === "contained" ? textColor : "common.white",
              fontWeight: 400,
            }}
          >
            {action.label} <Icon sx={{ fontWeight: 700 }}>arrow_forward</Icon>
          </Typography>
        ) : null}
        {action && action.type === "internal" ? (
          <Typography
            component={Link}
            to={action.route}
            variant="body2"
            sx={{
              ...buttonStyles,
              color: variant === "contained" ? textColor : "common.white",
              fontWeight: 400,
            }}
          >
            {action.label} <Icon sx={{ fontWeight: 700 }}>arrow_forward</Icon>
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}

export default FilledInfoCard;
