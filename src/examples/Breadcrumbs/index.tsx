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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import { Breadcrumbs as MuiBreadcrumbs } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

interface BreadcrumbRoute {
  label: string;
  route?: string;
}

interface BreadcrumbsProps {
  routes: BreadcrumbRoute[];
  [key: string]: unknown;
}

function Breadcrumbs({ routes, ...rest }: BreadcrumbsProps) {
  return (
    <Box sx={{ bgcolor: "background.paper", borderRadius: 2, py: 1, px: 2, width: "100%" }}>
      <MuiBreadcrumbs {...rest}>
        {routes.map(({ label, route }) =>
          route ? (
            <Typography
              key={label}
              component={Link}
              to={route}
              variant="button"
              sx={{
                color: "text.primary",
                fontWeight: 400,
                opacity: 0.8,
                textTransform: "capitalize",
                "&:hover, &:focus": {
                  color: ({ palette: { info } }) => info.main,
                },
              }}
            >
              {label}
            </Typography>
          ) : (
            <Typography key={label} variant="button" sx={{ fontWeight: 400 }}>
              {label}
            </Typography>
          )
        )}
      </MuiBreadcrumbs>
    </Box>
  );
}

export default Breadcrumbs;
