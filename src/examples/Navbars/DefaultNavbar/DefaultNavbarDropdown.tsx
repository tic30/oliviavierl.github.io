// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import { Collapse } from "ui/system";
import { Icon } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

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
}: any) {
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

// Typechecking props for the DefaultNavbarDropdown
DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
};

export default DefaultNavbarDropdown;
