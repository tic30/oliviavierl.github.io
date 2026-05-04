import type { ReactNode } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import { Collapse } from "ui/system";
import { Icon } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

interface DefaultNavbarDropdownProps {
  name: string;
  icon?: ReactNode;
  children?: ReactNode;
  collapseStatus?: boolean;
  light?: boolean;
  href?: string;
  route?: string;
  collapse: boolean;
  [key: string]: unknown;
}

function DefaultNavbarDropdown({
  name,
  icon,
  children = null,
  collapseStatus = false,
  light = false,
  href = "",
  route = "",
  collapse = false,
  ...rest
}: DefaultNavbarDropdownProps) {
  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <>
      <Box
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        sx={{
          color: light ? "common.white" : "text.primary",
          opacity: light ? 1 : 0.6,
          cursor: "pointer",
          userSelect: "none",
        }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        {icon && (
          <Typography
            variant="body2"
            lineHeight={1}
            color="inherit"
            sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
          >
            {icon}
          </Typography>
        )}
        <Typography
          variant="button"
          textTransform="capitalize"
          sx={{ color: light ? "common.white" : "text.primary", fontWeight: 400, ml: 1, mr: 0.25 }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          ml="auto"
          sx={{ color: light ? "common.white" : "text.primary" }}
        >
          <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
            {collapse && "keyboard_arrow_down"}
          </Icon>
        </Typography>
      </Box>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

export default DefaultNavbarDropdown;
