/* eslint-disable no-param-reassign */
import { Fragment, useState, useEffect, type ReactNode } from "react";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import { Container } from "ui/system";
import { Icon } from "ui/system";
import { Popper } from "ui/system";
import { Grow } from "ui/system";
import { Grid } from "ui/system";
import { Divider } from "ui/system";
import { Link as MuiLink } from "ui/system";
import { useTheme } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";
import { Button } from "ui/system";

// Material Kit 2 React example components
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Material Kit 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

import getDefaultRoutes from "routes";

import favicon from "assets/img/logo.svg";
import type { MaybeCardAction, NavigationRoute } from "types/site";

interface DefaultNavbarProps {
  brand?: string;
  routes?: NavigationRoute[];
  transparent?: boolean;
  light?: boolean;
  action?: MaybeCardAction;
  sticky?: boolean;
  relative?: boolean;
  center?: boolean;
}

function DefaultNavbar({
  brand = "Yifan Li",
  routes,
  transparent = false,
  light = false,
  action = false,
  sticky = false,
  relative = false,
  center = false,
}: DefaultNavbarProps) {
  const theme = useTheme();
  const resolvedRoutes = routes ?? getDefaultRoutes(theme);
  const [dropdown, setDropdown] = useState<HTMLElement | null>(null);
  const [dropdownEl, setDropdownEl] = useState<HTMLElement | null>(null);
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState<HTMLElement | null>(null);
  const [nestedDropdownEl, setNestedDropdownEl] = useState<HTMLElement | null>(null);
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const renderNavbarItems = resolvedRoutes.map(({ name, icon, href, route, collapse }) => (
    <DefaultNavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      collapse={Boolean(collapse)}
      onMouseEnter={({ currentTarget }) => {
        if (collapse) {
          setDropdown(currentTarget);
          setDropdownEl(currentTarget);
          setDropdownName(name);
        }
      }}
      onMouseLeave={() => collapse && setDropdown(null)}
      light={light}
    />
  ));

  // Render the routes on the dropdown menu
  const renderRoutes = resolvedRoutes.map(({ name, collapse, columns, rowsPerColumn }) => {
    let template: ReactNode = null;

    // Render the dropdown menu that should be display as columns
    if (collapse && columns && name === dropdownName) {
      const itemsPerColumn = Math.max(rowsPerColumn ?? collapse.length, 1);
      const calculateColumns = collapse.reduce<NavigationRoute[][]>((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / itemsPerColumn);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      template = (
        <Grid key={name} container spacing={3} py={1} px={1.5}>
          {calculateColumns.map((cols, key) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid key={gridKey} item xs={12 / columns} sx={{ position: "relative" }}>
                {cols.map((col, index) => (
                  <Fragment key={col.name}>
                    <Typography
                      display="block"
                      variant="button"
                      sx={{ fontWeight: 700, textTransform: "capitalize" }}
                      py={1}
                      px={0.5}
                      mt={index !== 0 ? 2 : 0}
                    >
                      {col.name}
                    </Typography>
                    {col.collapse?.map((item) => (
                      <Typography
                        key={item.name}
                        component={item.route ? Link : MuiLink}
                        {...(item.route
                          ? { to: item.route }
                          : item.href
                            ? { href: item.href, target: "_blank", rel: "noreferrer" }
                            : {})}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        sx={{
                          color: "text.primary",
                          fontWeight: 400,
                          textTransform: "capitalize",
                          borderRadius: 2,
                          cursor: "pointer",
                          transition: "all 300ms linear",
                          "&:hover": {
                            backgroundColor: "grey.200",
                            color: "text.primary",
                          },
                        }}
                        py={0.625}
                        px={2}
                      >
                        {item.name}
                      </Typography>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "-4px",
                      transform: "translateY(-45%)",
                      height: "90%",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );

      // Render the dropdown menu that should be display as list items
    } else if (collapse && name === dropdownName) {
      template = collapse.map((item) => {
        const linkComponent = {
          component: MuiLink,
          href: item.href,
          target: "_blank",
          rel: "noreferrer",
        };

        const routeComponent = {
          component: Link,
          to: item.route,
        };

        return (
          <Typography
            key={item.name}
            {...(item.route ? routeComponent : linkComponent)}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            variant="button"
            textTransform="capitalize"
            py={item.description ? 1 : 0.625}
            px={2}
            sx={{
              minWidth: item.description ? "14rem" : "12rem",
              color: "text.primary",
              fontWeight: item.description ? 700 : 400,
              borderRadius: 2,
              cursor: "pointer",
              transition: "all 300ms linear",
              "&:hover": {
                backgroundColor: "grey.200",
                color: "text.primary",
                "& *": {
                  color: "text.primary",
                },
              },
            }}
            onMouseEnter={({ currentTarget }) => {
              if (item.dropdown) {
                setNestedDropdown(currentTarget);
                setNestedDropdownEl(currentTarget);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.dropdown) {
                setNestedDropdown(null);
              }
            }}
          >
            {item.description ? (
              <Box>
                {item.name}
                <Typography
                  display="block"
                  variant="button"
                  sx={{ color: "text.primary", fontWeight: 400, transition: "all 300ms linear" }}
                >
                  {item.description}
                </Typography>
              </Box>
            ) : (
              item.name
            )}
            {item.collapse && (
              <Icon
                fontSize="small"
                sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
              >
                keyboard_arrow_right
              </Icon>
            )}
          </Typography>
        );
      });
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Box sx={{ transformOrigin: "left top", bgcolor: "common.white" }}>
            <Typography variant="h1" sx={{ color: "text.primary" }}>
              <Icon ref={setArrowRef} sx={{ mt: -3, color: "text.primary" }}>
                arrow_drop_up
              </Icon>
            </Typography>
            <Box sx={{ boxShadow: 3, borderRadius: 3 }} p={2} mt={2}>
              {renderRoutes}
            </Box>
          </Box>
        </Grow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = resolvedRoutes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
          let template: ReactNode = null;

          if (parentName === nestedDropdownName) {
            template =
              nestedCollapse &&
              nestedCollapse.map((item) => {
                const linkComponent = {
                  component: MuiLink,
                  href: item.href,
                  target: "_blank",
                  rel: "noreferrer",
                };

                const routeComponent = {
                  component: Link,
                  to: item.route,
                };

                return (
                  <Typography
                    key={item.name}
                    {...(item.route ? routeComponent : linkComponent)}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    variant="button"
                    textTransform="capitalize"
                    minWidth={item.description ? "14rem" : "12rem"}
                    color={item.description ? "dark" : "text"}
                    fontWeight={item.description ? "bold" : "regular"}
                    py={item.description ? 1 : 0.625}
                    px={2}
                    sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",

                      "&:hover": {
                        backgroundColor: grey[200],
                        color: dark.main,

                        "& *": {
                          color: dark.main,
                        },
                      },
                    })}
                  >
                    {item.description ? (
                      <Box>
                        {item.name}
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
                    ) : (
                      item.name
                    )}
                    {item.collapse && (
                      <Icon
                        fontSize="small"
                        sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
                      >
                        keyboard_arrow_right
                      </Icon>
                    )}
                  </Typography>
                );
              });
          }

          return template;
        })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Box sx={{ ml: 2.5, mt: -2.5, borderRadius: 3 }}>
            <Box sx={{ boxShadow: 3, borderRadius: 3 }} py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </Box>
          </Box>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      <Box
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? "100%" : "calc(100% - 48px)"}
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={{
          borderRadius: 4,
          boxShadow: transparent ? "none" : 3,
          color: light ? "common.white" : "text.primary",
          backgroundColor: transparent ? "transparent" : "rgba(255,255,255,1)",
          backdropFilter: transparent ? "none" : "saturate(200%) blur(30px)",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            component={Link}
            to="/"
            lineHeight={1}
            py={transparent ? 1.5 : 0.75}
            pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
            display="flex"
            alignItems="center"
          >
            <Box component="img" src={favicon} alt="logo" width="37.5px" mr={2} />
            <Typography
              variant="button"
              sx={{ fontWeight: 700, color: light ? "common.white" : "text.primary" }}
            >
              {brand}
            </Typography>
          </Box>
          <Box
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            ml="auto"
            mr={center ? "auto" : 0}
          >
            {renderNavbarItems}
          </Box>
          <Box ml={{ xs: "auto", lg: 0 }}>
            {action &&
              (action.type === "internal" ? (
                <Button
                  component={Link}
                  to={action.route}
                  variant="contained"
                  color={
                    action.color === "info" ||
                    action.color === "primary" ||
                    action.color === "secondary" ||
                    action.color === "success" ||
                    action.color === "warning" ||
                    action.color === "error"
                      ? action.color
                      : "primary"
                  }
                  size="small"
                >
                  {action.label}
                </Button>
              ) : (
                <Button
                  component="a"
                  href={action.route}
                  target="_blank"
                  rel="noreferrer"
                  variant="contained"
                  color={
                    action.color === "info" ||
                    action.color === "primary" ||
                    action.color === "secondary" ||
                    action.color === "success" ||
                    action.color === "warning" ||
                    action.color === "error"
                      ? action.color
                      : "primary"
                  }
                  size="small"
                >
                  {action.label}
                </Button>
              ))}
          </Box>
          <Box
            display={{ xs: "inline-block", lg: "none" }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            color={transparent ? "white" : "inherit"}
            sx={{ cursor: "pointer" }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="medium">{mobileNavbar ? "close" : "menu"}</Icon>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: transparent ? "common.white" : "transparent",
            boxShadow: transparent ? 3 : "none",
            borderRadius: 4,
          }}
          px={transparent ? 2 : 0}
        >
          {mobileView && <DefaultNavbarMobile routes={resolvedRoutes} open={mobileNavbar} />}
        </Box>
      </Box>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
}

export default DefaultNavbar;
