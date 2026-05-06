import { Link as RouterLink } from "react-router-dom";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Popover from "@mui/material/Popover";

import type { NavItem } from "./types";

interface NavbarDropdownProps {
  anchor: HTMLElement | null;
  item: NavItem | undefined;
  onCancelClose: () => void;
  onScheduleClose: () => void;
  onClose: () => void;
}

function NavbarDropdown({
  anchor,
  item,
  onCancelClose,
  onScheduleClose,
  onClose,
}: NavbarDropdownProps) {
  const open = Boolean(anchor) && Boolean(item?.children?.length);
  return (
    <Popover
      anchorEl={anchor}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      disableAutoFocus
      disableEnforceFocus
      disableRestoreFocus
      disableScrollLock
      hideBackdrop
      sx={{ pointerEvents: "none" }}
      slotProps={{
        paper: {
          onMouseEnter: onCancelClose,
          onMouseLeave: onScheduleClose,
          sx: {
            pointerEvents: "auto",
            mt: 1,
            minWidth: 220,
            borderRadius: 2,
            boxShadow: 3,
            overflow: "hidden",
          },
        },
      }}
    >
      <List dense disablePadding>
        {item?.children?.map((child) => (
          <ListItemButton
            key={child.name}
            {...(child.route
              ? { component: RouterLink, to: child.route }
              : { component: "a", href: child.href, target: "_blank", rel: "noreferrer" })}
            onClick={onClose}
            sx={{
              py: 1.25,
              px: 2,
              "&:hover": { backgroundColor: "grey.100" },
            }}
          >
            <ListItemText
              primary={child.name}
              slotProps={{
                primary: { sx: { fontWeight: 500, textTransform: "capitalize" } },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Popover>
  );
}

export default NavbarDropdown;
