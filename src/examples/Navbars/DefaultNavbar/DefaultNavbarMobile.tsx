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

import { useState } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import { Collapse } from "ui/system";
import { Link as MuiLink } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

// Material Kit 2 React example components
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";

function DefaultNavbarMobile({ routes, open }) {
  const [collapse, setCollapse] = useState<string | null>(null);

  const handleSetCollapse = (name) => (collapse === name ? setCollapse(null) : setCollapse(name));

  const renderNavbarItems = routes.map(
    ({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse }) => (
      <DefaultNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        collapseStatus={name === collapse}
        light={false}
        onClick={() => handleSetCollapse(name)}
        href={href}
        route={route}
        collapse={Boolean(navCollapse)}
      >
        <Box sx={{ height: "15rem", maxHeight: "15rem", overflowY: "scroll" }}>
          {routeCollapses &&
            routeCollapses.map((item) => (
              <Box key={item.name} px={2}>
                {item.collapse ? (
                  <>
                    <Typography
                      display="block"
                      variant="button"
                      sx={{ fontWeight: 700, textTransform: "capitalize", py: 1, px: 0.5 }}
                    >
                      {item.name}
                    </Typography>
                    {item.collapse.map((el) => (
                      <Typography
                        key={el.name}
                        component={el.route ? Link : MuiLink}
                        {...(el.route
                          ? { to: el.route }
                          : el.href
                            ? { href: el.href, target: "_blank", rel: "noreferrer" }
                            : {})}
                        display="block"
                        variant="button"
                        sx={{
                          color: "text.primary",
                          fontWeight: 400,
                          minWidth: "11.25rem",
                          textTransform: "capitalize",
                          py: 0.625,
                          px: 2,
                          borderRadius: 2,
                          cursor: "pointer",
                          transition: "all 300ms linear",
                          "&:hover": {
                            backgroundColor: "grey.200",
                            color: "text.primary",
                          },
                        }}
                      >
                        {el.name}
                      </Typography>
                    ))}
                  </>
                ) : (
                  <Box
                    key={item.key}
                    display="block"
                    component={item.route ? Link : MuiLink}
                    {...(item.route
                      ? { to: item.route }
                      : item.href
                        ? { href: item.href, target: "_blank", rel: "noreferrer" }
                        : {})}
                    sx={{
                      borderRadius: 2,
                      cursor: "pointer",
                      transition: "all 300ms linear",
                      py: 1,
                      px: 1.625,
                      "&:hover": {
                        backgroundColor: "grey.200",
                        color: "text.primary",
                        "& *": {
                          color: "text.primary",
                        },
                      },
                    }}
                  >
                    <Typography
                      display="block"
                      variant="button"
                      sx={{ fontWeight: 700, textTransform: "capitalize" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      display="block"
                      variant="button"
                      sx={{
                        color: "text.primary",
                        fontWeight: 400,
                        transition: "all 300ms linear",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
        </Box>
      </DefaultNavbarDropdown>
    )
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <Box width="calc(100% + 1.625rem)" my={2} ml={-2}>
        {renderNavbarItems}
      </Box>
    </Collapse>
  );
}

// Typechecking props for the DefaultNavbarMobile
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
