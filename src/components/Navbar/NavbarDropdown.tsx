import { Link as RouterLink } from "react-router-dom";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";

import type { NavItem } from "./types";

interface NavbarDropdownProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  item: NavItem | undefined;
  onCancelClose: () => void;
  onScheduleClose: () => void;
  onClose: () => void;
}

function NavbarDropdown({
  anchorEl,
  open,
  item,
  onCancelClose,
  onScheduleClose,
  onClose,
}: NavbarDropdownProps) {
  if (!item?.children?.length) return null;

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom-end"
      disablePortal
      modifiers={[
        {
          name: "offset",
          options: { offset: [0, 8] },
        },
      ]}
      onMouseEnter={onCancelClose}
      onMouseLeave={onScheduleClose}
      sx={{
        zIndex: 1,
      }}
    >
      <Paper
        sx={{
          minWidth: 220,
          borderRadius: "borderRadius.md",
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
        <List dense disablePadding>
          {item.children.map((child) => (
            <ListItemButton
              key={child.name}
              {...(child.route
                ? { component: RouterLink, to: child.route }
                : { component: "a", href: child.href, target: "_blank", rel: "noreferrer" })}
              onClick={onClose}
              sx={{
                py: 1.25,
                px: 2,
                "&:hover": { backgroundColor: "grey.100", color: "background.default" },
              }}
            >
              <ListItemText
                primary={child.name}
                secondary={child.description}
                slotProps={{
                  primary: { sx: { fontWeight: 500, textTransform: "capitalize" } },
                  secondary: {
                    sx: {
                      mt: 0.25,
                      color: "text.secondary",
                      lineHeight: 1.4,
                    },
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </Popper>
  );
}

export default NavbarDropdown;
