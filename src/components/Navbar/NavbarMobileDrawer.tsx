import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Drawer from "@mui/material/Drawer";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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
};

function NavbarMobileDrawer({ items, open, onClose }: NavbarMobileDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { sx: { width: 280 } } }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <IconButton onClick={onClose} aria-label="close menu">
          <Icon>close</Icon>
        </IconButton>
      </Box>
      <List sx={{ pt: 0 }}>
        {items.map((item) => {
          if (item.children?.length) {
            const isOpen = expanded === item.name;
            return (
              <Box key={item.name}>
                <ListItemButton
                  onClick={() => setExpanded(isOpen ? null : item.name)}
                >
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
                        <ListItemText primary={child.name} slotProps={childTextProps} />
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
    </Drawer>
  );
}

export default NavbarMobileDrawer;
