import { PlotDetails } from './components/plot-details/plot-details';
import data from 'data/projects.json';
import { PlotDetailsProps } from './models';

export const FeaturePlotDetails = () => {
  console.log(data);

  const plotDetailsProps: PlotDetailsProps = {
    media: data.property.media,
    unit: data.property.unit,
    amenities: data.property.amenities,
    possession: data.property.possession,
    launched: data.property.launched,
    propertyStatus: data.property.propertyStatus,
    price: data.property.price,
    rera: data.property.rera,
    area: data.property.area,
    specifications: data.property.specifications,
  };
  return <PlotDetails {...plotDetailsProps} />;
};
