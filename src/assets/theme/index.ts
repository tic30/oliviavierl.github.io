import { createTheme } from "@mui/material/styles";
import type { TypographyVariantsOptions } from "@mui/material/styles";
import borders from "./base/borders";
import boxShadows from "./base/boxShadows";
import breakpoints from "./base/breakpoints";
import typography from "./base/typography";

const primaryMain = "#fb7e00";
const darkMain = "#25271c";

const greyScale = {
  100: "#f3f4f6",
  200: "#e5e7eb",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1f2937",
  900: "#111827",
};

const showcaseColors = {
  dark: "#0c222f",
  grey: "#4c5053",
  yellow: "#f4b740",
};

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "media" },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: primaryMain },
        secondary: { main: "#6b7280" },
        text: {
          primary: "#344767",
          secondary: "#6b7280",
        },
        grey: greyScale,
        dark: { main: darkMain },
      },
    },
    dark: {
      palette: {
        primary: { main: primaryMain },
        secondary: { main: "#9ca3af" },
        text: {
          primary: "#f3f4f6",
          secondary: "#9ca3af",
        },
        grey: greyScale,
        dark: { main: "#f3f4f6" },
      },
    },
  },
  breakpoints: {
    values: breakpoints.values,
  },
  typography: {
    fontFamily: typography.fontFamily,
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    h4: typography.h4,
    h5: typography.h5,
    h6: typography.h6,
    body1: typography.body1,
    body2: typography.body2,
    button: typography.button as TypographyVariantsOptions["button"],
  },
  boxShadows,
  borders,
  showcaseColors,
  unstable_sxConfig: {
    borderRadius: {
      themeKey: "borders",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: false },
      styleOverrides: {
        root: { maxWidth: 992 },
      },
    },
  },
});

export default theme;
