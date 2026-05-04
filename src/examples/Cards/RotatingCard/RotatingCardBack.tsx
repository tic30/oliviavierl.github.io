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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import { Link as MuiLink } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";
import { Button } from "ui/system";
import type { MaybeCardAction, ThemeColor } from "types/site";

interface RotatingCardBackProps {
  color?: ThemeColor;
  image: string;
  title: ReactNode;
  description: ReactNode;
  action?: MaybeCardAction;
}

function RotatingCard({ image, title, description, action = false }: RotatingCardBackProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        borderRadius: 3,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 5,
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      <Box pt={12} pb={2} px={2} textAlign="center" lineHeight={1}>
        <Typography variant="h3" sx={{ color: "common.white" }} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "common.white", opacity: 0.8 }}>
          {description}
        </Typography>
        {action && (
          <Box width="50%" mt={4} mb={2} mx="auto">
            {action.type === "external" ? (
              <Button
                component={MuiLink}
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                sx={{ color: "common.white" }}
                size="small"
                fullWidth
              >
                {action.label}
              </Button>
            ) : (
              <Button
                component={Link}
                to={action.route}
                variant="contained"
                sx={{ color: "common.white" }}
                size="small"
                fullWidth
              >
                {action.label}
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default RotatingCard;
