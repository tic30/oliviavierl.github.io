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

// @mui material components
import { Card } from "ui/system";
import { Grid } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";
import type { ThemeColor } from "types/site";

interface TeamCardPosition {
  color?: ThemeColor;
  label: string;
}

interface HorizontalTeamCardProps {
  image: string;
  name: string;
  position: TeamCardPosition;
  description: string;
}

function HorizontalTeamCard({ image, name, position, description }: HorizontalTeamCardProps) {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <Box width="100%" pt={2} pb={1} px={2}>
            <Box
              component="img"
              src={image}
              alt={name}
              width="100%"
              borderRadius="md"
              shadow="lg"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <Box pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <Typography variant="h5">{name}</Typography>
            <Typography
              variant="h6"
              sx={{
                color:
                  position.color === "dark"
                    ? "text.primary"
                    : position.color === "light"
                      ? "text.secondary"
                      : position.color,
              }}
              mb={1}
            >
              {position.label}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default HorizontalTeamCard;
