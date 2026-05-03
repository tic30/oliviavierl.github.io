import borders from "./base/borders";
import boxShadows from "./base/boxShadows";
import breakpoints from "./base/breakpoints";
import colors from "./base/colors";
import typography from "./base/typography";

const palette = {
  primary: colors.primary,
  dark: colors.dark,
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
};

const theme = {
  palette,
  colors,
  typography,
  borders,
  breakpoints,
  boxShadows,
  shadows: [
    "none",
    boxShadows.xs,
    boxShadows.sm,
    boxShadows.md,
    boxShadows.lg,
  ],
};

export default theme;