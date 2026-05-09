import { useCallback, useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import favicon from "assets/img/header-logo.svg";
import { resumeUrl } from "../../constants";
import getShowcases from "showcases.routes";
import NavbarDropdown from "./NavbarDropdown";
import NavbarMobileDrawer from "./NavbarMobileDrawer";
import NavbarTrigger from "./NavbarTrigger";
import type { NavItem } from "./types";

interface NavbarProps {
  brand?: string;
  title?: string;
  sticky?: boolean;
}

function Navbar({ brand = "Yifan Li", title = "Product Designer", sticky = true }: NavbarProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const resumeButtonSx = {
    display: "block",
    borderRadius: "borderRadius.md",
    backgroundImage: "linear-gradient(195deg, rgb(251, 126, 0), rgb(216, 27, 96))",
    backgroundSize: "150%",
    backgroundPositionX: "25%",
    color: "background.default",
    fontWeight: 400,
    px: "1rem",
    "&:hover": { opacity: 1, backgroundColor: "transparent" },
  };
  const [desktopNavAnchorEl, setDesktopNavAnchorEl] = useState<HTMLDivElement | null>(null);
  const handleDesktopNavRef = useCallback((node: HTMLDivElement | null) => {
    setDesktopNavAnchorEl(node);
  }, []);

  const items: NavItem[] = [
    { name: "home", route: "/" },
    {
      name: "projects",
      icon: <DashboardIcon fontSize="small" />,
      children: getShowcases(theme).map((s) => ({
        name: s.name,
        description: s.description,
        route: s.route,
      })),
    },
    { name: "about", route: "/about" },
    { name: "resume", href: resumeUrl },
  ];

  // Hide the bar on scroll-down, reveal on scroll-up.
  const lastScrollTop = useRef(0);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      setHidden(st > lastScrollTop.current && st > 80);
      lastScrollTop.current = st <= 0 ? 0 : st;
    };
    document.addEventListener("scroll", onScroll, false);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  // Hover-driven dropdown for the projects menu, with a small grace period
  // so the mouse can travel from the trigger to the menu panel.
  const [menuOpen, setMenuOpen] = useState(false);
  const [openName, setOpenName] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const closeMenu = () => {
    cancelClose();
    setMenuOpen(false);
    setOpenName(null);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(closeMenu, 120);
  };
  const openMenu = (item: NavItem) => {
    cancelClose();
    setMenuOpen(true);
    setOpenName(item.name);
  };
  useEffect(() => () => cancelClose(), []);

  // Drawer for mobile (also auto-closes when crossing into desktop layout).
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    if (isDesktop) setDrawerOpen(false);
  }, [isDesktop]);

  return (
    <AppBar
      position={sticky ? "sticky" : "static"}
      elevation={0}
      sx={{
        minHeight: "6rem",
        top: hidden ? "-6rem" : 0,
        transition: "top 200ms ease",
        overflow: { xs: "hidden", lg: "visible" },
        backgroundColor: "rgba(var(--mui-palette-background-defaultChannel) / 0.85)",
        backdropFilter: "saturate(200%) blur(30px)",
        color: "text.primary",
        boxShadow: (theme) => theme.boxShadows.sm,
        borderBottomLeftRadius: (theme) => theme.borders.borderRadius.xl,
        borderBottomRightRadius: (theme) => theme.borders.borderRadius.xl,
        marginBlockEnd: "-0.5rem",
      }}
    >
      <Container
        id="navbar-base"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "6rem",
        }}
      >
        <Toolbar disableGutters sx={{ height: "100%", gap: 2 }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              "&:hover .navbar-tagline": { opacity: 1 },
            }}
          >
            <Box
              component="img"
              src={favicon}
              alt={brand}
              sx={{ width: 32, height: 32, mr: 1.5 }}
            />
            <Typography
              className="navbar-tagline"
              variant="button"
              sx={{ fontWeight: 700, opacity: 0, transition: "opacity 150ms ease-in" }}
            >
              {brand} / {title}
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop ? (
            <Box ref={handleDesktopNavRef} sx={{ position: "relative" }}>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                {items.map((item) =>
                  item.name === "resume" && item.href ? (
                    <Button
                      key={item.name}
                      component="a"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      sx={resumeButtonSx}
                      size="small"
                    >
                      {item.name}
                    </Button>
                  ) : (
                    <NavbarTrigger
                      key={item.name}
                      item={item}
                      onOpen={openMenu}
                      onScheduleClose={scheduleClose}
                    />
                  )
                )}
              </Stack>
              <NavbarDropdown
                anchorEl={desktopNavAnchorEl}
                open={menuOpen}
                item={items.find((it) => it.name === openName)}
                onCancelClose={cancelClose}
                onScheduleClose={scheduleClose}
                onClose={closeMenu}
              />
            </Box>
          ) : (
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Button
                component="a"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                sx={resumeButtonSx}
                size="small"
              >
                resume
              </Button>
              <IconButton
                onClick={() => setDrawerOpen((prev) => !prev)}
                aria-label={drawerOpen ? "close menu" : "open menu"}
                sx={{ color: "text.primary" }}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Stack>
          )}
        </Toolbar>
      </Container>
      <NavbarMobileDrawer
        items={items.filter((it) => it.name !== "resume")}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </AppBar>
  );
}

export default Navbar;
