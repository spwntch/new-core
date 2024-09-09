export interface IBrand {
  logoUrl?: { light?: string; dark?: string; floating?: string };
  markUrl?: { light?: string; dark?: string; floating?: string };
  underConstructionUrl?: { light?: string; dark?: string };
  markText?: string;
  tagline?: string;
  about?: IBrandAbout;
  contact?: IBrandContact;
  social?: IBrandSocial;
  legal?: IBrandLegal;
}

export interface IBrandAbout {
  title?: string;
  body: string[];
}

export interface IBrandContact {
  address?: string;
  website: string;
  mail: string;
  phone: string;
}

export interface IBrandSocial {
  [key: string]: string;
}

export interface IBrandLegal {
  copyrightYear: string;
  companyName: string;
}
