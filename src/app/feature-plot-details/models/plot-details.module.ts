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
}
export interface SpecificationsType {
  label: string;
  data: string[];
}
