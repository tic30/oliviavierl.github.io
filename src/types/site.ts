import type { ReactNode } from "react";

export type ThemeColor =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "light"
  | "dark";

export type AccentColor = ThemeColor | "inherit" | "text" | "transparent" | "default" | "white";
export type SurfaceColor = ThemeColor | "transparent";
export type CardActionType = "external" | "internal";
export type StyleObject = Record<string, unknown>;

export interface CardAction {
  type: CardActionType;
  route: string;
  label: string;
  color?: AccentColor;
}

export type MaybeCardAction = CardAction | false;

export interface NavigationRoute {
  key?: string;
  name: string;
  icon?: ReactNode;
  href?: string;
  route?: string;
  component?: ReactNode;
  dropdown?: boolean;
  description?: string;
  collapse?: NavigationRoute[];
  columns?: number;
  rowsPerColumn?: number;
}

export interface CompanyInfo {
  href: string;
  name: string;
}

export interface ShowcaseItem {
  name: string;
  description: string;
  longDesc: string;
  bgImg: string;
  bgColor: string;
  route?: string;
  href?: string;
  component?: ReactNode;
}
