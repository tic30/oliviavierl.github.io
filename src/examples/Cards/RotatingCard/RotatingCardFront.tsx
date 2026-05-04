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

import type { ReactNode } from "react";

// @mui material components
import { Icon } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";
import type { ThemeColor } from "types/site";

interface RotatingCardFrontProps {
  color?: ThemeColor;
  image: string;
  icon?: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

function RotatingCardFront({ image, icon = "", title, description }: RotatingCardFrontProps) {
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

export default RotatingCardFront;
