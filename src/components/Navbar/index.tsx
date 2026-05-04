/* eslint-disable no-param-reassign */
import { Fragment, useState, useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Icon, Popper, Grow, Grid, Divider, Link as MuiLink } from "ui/system";
import { alpha } from "ui/system";

import favicon from "assets/img/header-logo.svg";
import slash from "assets/img/slash.svg";
import breakpoints from "assets/theme/base/breakpoints";

import defaultRoutes from "routes";
import { Typography } from "ui/system";
import { Button } from "ui/system";

// Material Kit 2 React example components
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";
import DefaultNavbarDropdown, { linkComponent, routeComponent } from "./DefaultNavbarDropdown";
import DefaultNavbarMobile from "./DefaultNavbarMobile";
import type { MaybeCardAction, NavigationRoute } from "types/site";

interface DefaultNavbarProps {
  brand?: string;
  title?: string;
  routes?: NavigationRoute[];
  transparent?: boolean;
  light?: boolean;
  action?: MaybeCardAction;
  sticky?: boolean;
  center?: boolean;
}

function DefaultNavbar({
  brand = "Yifan Li",
  title = "Product Designer",
  routes = defaultRoutes,
  transparent = false,
  light = false,
  action = false,
  sticky = false,
  center = false,
}: DefaultNavbarProps) {
  const [dropdown, setDropdown] = useState<HTMLElement | null>(null);
  const [dropdownEl, setDropdownEl] = useState<HTMLElement | null>(null);
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState<HTMLElement | null>(null);
  const [nestedDropdownEl, setNestedDropdownEl] = useState<HTMLElement | null>(null);
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const arrowRef = useRef<HTMLSpanElement | null>(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const lastScrollTop = useRef(0);
  const [scrolled, setScrolled] = useState(false);

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

    const scrollListener = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop.current) {
        // downscroll code
        setScrolled(true);
      } else {
        // upscroll code
        setScrolled(false);
      }
      lastScrollTop.current = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };
    document.addEventListener("scroll", scrollListener, false);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", displayMobileNavbar);
      document.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const renderNavbarItems = routes.map(({ name, icon, href, route, collapse }) => (
    <DefaultNavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      collapse={Boolean(collapse)}
      onMouseEnter={(event: MouseEvent<HTMLElement>) => {
        const currentTarget = event.currentTarget as HTMLElement;
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
  const renderRoutes = routes.map(({ name, collapse, columns, rowsPerColumn }) => {
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
                      sx={{
                        fontWeight: 700,
                        textTransform: "capitalize",
                        py: 1,
                        px: 0.5,
                        mt: index !== 0 ? 2 : 0,
                      }}
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
                        display="block"
                        variant="button"
                        sx={({ palette: { grey } }) => ({
                          minWidth: "11.25rem",
                          color: "text.primary",
                          textTransform: "capitalize",
                          fontWeight: 400,
                          py: 0.625,
                          px: 2,
                          borderRadius: 1,
                          cursor: "pointer",
                          transition: "all 300ms linear",
                          "&:hover": {
                            backgroundColor: grey[200],
                            color: "text.primary",
                          },
                        })}
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
      template = collapse.map((item) => (
        <Typography
          key={item.name}
          {...(item.route ? routeComponent(item.route) : item.href ? linkComponent(item.href) : {})}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          variant="button"
          sx={({ palette: { grey } }) => ({
            minWidth: item.description ? "14rem" : "12rem",
            color: "text.primary",
            textTransform: "capitalize",
            fontWeight: item.description ? 700 : 400,
            py: item.description ? 1 : 0.625,
            px: 2,
            borderRadius: 1,
            cursor: "pointer",
            transition: "all 300ms linear",
            "&:hover": {
              backgroundColor: grey[200],
              color: "text.primary",
              "& *": {
                color: "text.primary",
              },
            },
          })}
          onMouseEnter={(event: MouseEvent<HTMLElement>) => {
            const currentTarget = event.currentTarget as HTMLElement;
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
                sx={{
                  color: "text.secondary",
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
            <Icon fontSize="small" sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}>
              keyboard_arrow_right
            </Icon>
          )}
        </Typography>
      ));
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef.current,
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
        <Grow {...TransitionProps} style={{ transformOrigin: "left top" }}>
          <Box sx={{ borderRadius: 3, backgroundColor: "common.white" }}>
            <Typography variant="h1" sx={{ color: "text.primary" }}>
              <Icon ref={arrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </Typography>
            <Box sx={{ boxShadow: 3, borderRadius: 3, p: 2, mt: 2 }}>{renderRoutes}</Box>
          </Box>
        </Grow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = routes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
          let template: ReactNode = null;

          if (parentName === nestedDropdownName) {
            template =
              nestedCollapse &&
              nestedCollapse.map((item) => (
                <Typography
                  key={item.name}
                  {...(item.route
                    ? routeComponent(item.route)
                    : item.href
                      ? linkComponent(item.href)
                      : {})}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  variant="button"
                  sx={({ palette: { grey } }) => ({
                    minWidth: item.description ? "14rem" : "12rem",
                    color: "text.primary",
                    textTransform: "capitalize",
                    fontWeight: item.description ? 700 : 400,
                    py: item.description ? 1 : 0.625,
                    px: 2,
                    borderRadius: 1,
                    cursor: "pointer",
                    transition: "all 300ms linear",
                    "&:hover": {
                      backgroundColor: grey[200],
                      color: "text.primary",
                      "& *": {
                        color: "text.primary",
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
                          transition: "all 300ms linear",
                          color: "text.secondary",
                          fontWeight: 400,
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
              ));
          }

          return template;
        })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
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
        <Grow {...TransitionProps} style={{ transformOrigin: "left top" }}>
          <Box sx={{ ml: 2.5, mt: -2.5, borderRadius: 3, backgroundColor: "common.white" }}>
            <Box sx={{ boxShadow: 3, borderRadius: 3, py: 1.5, px: 1, mt: 2 }}>
              {renderNestedRoutes}
            </Box>
          </Box>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Box
      sx={({ palette }) => ({
        color: light ? "common.white" : "text.primary",
        backgroundColor: transparent ? "transparent" : alpha(palette.common.white, 0.8),
        backdropFilter: transparent ? "none" : "saturate(200%) blur(30px)",
        borderBottomLeftRadius: borders.borderRadius.xl,
        borderBottomRightRadius: borders.borderRadius.xl,
        ...(sticky
          ? { position: "sticky", top: scrolled ? "-10rem" : 0, zIndex: 10, transition: "top 0.2s" }
          : {}),
        ...(transparent ? {} : { boxShadow: boxShadows.md }),
      })}
    >
      <Container>
        <Box py={2} px={1}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box
              component={Link}
              to="/"
              lineHeight={1}
              py={transparent ? 1.5 : 0.75}
              display="flex"
              alignItems="center"
              sx={{
                "&:hover > div": {
                  opacity: [0, 1],
                },
              }}
            >
              <Box component="img" src={favicon} alt="logo" width="37.5px" mr={2} />
              <Box
                sx={{
                  opacity: 0,
                  transition: "opacity 150ms ease-in",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="button"
                  sx={{ fontWeight: 700, color: light ? "common.white" : "text.primary" }}
                >
                  {brand}
                </Typography>
                <Box component="img" src={slash} alt="/" height="1rem" sx={{ mx: [0, 2] }} />
                <Typography
                  variant="button"
                  sx={{ fontWeight: 700, color: light ? "common.white" : "text.primary" }}
                >
                  {title}
                </Typography>
              </Box>
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
                    color="primary"
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
                    color="primary"
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
              <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: transparent ? "common.white" : "transparent",
              boxShadow: transparent ? 3 : "none",
              borderRadius: 3,
              px: transparent ? 2 : 0,
            }}
          >
            {mobileView && (
              <DefaultNavbarMobile routes={routes} open={mobileNavbar} onClose={openMobileNavbar} />
            )}
          </Box>
        </Box>
        {dropdownMenu}
        {nestedDropdownMenu}
      </Container>
    </Box>
  );
}

export default DefaultNavbar;
