import { createTheme } from "@mui/material/styles";
import borders from "./base/borders";
import boxShadows from "./base/boxShadows";
import breakpoints from "./base/breakpoints";
import colors from "./base/colors";
import typography from "./base/typography";

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

const showcasePalette = {
  dark: colors.showcaseColors.dark,
  grey: colors.showcaseColors.grey,
  yellow: colors.showcaseColors.yellow,
};

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "media" },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: colors.primary.main },
        secondary: { main: "#6b7280" },
        text: {
          primary: "#344767",
          secondary: "#6b7280",
        },
        common: {
          white: colors.white.main,
          black: colors.black.main,
        },
        grey: greyScale,
        background: {
          default: colors.white.main,
          paper: colors.white.main,
        },
        dark: { main: colors.dark.main },
        showcase: showcasePalette,
      },
    },
    dark: {
      palette: {
        primary: { main: colors.primary.main },
        secondary: { main: "#9ca3af" },
        text: {
          primary: "#f3f4f6",
          secondary: "#9ca3af",
        },
        common: {
          white: colors.white.main,
          black: colors.black.main,
        },
        grey: greyScale,
        background: {
          default: "#111827",
          paper: "#1f2937",
        },
        dark: { main: "#f3f4f6" },
        showcase: showcasePalette,
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
    button: typography.button as any,
  },
  boxShadows,
  borders,
  colors,
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
