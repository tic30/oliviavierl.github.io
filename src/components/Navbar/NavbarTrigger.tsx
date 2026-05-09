import { Link as RouterLink } from "react-router-dom";

import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";

import type { NavItem } from "./types";
import type { SxProps } from "@mui/material/styles";

interface NavbarTriggerProps {
  item: NavItem;
  onOpen: (item: NavItem) => void;
  onScheduleClose: () => void;
}

const linkSx: SxProps = {
  color: "text.primary",
  textTransform: "capitalize" as const,
  fontWeight: 400,
  fontSize: "0.875rem",
  opacity: 0.6,
  px: 1.5,
  "&:hover": {
    opacity: 1,
    backgroundColor: "transparent",
  },
};

function NavbarTrigger({ item, onOpen, onScheduleClose }: NavbarTriggerProps) {
  const startIcon = item.icon ? (
    <Icon sx={{ width: "1rem", height: "1rem" }}>{item.icon}</Icon>
  ) : undefined;
  if (item.children) {
    return (
      <Button
        onMouseEnter={() => onOpen(item)}
        onMouseLeave={onScheduleClose}
        startIcon={startIcon}
        endIcon={<Icon>keyboard_arrow_down</Icon>}
        sx={linkSx}
      >
        {item.name}
      </Button>
    );
  }
  if (item.route) {
    return (
      <Button component={RouterLink} to={item.route} startIcon={startIcon} sx={linkSx}>
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
      sx={linkSx}
    >
      {item.name}
    </Button>
  );
}

export default NavbarTrigger;
