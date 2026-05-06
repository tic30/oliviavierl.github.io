import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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

  const items: NavItem[] = [
    { name: "home", route: "/" },
    {
      name: "projects",
      children: getShowcases(theme).map((s) => ({ name: s.name, route: s.route })),
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
  // so the mouse can travel from the trigger to the menu Paper.
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
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
    setAnchor(null);
    setOpenName(null);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(closeMenu, 120);
  };
  const openMenu = (event: MouseEvent<HTMLElement>, item: NavItem) => {
    cancelClose();
    setAnchor(event.currentTarget);
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
        top: hidden ? "-6rem" : 0,
        transition: "top 200ms ease",
        backgroundColor: "rgba(var(--mui-palette-background-defaultChannel) / 0.85)",
        backdropFilter: "saturate(200%) blur(30px)",
        color: "text.primary",
        boxShadow: 1,
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
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
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              {items.map((item) => (
                <NavbarTrigger
                  key={item.name}
                  item={item}
                  onOpen={openMenu}
                  onScheduleClose={scheduleClose}
                />
              ))}
            </Stack>
          ) : (
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Button
                component="a"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "text.primary",
                  textTransform: "lowercase",
                  fontWeight: 600,
                  px: 1.5,
                  opacity: 0.7,
                  "&:hover": { opacity: 1, backgroundColor: "transparent" },
                }}
              >
                resume
              </Button>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                aria-label="open menu"
                sx={{ color: "text.primary" }}
              >
                <Icon>menu</Icon>
              </IconButton>
            </Stack>
          )}
        </Toolbar>
      </Container>

      <NavbarDropdown
        anchor={anchor}
        item={items.find((it) => it.name === openName)}
        onCancelClose={cancelClose}
        onScheduleClose={scheduleClose}
        onClose={closeMenu}
      />
      <NavbarMobileDrawer
        items={items.filter((it) => it.name !== "resume")}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </AppBar>
  );
}

export default Navbar;
