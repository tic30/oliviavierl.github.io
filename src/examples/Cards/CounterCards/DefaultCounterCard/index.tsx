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

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";
import type { ThemeColor } from "types/site";

interface DefaultCounterCardProps {
  color?: ThemeColor;
  count: number;
  title?: string;
  description?: string;
}

function DefaultCounterCard({
  color = "info",
  count,
  title = "",
  description = "",
}: DefaultCounterCardProps) {
  return (
    <Box p={2} textAlign="center" lineHeight={1}>
      <Typography
        variant="h1"
        sx={{ color: color === "light" ? "text.secondary" : color, fontWeight: 700 }}
      >
        {count}
      </Typography>
      {title && (
        <Typography variant="h5" mt={2} mb={1}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body2" color="text">
          {description}
        </Typography>
      )}
    </Box>
  );
}

export default DefaultCounterCard;
