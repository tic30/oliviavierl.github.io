import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

import type { NavItem } from "./types";

interface NavbarMobileDrawerProps {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
}

const itemTextProps = {
  primary: { sx: { textTransform: "lowercase" as const, fontWeight: 600 } },
};

const childTextProps = {
  primary: { sx: { textTransform: "capitalize" as const } },
  secondary: {
    sx: {
      mt: 0.25,
      color: "text.secondary",
      lineHeight: 1.4,
    },
  },
};

function NavbarMobileDrawer({ items, open, onClose }: NavbarMobileDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Box sx={{ zIndex: 0 }}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Paper
          square
          elevation={0}
          sx={{
            backgroundColor: "background.paper",
            boxShadow: (theme) => theme.boxShadows.sm,
          }}
        >
          <List sx={{ py: 0.5 }}>
            {items.map((item) => {
              if (item.children?.length) {
                const isOpen = expanded === item.name;
                return (
                  <Box key={item.name}>
                    <ListItemButton onClick={() => setExpanded(isOpen ? null : item.name)}>
                      <ListItemText primary={item.name} slotProps={itemTextProps} />
                      <Icon>{isOpen ? "expand_less" : "expand_more"}</Icon>
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
                >
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
