export interface NavItem {
  name: string;
  route?: string;
  href?: string;
  children?: NavItem[];
}
