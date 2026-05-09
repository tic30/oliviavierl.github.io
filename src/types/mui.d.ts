import "@mui/material/styles";

import type borders from "../assets/theme/base/borders";
import type boxShadows from "../assets/theme/base/boxShadows";

export interface ShowcaseColors {
  dark: string;
  grey: string;
  yellow: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
  }
  interface PaletteOptions {
    dark?: PaletteOptions["primary"];
  }
  interface Theme {
    boxShadows: typeof boxShadows;
    borders: typeof borders;
    showcaseColors: ShowcaseColors;
  }
  interface ThemeOptions {
    boxShadows?: typeof boxShadows;
    borders?: typeof borders;
    showcaseColors?: ShowcaseColors;
  }
}
