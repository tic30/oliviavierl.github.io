import type { MouseEvent } from "react";
import { Link as RouterLink } from "react-router-dom";

import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";

import type { NavItem } from "./types";

interface NavbarTriggerProps {
  item: NavItem;
  onOpen: (event: MouseEvent<HTMLElement>, item: NavItem) => void;
  onScheduleClose: () => void;
}

const linkSx = {
  color: "text.primary",
  textTransform: "lowercase" as const,
  fontWeight: 600,
  px: 1.5,
  opacity: 0.7,
  "&:hover": { opacity: 1, backgroundColor: "transparent" },
};

function NavbarTrigger({ item, onOpen, onScheduleClose }: NavbarTriggerProps) {
  if (item.children) {
    return (
      <Button
        onMouseEnter={(e) => onOpen(e, item)}
        onMouseLeave={onScheduleClose}
        endIcon={<Icon>keyboard_arrow_down</Icon>}
        sx={linkSx}
      >
        {item.name}
      </Button>
    );
  }
  if (item.route) {
    return (
      <Button component={RouterLink} to={item.route} sx={linkSx}>
        {item.name}
      </Button>
    );
  }
  return (
    <Button component="a" href={item.href} target="_blank" rel="noreferrer" sx={linkSx}>
      {item.name}
    </Button>
  );
}

export default NavbarTrigger;
