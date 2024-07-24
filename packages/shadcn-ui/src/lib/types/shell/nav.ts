export interface INavMenu {
  label: string;
  onSelect?: (event: Event) => void;
  children?: INavItem[];
}

export interface INavLink {
  label: string;
  description?: string;
  href: string;
  active?: boolean;
  onSelect?: (event: Event) => void;
  onLinkTo: (href: string) => void;
}

export type INavItem = INavLink | INavMenu;
