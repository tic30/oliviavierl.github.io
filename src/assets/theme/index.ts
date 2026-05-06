import { createTheme } from "@mui/material/styles";
import borders from "./base/borders";
import boxShadows from "./base/boxShadows";
import breakpoints from "./base/breakpoints";
import colors from "./base/colors";
import typography from "./base/typography";

const theme = createTheme({
  palette: {
    primary: { main: colors.primary.main },
    secondary: { main: "#6b7280" },
    text: {
      primary: colors.dark.main,
      secondary: "#6b7280",
    },
    common: {
      white: colors.white.main,
      black: colors.black.main,
    },
    grey: {
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    background: {
      default: colors.white.main,
      paper: colors.white.main,
    },
    dark: { main: colors.dark.main },
    showcase: {
      dark: colors.showcaseColors.dark,
      grey: colors.showcaseColors.grey,
      yellow: colors.showcaseColors.yellow,
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
});

export default theme;
