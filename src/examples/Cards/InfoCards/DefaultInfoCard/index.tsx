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

// @mui material components
import { Icon } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";
import type { ReactNode } from "react";
import type { ThemeColor } from "types/site";

type InfoCardDirection = "left" | "right" | "center";

interface DefaultInfoCardProps {
  color?: ThemeColor;
  icon: ReactNode;
  title: string;
  description: string;
  direction?: InfoCardDirection;
  small?: boolean;
}

function DefaultInfoCard({
  color = "info",
  icon,
  title,
  description,
  direction = "left",
  small = false,
}: DefaultInfoCardProps) {
  return (
    <Box lineHeight={1} p={direction === "center" ? 2 : 0} textAlign={direction}>
      {typeof icon === "string" ? (
        <Typography
          sx={{ color: color === "light" ? "text.secondary" : color, fontWeight: 400 }}
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
        >
          {" "}
          <Icon>{icon}</Icon>{" "}
        </Typography>
      ) : (
        icon
      )}
      <Typography
        display="block"
        variant="h5"
        sx={{ fontWeight: 700, mt: direction === "center" ? 1 : 2, mb: 1.5 }}
      >
        {title}
      </Typography>
      <Typography
        display="block"
        variant={small ? "button" : "body2"}
        sx={{
          color: "text.primary",
          pr: direction === "left" ? 6 : 0,
          pl: direction === "right" ? 6 : 0,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default DefaultInfoCard;
