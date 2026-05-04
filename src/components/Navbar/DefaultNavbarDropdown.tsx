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

export const linkComponent = (href: string) => ({
  component: "a",
  href,
  target: "_blank",
  rel: "noreferrer",
});

export const routeComponent = (route: string) => ({
  component: Link,
  to: route,
});

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
  return (
    <>
      <Box
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={light ? "white" : "dark"}
        opacity={light ? 1 : 0.6}
        sx={{
          cursor: "pointer",
          userSelect: "none",
          "&:hover": {
            opacity: 1,
          },
        }}
        {...(route && routeComponent(route))}
        {...(href && linkComponent(href))}
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
          fontWeight="regular"
          textTransform="capitalize"
          color={light ? "white" : "dark"}
          sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color={light ? "white" : "dark"} ml="auto">
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
