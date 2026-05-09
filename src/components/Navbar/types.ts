export interface NavItem {
  name: string;
  description?: string;
  route?: string;
  href?: string;
  icon?: string;
  children?: NavItem[];
}
