import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { SxProps, Theme } from "@mui/material/styles";

import type { NavItem } from "./types";
import { navTriggerSx } from "./NavbarTrigger";

interface NavbarMobileDrawerProps {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
}

const itemTextProps = {
  primary: { sx: { textTransform: "capitalize", fontWeight: 400, fontSize: "0.875rem" } },
};

const childTextProps = {
  primary: { sx: { textTransform: "none" } },
  secondary: {
    sx: {
      mt: 0.25,
      color: "text.secondary",
      lineHeight: 1.4,
    },
  },
};

const mobileItemButtonSx: SxProps<Theme> = [
  navTriggerSx,
  {
    width: "100%",
    justifyContent: "flex-start",
    py: 1,
    borderRadius: 0,
  },
];

const itemIconSx = {
  minWidth: 0,
  mr: 1.5,
  color: "inherit",
  opacity: "inherit",
};

function NavbarMobileDrawer({ items, open, onClose }: NavbarMobileDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Box sx={{ zIndex: 1 }}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Paper
          square
          elevation={0}
          sx={{
            backgroundColor: "transparent",
          }}
        >
          <List sx={{ py: 0.5 }}>
            {items.map((item) => {
              if (item.children?.length) {
                const isOpen = expanded === item.name;
                return (
                  <Box key={item.name}>
                    <ListItemButton
                      onClick={() => setExpanded(isOpen ? null : item.name)}
                      sx={mobileItemButtonSx}
                    >
                      {item.icon ? <ListItemIcon sx={itemIconSx}>{item.icon}</ListItemIcon> : null}
                      <ListItemText primary={item.name} slotProps={itemTextProps} />
                      {isOpen ? (
                        <ExpandLessIcon color="inherit" />
                      ) : (
                        <ExpandMoreIcon color="inherit" />
                      )}
                    </ListItemButton>
                    <Collapse in={isOpen} unmountOnExit>
                      <List component="div" disablePadding>
                        {item.children.map((child) => (
                          <ListItemButton
                            key={child.name}
                            {...(child.route
                              ? { component: RouterLink, to: child.route }
                              : {
                                  component: "a",
                                  href: child.href,
                                  target: "_blank",
                                  rel: "noreferrer",
                                })}
                            onClick={onClose}
                            sx={{ pl: 4 }}
                          >
                            <ListItemText
                              primary={child.name}
                              secondary={child.description}
                              slotProps={childTextProps}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </Box>
                );
              }
              return (
                <ListItemButton
                  key={item.name}
                  {...(item.route
                    ? { component: RouterLink, to: item.route }
                    : { component: "a", href: item.href, target: "_blank", rel: "noreferrer" })}
                  onClick={onClose}
                  sx={mobileItemButtonSx}
                >
                  {item.icon ? <ListItemIcon sx={itemIconSx}>{item.icon}</ListItemIcon> : null}
                  <ListItemText primary={item.name} slotProps={itemTextProps} />
                </ListItemButton>
              );
            })}
          </List>
        </Paper>
      </Collapse>
    </Box>
  );
}

export default NavbarMobileDrawer;
