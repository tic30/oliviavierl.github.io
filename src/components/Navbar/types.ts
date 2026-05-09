import type { ReactNode } from "react";

export interface NavItem {
  name: string;
  description?: string;
  route?: string;
  href?: string;
  icon?: ReactNode;
  children?: NavItem[];
}
