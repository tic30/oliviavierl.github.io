import React from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import type { StyleObject } from "types/site";

interface TabsProps {
  items: React.ReactNode[];
  buttons: React.ReactNode[];
  buttonSx?: StyleObject;
  sx?: StyleObject;
}

const Tabs = ({ items, buttons, buttonSx = {}, sx = {} }: TabsProps) => {
  const [active, setActive] = React.useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      <ToggleButtonGroup value={active} exclusive onChange={(_, val) => setActive(val)}>
        {buttons.map((item, i) => (
          <ToggleButton
            value={i}
            key={`tabs-${i}`}
            sx={{
              flexGrow: 1,
              borderTopLeftRadius: (theme) => theme.borders.borderRadius.xl,
              borderTopRightRadius: (theme) => theme.borders.borderRadius.xl,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              ...buttonSx,
            }}
            color="primary"
          >
            {item}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {items[active]}
    </Box>
  );
};

export default Tabs;
