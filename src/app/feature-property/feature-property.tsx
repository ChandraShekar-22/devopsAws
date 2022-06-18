import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PlotDetailsProps, LoadPropertyArgs, PropertyErrorType } from './models';
import { usePropertySlice } from './slice/feature-property.slice';
import { selectProperty, selectError } from './slice/feature-property.selector';
import { PropertyDetails } from './components/property-details/property-details';

export const FeatureProperty = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const action = usePropertySlice().actions;
  const property = useSelector(selectProperty);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  useEffect(() => {
    const propertyArgs: LoadPropertyArgs = {
      location: params.location || '',
      slug: params.slug || '',
    };
    dispatch(action.loadPropertyData(propertyArgs));
  }, [action, dispatch, params]);
  useEffect(() => {
    if (error === PropertyErrorType.PROPERTY_NOT_FOUND) {
      navigate('/');
    }
  }, [error, navigate]);
  console.log(error === PropertyErrorType.PROPERTY_NOT_FOUND, error);
  if (property) {
    const plotDetailsProps: PlotDetailsProps = {
      media: property.media,
      unit: property.unit,
      amenities: property.amenities,
      possession: property.possession,
      launched: property.launched,
      propertyStatus: property.propertyStatus,
      price: property.price,
      rera: property.rera,
      area: property.area,
      specifications: property.specifications,
      loan: property.loan,
      legal: property.legal,
      aboutTheProperty: property.aboutTheProperty,
      name: property.name,
      builder: property.builder,
      location: property.location,
    };
    return <PropertyDetails {...plotDetailsProps} />;
  }
  return <></>;
};
