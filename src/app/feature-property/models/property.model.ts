export interface MaxMinProps {
  max: string;
  min: string;
}

export interface Amenities {
  label: string;
  data: string[];
}

export interface SlideProps {
  id?: number;
  caption: string;
  path: string;
}

export interface MediaProps {
  slider: SlideProps;
  gallery: SlideProps[];
  masterPlans: SlideProps[];
  floorPlans: SlideProps[];
  routeMaps: SlideProps[];
}
export interface UnitProps {
  type: string;
  available: boolean;
  builtUpArea: MaxMinProps;
  buitUpAreaInSqm?: MaxMinProps;
  carpetAreaInSqm?: MaxMinProps;
  carpetArea: MaxMinProps;
  price: MaxMinProps;
  pricePerSQFT: string;
}

export interface PlotDetailsProps {
  media: MediaProps;
  unit: UnitProps[];
  amenities: Amenities[];
  possession: string;
  launched: string;
  propertyStatus: string;
  price: MaxMinProps;
  rera: string;
  area: MaxMinProps;
  specifications: SpecificationsType[];
  loan: string[];
  legal: string[];
  aboutTheProperty: AboutThePropertyProps;
  name: string;
  location: LocationProps;
  builder: BuilderProps;
}
export interface SpecificationsType {
  label: string;
  data: string[];
}

export interface LoadPropertyArgs {
  location: string;
  slug: string;
}
export interface SeoProps {
  slug: string;
  keyword: string;
  descriptoin: string;
}
export interface LocationProps {
  place: string;
  area: string;
  city: string;
  state: string;
  pincode: number;
  advantage: string;
}
export interface PropertyDetails {
  label: string;
  elType: string;
  data: string[];
}
export interface AboutThePropertyProps {
  summary: string;
  more: PropertyDetails[];
}
export interface BuilderProps {
  name: string;
  about: string;
}

export interface PropertyProps extends PlotDetailsProps {
  slug: string;
  id: string | number;
  caption: string;
  seo: SeoProps;
}

export interface ModalDataProps {
  [key: string]: PropertyProps[];
}

export enum PropertyErrorType {
  PROPERTY_NOT_FOUND = 1,
}
