// Or use https://mui.com/components/tabs/
import * as React from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "base-ui";
import PropTypes from "prop-types";
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: colors.primary.main,
//     },
//   },
// });

const Tabs = ({ items, buttons, buttonSx, sx }) => {
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
                borderTopLeftRadius: borders.borderRadius.xl,
                borderTopRightRadius: borders.borderRadius.xl,
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

Tabs.defaultProps = {
  buttonSx: {},
  sx: {},
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  buttons: PropTypes.arrayOf(PropTypes.any).isRequired,
  buttonSx: PropTypes.objectOf(PropTypes.any),
  sx: PropTypes.objectOf(PropTypes.any),
};

export default Tabs;
