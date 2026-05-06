import "@mui/material/styles";

import type borders from "../assets/theme/base/borders";
import type boxShadows from "../assets/theme/base/boxShadows";
import type colors from "../assets/theme/base/colors";

export interface ShowcasePalette {
  dark: string;
  grey: string;
  yellow: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
    showcase: ShowcasePalette;
  }
  interface PaletteOptions {
    dark?: PaletteOptions["primary"];
    showcase?: ShowcasePalette;
  }
  interface Theme {
    boxShadows: typeof boxShadows;
    borders: typeof borders;
    colors: typeof colors;
  }
  interface ThemeOptions {
    boxShadows?: typeof boxShadows;
    borders?: typeof borders;
    colors?: typeof colors;
  }
}
