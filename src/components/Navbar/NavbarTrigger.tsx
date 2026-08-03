import { Link as RouterLink, useLocation } from "react-router-dom";

import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import type { NavItem } from "./types";

interface NavbarTriggerProps {
  item: NavItem;
  onOpen: (item: NavItem) => void;
  onScheduleClose: () => void;
}

export const navTriggerSx = {
  color: "text.primary",
  textTransform: "capitalize",
  fontWeight: 400,
  fontSize: "0.875rem",
  opacity: 0.6,
  px: 1.5,
  "&:hover, &:focus": {
    opacity: 1,
  },
};

function NavbarTrigger({ item, onOpen, onScheduleClose }: NavbarTriggerProps) {
  const { pathname } = useLocation();
  const startIcon = item.icon;
  const isActive = item.route === pathname;
  const sx = isActive ? { ...navTriggerSx, opacity: 1 } : navTriggerSx;
  if (item.children) {
    return (
      <Button
        onMouseEnter={() => onOpen(item)}
        onMouseLeave={onScheduleClose}
        startIcon={startIcon}
        endIcon={<KeyboardArrowDownIcon />}
        sx={sx}
      >
        {item.name}
      </Button>
    );
  }
  if (item.route) {
    return (
      <Button component={RouterLink} to={item.route} startIcon={startIcon} sx={sx}>
        {item.name}
      </Button>
    );
  }
  return (
    <Button
      component="a"
      href={item.href}
      target="_blank"
      rel="noreferrer"
      startIcon={startIcon}
      sx={sx}
    >
      {item.name}
    </Button>
  );
}

export default NavbarTrigger;
